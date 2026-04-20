import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Book from "@/components/Book";
import Pricing from "@/components/Pricing";
import Awards from "@/components/Awards";
import Media from "@/components/Media";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import WallOfFame from "@/components/WallOfFame";
import Blog from "@/components/Blog";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Book />
      <Pricing />
      <Awards />
      <Media />
      <Testimonials />
      <Gallery />
      <WallOfFame />
      <Blog />
      <Community />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
