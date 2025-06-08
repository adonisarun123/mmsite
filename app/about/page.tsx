import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About MonkMantra - AI Marketing Experts | Our Story & Mission",
  description: "Learn about MonkMantra's mission to revolutionize marketing with AI. Meet our team of experts who've generated $50M+ in revenue for 200+ companies.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
              <Sparkles className="h-4 w-4" />
              Our Story & Mission
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We're <span className="gradient-text">Revolutionizing</span> Marketing with AI
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Founded by AI experts and marketing veterans, MonkMantra transforms how businesses grow. 
              We've generated <span className="text-primary font-semibold">$50M+ in revenue</span> for 200+ companies 
              using cutting-edge AI strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe every business deserves access to enterprise-level marketing expertise. 
                That's why we've built AI-powered systems that democratize advanced marketing strategies, 
                making them accessible and affordable for companies of all sizes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card hover-lift">
                <div className="card-content p-8">
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "Most agencies promise the world but deliver mediocre results. We flip that equation - 
                    we under-promise and over-deliver, letting our results speak for themselves."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                      AC
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Alex Chen</div>
                      <div className="text-sm text-muted-foreground">CEO & Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Ready to <span className="gradient-text">Partner</span> with Us?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join 200+ companies who've chosen MonkMantra as their growth partner. 
                  Let's achieve extraordinary results together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/get-started" className="btn btn-primary btn-lg group">
                    <Sparkles className="h-5 w-5" />
                    Start Your Journey
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    See Our Results
                  </Link>
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