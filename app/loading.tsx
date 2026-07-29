import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Container from "./components/ui/Container";
import Section from "./components/ui/Section";

export default function Loading() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <div className="py-24 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#005A9C]" />

            <p className="mt-6 text-slate-600">Loading...</p>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
