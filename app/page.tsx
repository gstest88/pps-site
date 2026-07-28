import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/home/Hero";
import TrustBar from "@/app/components/home/TrustBar";
import Services from "@/app/components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
    </>
  );
}