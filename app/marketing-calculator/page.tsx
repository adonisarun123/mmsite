import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Calculator | MonkMantra - ROI & Budget Planning Tools",
  description: "Free marketing calculators for ROI analysis, budget planning, campaign costs, and performance forecasting.",
};

export default function MarketingCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              Free Marketing <span className="gradient-text">Calculators</span> & Planning Tools
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Make smarter marketing decisions with our comprehensive collection of free calculators for ROI analysis, budget planning, and performance forecasting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 