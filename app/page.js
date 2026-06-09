import TopBanner from "./components/ui/top-banner";
import Header from "./components/ui/header";
import HeroSection from "./components/ui/heroSection/hero-section";

export default function Home() {
  return (  
    <div className="bg-white">
      <TopBanner />
      <Header />
      <HeroSection />
    </div>
  );
}
