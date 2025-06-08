import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Marketing Templates | MonkMantra - Download Ready-to-Use Templates",
  description: "Download free marketing templates for campaigns, strategies, social media, email marketing, and more. Professional templates ready to customize.",
};

export default function FreeTemplatesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              Free Marketing <span className="gradient-text">Templates</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Download professional marketing templates for campaigns, strategies, social media, email marketing, and more. Ready to customize for your brand.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 