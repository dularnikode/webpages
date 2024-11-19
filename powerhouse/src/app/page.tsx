import Classes from "./components/Classes";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <Classes />
      <Pricing />
    </>
  );
}
