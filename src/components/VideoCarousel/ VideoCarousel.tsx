import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { VideoCarouselProps } from "./types";
import { Carousel, CarouselContainer, CarouselControl, CarouselControlWrap, CarouselIcon, CarouselItem, VideoTitle } from "./styles";
import MuteIcon from "../../assets/images/icons/mute-icon.svg";
import PauseIcon from "../../assets/images/icons/pause-icon.svg";
import UnMuteIcon from "../../assets/images/icons/unmute-icon.svg";
import PlayIcon from "../../assets/images/icons/play-icon.svg";
import LeftScrollIcon from "../../assets/images/icons/left-control.svg";
import RightScrollIcon from "../../assets/images/icons/right-control.svg";
import { Icon } from "../NavBar/styles";

const VideoCarousel: FC<VideoCarouselProps> = ({ videos }) => {
   const [activeSlide, setActiveSlide] = useState<number>(0);

   const videoRefs = useRef<HTMLVideoElement[]>([]);
   const carouselRef = useRef<HTMLDivElement>(null);

   //Play first video on mount
   useEffect(() => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
         firstVideo.muted = true;
         firstVideo.play().catch((error) => console.log("Autoplay blocked:", error));
      }
   }, []);

   //Funtion to toggle play and pause on active video
  
const muteAndPauseVideo = useCallback(
    (action: "pause" | "mute", slideId: number) => {
       const video = videoRefs.current[slideId];
 
       if (!video) return;
 
       // Pause the previous video if a new slide is selected
       if (slideId !== activeSlide) {
          resetVideo(activeSlide);
       }
 
       // Handle the pause action
       if (action === "pause") {
          if (!video.paused) {
             video.pause();
          } else {
             video.play();
          }
       }
 
       // Handle the mute action
       if (action === "mute") {
          video.muted = !video.muted;
       }
 
       // Update the active slide after a short delay
       setTimeout(() => {
          setActiveSlide(slideId);
       }, 100);
    },
    [activeSlide, setActiveSlide] // Dependencies array
 );

   //Function to set active video
   const setActiveVideo = (slideId: number) => {
      event?.stopPropagation();
      resetVideo(activeSlide);
      setTimeout(() => {
         const video = videoRefs.current[slideId];
         video.play();
         video.muted = false;
         setActiveSlide(slideId);
      }, 500);
   };

   //Function to reset current active video
   const resetVideo = (slideId: number) => {
      const video = videoRefs.current[slideId];
      video.pause();
      video.muted = true;
   };

   //function to handle scrolling of carousel
   const handleScroll = (direction: "left" | "right") => {
      console.log(carouselRef.current);
      if (!carouselRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth / 3.5; // Scroll one full view

      let newScrollPosition = direction === "right" ? scrollLeft + scrollAmount : scrollLeft - scrollAmount;

      const slides = Array.from(carouselRef.current.children) as HTMLElement[];
      // Find the closest slide index to the current scroll position
      let closestIndex = 0;
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
         const distance = Math.abs(slide.offsetLeft - scrollLeft);
         if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
         }
      });

      setActiveVideo(closestIndex + 1)
      if (newScrollPosition >= scrollWidth - clientWidth) {
         newScrollPosition = 0; // Reset to beginning
      }

      if (newScrollPosition <= 0 && direction === "left") {
         newScrollPosition = scrollWidth - clientWidth + 500; // Jump to last
      }

      carouselRef.current.scrollTo({
         left: newScrollPosition,
         behavior: "smooth",
      });
   };

   // Memoize video elements to avoid unnecessary re-renders
   const videoSlides = useMemo(() => {
      return videos.map((video, index) => (
         <CarouselItem key={index} id={`slide-${index}`} $active={activeSlide === index}>
            <video
               ref={(el) => {
                  if (el) videoRefs.current[index] = el;
               }}
               className="w-full cursor-pointer rounded-[0.6rem] object-cover h-full"
               src={video.link}
               loop
               onClick={() => setActiveVideo(index)}
            />
            <CarouselIcon size="14" src={videoRefs.current[index]?.muted ? UnMuteIcon : MuteIcon} position="top-[75%] left-[85%]" onClick={() => muteAndPauseVideo("mute", index)} />
            <CarouselIcon size="14" src={videoRefs.current[index]?.paused ? PlayIcon : PauseIcon} position="top-[85%] left-[85%]" onClick={() => muteAndPauseVideo("pause", index)} />
            <VideoTitle>{video.title}</VideoTitle>
         </CarouselItem>
      ));
   }, [videos, activeSlide]); //Recalculates only when videos or activeSlide change

   return (
      <CarouselContainer>
         <CarouselControlWrap>
            <CarouselControl onClick={() => handleScroll("left")}>
               <Icon src={LeftScrollIcon} size="12" />
            </CarouselControl>
            <CarouselControl onClick={() => handleScroll("right")}>
               <Icon src={RightScrollIcon} size="12" />
            </CarouselControl>
         </CarouselControlWrap>
         <Carousel ref={carouselRef}>{videoSlides}</Carousel>
      </CarouselContainer>
   );
};

export default VideoCarousel;
