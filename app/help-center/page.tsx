import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | MonkMantra - Support & FAQs",
  description: "Find answers to common questions, get support, and access resources in our comprehensive help center. Quick solutions for all your needs.",
};

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              <span className="gradient-text">Help Center</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions, get support, and access resources. We're here to help you succeed with your marketing goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 