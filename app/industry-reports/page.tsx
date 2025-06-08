import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Reports | MonkMantra - Marketing Trends & Data Insights",
  description: "Access comprehensive industry reports with marketing trends, benchmarks, and data insights. Stay ahead with our research-driven reports.",
};

export default function IndustryReportsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              Marketing <span className="gradient-text">Industry Reports</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Access comprehensive industry reports with marketing trends, benchmarks, and data insights. Stay ahead with our research-driven analysis.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 