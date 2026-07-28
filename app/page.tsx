import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/home/Hero";
import TrustBar from "@/app/components/home/TrustBar";
import Services from "@/app/components/home/Services";
import WhyChoose from "@/app/components/home/WhyChoose";
import About from "./components/home/About";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChoose />
        <About />
      </main>
      <Footer />
    </>
  );
}