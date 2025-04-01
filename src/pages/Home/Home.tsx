import { VideoCarousel } from "@/components";
import { ContentWrapper, HomeText } from "@/components/shared/styles";
import { videoLinkList } from "@/utils/constants";

const Home = () => {
   return (
      <ContentWrapper>
         <HomeText>A day in the life</HomeText>
         <VideoCarousel videos={videoLinkList} />
      </ContentWrapper>
   );
};

export default Home;
