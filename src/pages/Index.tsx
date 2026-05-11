import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import MobileAppSection from "@/components/MobileAppSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <FeaturesSection />
    <MobileAppSection />
    <TestimonialSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
