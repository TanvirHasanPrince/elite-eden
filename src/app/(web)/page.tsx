import AfterHeroSection from "@/components/afterHeroSection/AfterHeroSection";
import FeaturedRoom from "@/components/featuredRoom/FeaturedRoom";
import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import OfferedServices from "@/components/offeredServices/OfferedServices";
import PageSearch from "@/components/pageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection></HeroSection>
      <AfterHeroSection />
      {/* <PageSearch /> */}
      <FeaturedRoom featuredRoom={featuredRoom}></FeaturedRoom>
      <OfferedServices/>
      <Gallery />
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
