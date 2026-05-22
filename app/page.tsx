import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import Partners from "@/components/partners";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh bg-background">
      <Hero />
      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <div className="rounded-xl bg-card p-6">
          <ProductCard />
        </div>

        {/* Loan categories and eligible-businesses removed per request */}
      </section>
      <Pricing />
      <Partners />
      <Testimonials />
      <Stats />
      <Faq />
      <Footer />
    </main>
  );
}
