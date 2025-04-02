import tw from "tailwind-styled-components";
import { Icon } from "../NavBar/styles";

export const CarouselContainer = tw.div`
    w-full
    overflow-hidden
    flex
    flex-col
    justify-center
    items-center
    relative
    mt-[-3rem]
`

export const Carousel = tw.div`
    flex
    gap-2
    max-w-max
    min-h-[23rem]
    w-full
    overflow-x-auto
    flex-nowrap
    scrollbar-hidden
`

export const CarouselItem = tw.div`
    h-[20rem]
    w-[15rem]
    rounded-[0.7rem]
    border-3
    border-trasnparent
    ${(p) => (p.$active && "border-primary-blue")}
    bg-video-bg
    bg-cover
    bg-no-repeat
    flex-shrink-0
    relative
`

export const CarouselIcon = tw(Icon)`
    absolute
    cursor-pointer
    carousel-interactive-icon
    z-10
    ${(props) => props.position && props.position}

`
export const VideoTitle = tw.div`
   text-[0.75rem]
   text-grey-1
   mt-2
   `;


   export const CarouselControlWrap = tw.div`
    flex
    gap-3
    ml-auto
    mb-3
   `

   export const CarouselControl = tw.div`
    rounded-full
    flex
    justify-center
    item-center
    bg-fog-soft
    text-secondary-blue
    p-4
    px-5
    cursor-pointer
   `