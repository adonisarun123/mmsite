import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation | MonkMantra - Developer Resources",
  description: "Comprehensive API documentation for MonkMantra's marketing services. Integrate our marketing tools and services into your applications.",
};

export default function APIDocumentationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-shadow-lg">
              <span className="gradient-text">API Documentation</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive API documentation for developers and partners. Integrate MonkMantra's marketing services into your applications and workflows.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 