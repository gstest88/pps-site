import Link from "next/link";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl py-24 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              404
            </p>

            <h1 className="mt-6 text-5xl font-bold text-[#123B63]">
              Page Not Found
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>

            <div className="mt-12">
              <Button href="/">Return Home</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
