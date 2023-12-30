import Gallery from "@/components/gallery/Gallery";
import HeroSection from "@/components/heroSection/HeroSection";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import PageSearch from "@/components/pageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <PageSearch />
      {/* Featured Room */}
      <Gallery />
   <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
