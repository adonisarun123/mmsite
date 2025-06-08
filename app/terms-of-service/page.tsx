import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MonkMantra - Legal Terms & Conditions",
  description: "MonkMantra's terms of service outlining the legal terms and conditions for using our marketing services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="gradient-text">Terms of Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="card">
                <div className="card-content space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using MonkMantra's services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Permission is granted to temporarily download one copy of the materials on MonkMantra's website for personal, non-commercial transitory viewing only.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our marketing services are provided under specific terms outlined in individual service agreements. These terms govern the general use of our website and resources.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The materials on MonkMantra's website are provided on an 'as is' basis. MonkMantra makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In no event shall MonkMantra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MonkMantra's website, even if MonkMantra or a MonkMantra authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at legal@monkmantra.com.
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