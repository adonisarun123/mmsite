import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  Sparkles, 
  Quote,
  MapPin,
  MessageSquare,
  Bell,
  BarChart3,
  Clock,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Marketing | MonkMantra - Mobile-First Marketing Strategies",
  description: "Reach customers on mobile with app marketing, SMS campaigns, and mobile advertising. +200% mobile conversion improvements.",
};

export default function MobileMarketingPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile App Marketing",
      description: "Comprehensive app store optimization and marketing strategies to increase downloads and user engagement."
    },
    {
      icon: MessageSquare,
      title: "SMS & Push Campaigns",
      description: "Direct mobile messaging campaigns that reach customers instantly with personalized, time-sensitive offers."
    },
    {
      icon: MapPin,
      title: "Location-Based Marketing",
      description: "Geo-targeted campaigns that reach customers when they're near your business or competitors."
    },
    {
      icon: BarChart3,
      title: "Mobile Analytics",
      description: "Comprehensive mobile tracking and analytics to optimize performance and user experience across devices."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Mobile Strategy Development",
      description: "Analyze your mobile presence and develop a comprehensive mobile marketing strategy tailored to your audience.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Campaign Setup & Optimization",
      description: "Set up mobile campaigns across all relevant channels with proper tracking and optimization in place.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Launch mobile campaigns and monitor performance with real-time optimization and adjustments.",
      duration: "Week 3"
    },
    {
      step: "04",
      title: "Scale & Expand",
      description: "Scale successful mobile campaigns and expand to new platforms and audience segments.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Mobile Conversions", value: "+200%", description: "Average increase in mobile conversions" },
    { metric: "App Downloads", value: "+350%", description: "Increase in app downloads and installs" },
    { metric: "SMS Open Rate", value: "95%", description: "Average SMS campaign open rate" },
    { metric: "Mobile Revenue", value: "+180%", description: "Revenue growth from mobile channels" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-pink-50/30 to-rose-50/30 dark:via-pink-950/20 dark:to-rose-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 text-sm font-medium text-pink-700 mb-8 dark:bg-pink-950/30 dark:border-pink-800 dark:text-pink-300">
              <Smartphone className="h-4 w-4" />
              Mobile Marketing
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Mobile-First <span className="gradient-text">Marketing Strategies</span> That Convert
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Reach your customers where they are - on mobile. App marketing, SMS campaigns, and mobile advertising that drives results. 
              <span className="text-pink-600 font-semibold dark:text-pink-400"> Average +200% mobile conversions</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Mobile Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Mobile Marketing Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Mobile Marketing</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive mobile marketing strategies that reach customers on their preferred devices and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-100 text-pink-600 mb-6 dark:bg-pink-950/30 dark:text-pink-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Mobile Marketing Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Mobile Marketing</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From app store optimization to SMS campaigns, we cover all aspects of mobile marketing for maximum reach and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Mobile Services:</h3>
              <div className="space-y-3">
                {[
                  "App Store Optimization (ASO)",
                  "SMS Marketing Campaigns", 
                  "Mobile App Advertising",
                  "In-App Marketing",
                  "Mobile-First Website Design",
                  "Location-Based Marketing",
                  "Mobile Analytics & Tracking",
                  "Push Notification Campaigns"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <Quote className="h-12 w-12 text-pink-500 mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6">
                  "Our mobile app downloads increased by 400% and SMS campaigns drive 30% of our sales. Their mobile strategy is spot on."
                </p>
                <div className="font-medium text-foreground">Maria Garcia</div>
                <div className="text-sm text-muted-foreground">CMO, FitnessApp Co.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile Marketing Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Mobile Marketing</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to mobile marketing that ensures maximum reach, engagement, and conversions on mobile devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-pink-950/30 dark:text-pink-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Mobile Marketing Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Mobile Marketing</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mobile marketing strategies consistently deliver superior performance across all mobile channels and metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-pink-600 mb-2 dark:text-pink-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-pink-200 dark:border-pink-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our mobile app downloads increased by 400% and SMS campaigns drive 30% of our sales. Their mobile strategy is spot on."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium dark:bg-pink-950/30 dark:text-pink-400">
                    MG
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Maria Garcia</div>
                    <div className="text-sm text-muted-foreground">CMO, FitnessApp Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-pink-50/50 via-rose-50/30 to-background dark:from-pink-950/20 dark:via-rose-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-pink-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-pink-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Dominate</span> Mobile?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free mobile marketing audit and discover untapped mobile opportunities for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Mobile Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free mobile audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Strategy included
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Results guaranteed
                  </div>
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