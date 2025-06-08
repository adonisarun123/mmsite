import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing | MonkMantra - GDPR Compliance & Data Handling",
  description: "Learn about MonkMantra's data processing practices, GDPR compliance, and how we handle your personal information responsibly.",
};

export default function DataProcessingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="gradient-text">Data Processing</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="card">
                <div className="card-content space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Controller Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      MonkMantra acts as the data controller for personal information collected through our website and services. We are committed to protecting your privacy and ensuring GDPR compliance.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis for Processing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We process personal data based on legitimate interests, contractual necessity, consent, and legal obligations as outlined in GDPR Article 6.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Processing Activities</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Service delivery and customer support</li>
                      <li>• Marketing communications (with consent)</li>
                      <li>• Website analytics and improvement</li>
                      <li>• Legal compliance and business operations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights Under GDPR</h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Right to access your personal data</li>
                      <li>• Right to rectification of inaccurate data</li>
                      <li>• Right to erasure (right to be forgotten)</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to data portability</li>
                      <li>• Right to object to processing</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain personal data only as long as necessary for the purposes outlined in our privacy policy or as required by law. Data is securely deleted when no longer needed.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">International Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, including adequacy decisions and standard contractual clauses.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contact Our Data Protection Officer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For any data protection inquiries or to exercise your rights, please contact our Data Protection Officer at dpo@monkmantra.com.
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