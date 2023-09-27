import BrandsLogo from "@/components/home/BrandsLogo";
import HeroSection from "@/components/home/HeroSection";
import WorkListSection from "@/components/home/WorkListSection";
import StarListSection from "@/components/home/StarListSection";
import FeaturedProject from "@/components/home/FeaturedProject";

export const metadata = {
  title: "Home",
  description:
    "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator",
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <BrandsLogo />
      <WorkListSection />
      <StarListSection />
      <FeaturedProject />
    </main>
  );
};

export default HomePage;
