import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import WhyChoose from "../components/home/WhyChoose";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutValues from "../components/about/AboutValues";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Philadelphia Plumbing Services",
  description:
    "Learn more about Philadelphia Plumbing Services and our commitment to honest, dependable plumbing throughout Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />

        <AboutStory />

        <AboutFeatures />

        <AboutValues />

        <WhyChoose />
      </main>

      <Footer />
    </>
  );
}