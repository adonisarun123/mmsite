import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Webinars | MonkMantra - Expert Training & Education",
  description: "Join our marketing webinars led by industry experts. Learn advanced strategies, latest trends, and best practices in digital marketing.",
};

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              Marketing <span className="gradient-text">Webinars</span> & Training
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our marketing webinars led by industry experts. Learn advanced strategies, latest trends, and best practices in digital marketing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 