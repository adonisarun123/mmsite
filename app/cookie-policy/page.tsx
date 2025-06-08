import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | MonkMantra - How We Use Cookies",
  description: "Learn about how MonkMantra uses cookies to improve your experience on our website and provide personalized content.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="gradient-text">Cookie Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="card">
                <div className="card-content space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies to understand how you use our website, remember your preferences, provide personalized content, and analyze our website traffic to improve our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Essential cookies - necessary for the website to function properly</li>
                      <li>• Analytics cookies - help us understand how visitors use our website</li>
                      <li>• Marketing cookies - used to deliver relevant advertisements</li>
                      <li>• Preference cookies - remember your settings and preferences</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some features may not work properly.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about our Cookie Policy, please contact us at privacy@monkmantra.com.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 