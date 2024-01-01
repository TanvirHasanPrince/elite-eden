import FeaturedRoom from "@/components/featuredRoom/FeaturedRoom";
import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import PageSearch from "@/components/pageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection></HeroSection>
      {/* <PageSearch /> */}
      <FeaturedRoom featuredRoom={featuredRoom}></FeaturedRoom>
      <Gallery />
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
