import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts"
import Category from "@/components/Category";
import Footer from "@/components/Footer"
import HotCategory from "@/components/HotCategory";
import OurProducts from "@/components/OurProducts";

export default function Home() {
  return (
    <div>
    

      <Navbar />
     <Hero />
     <FeaturedProducts />
    <Category />
    <HotCategory />
    <OurProducts />
    <br />
    <br />
    <Footer />
    </div>
  );
}
