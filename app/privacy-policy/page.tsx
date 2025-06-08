import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MonkMantra - Data Protection & Privacy Rights",
  description: "MonkMantra's privacy policy explaining how we collect, use, and protect your personal information. Your privacy is our priority.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="card">
                <div className="card-content space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect information you provide directly to us, such as when you create an account, 
                      request our services, subscribe to our newsletter, or contact us for support.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use the information we collect to provide, maintain, and improve our services, 
                      communicate with you, and comply with legal obligations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this privacy policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate security measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to access, update, or delete your personal information. 
                      You may also opt out of certain communications from us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at 
                      privacy@monkmantra.com or through our contact page.
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