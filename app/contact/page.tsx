import { Metadata } from "next";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import ContactHero from "@/app/components/contact/ContactHero";
import ContactCards from "@/app/components/contact/ContactCards";

import ContactServiceArea from "@/app/components/contact/ContactServiceArea";
import ContactCTA from "@/app/components/contact/ContactCTA";
import RequestServiceForm from "@/app/components/about/RequestServiceForm";

export const metadata: Metadata = {
  title: "Contact Us | Philadelphia Plumbing Services",
  description:
    "Contact Philadelphia Plumbing Services to schedule plumbing repairs, drain cleaning, water heater installation, excavation, and more throughout Philadelphia.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />

        <ContactCards />

        <RequestServiceForm />

        <ContactServiceArea />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
