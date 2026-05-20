import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <Partners />
      <Pricing />
      <Testimonials />
      <Stats />
      <Faq />
      <Footer />
    </main>
  );
}
