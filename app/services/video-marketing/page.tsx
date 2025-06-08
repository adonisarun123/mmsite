import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Sparkles, 
  Quote,
  Video,
  Target,
  TrendingUp,
  Clock,
  Camera
} from "lucide-react";

export const metadata: Metadata = {
  title: "Video Marketing | MonkMantra - Engaging Video Content That Converts",
  description: "Create compelling video content that drives engagement and conversions. Professional video marketing with +400% engagement rates.",
};

export default function VideoMarketingPage() {
  const features = [
    {
      icon: Video,
      title: "Strategic Video Content",
      description: "Create compelling video content tailored to your audience and optimized for each platform and stage of the buyer journey."
    },
    {
      icon: Camera,
      title: "Professional Production",
      description: "High-quality video production that captures attention and communicates your brand message effectively."
    },
    {
      icon: Target,
      title: "Platform Optimization",
      description: "Optimize videos for each platform's unique requirements and algorithms to maximize reach and engagement."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive video analytics to track performance, engagement, and ROI across all video campaigns."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Develop comprehensive video marketing strategy aligned with your brand goals and target audience preferences.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Content Creation",
      description: "Script writing, filming, and editing high-quality video content optimized for maximum engagement.",
      duration: "Week 2-3"
    },
    {
      step: "03",
      title: "Distribution & Optimization",
      description: "Launch videos across multiple platforms with proper optimization and performance tracking.",
      duration: "Week 4"
    },
    {
      step: "04",
      title: "Analytics & Scaling",
      description: "Monitor performance, gather insights, and scale successful video content across additional channels.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Engagement Rate", value: "+400%", description: "Average increase in video engagement" },
    { metric: "View Completion", value: "85%", description: "Average video completion rate" },
    { metric: "Lead Generation", value: "+250%", description: "Increase in video-driven leads" },
    { metric: "Brand Awareness", value: "+300%", description: "Improvement in brand recognition" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-purple-50/30 to-indigo-50/30 dark:via-purple-950/20 dark:to-indigo-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 mb-8 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-300">
              <Play className="h-4 w-4" />
              Video Marketing
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Engaging <span className="gradient-text">Video Content</span> That Converts
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Create compelling video content that captures attention, builds trust, and drives conversions across all platforms. 
              <span className="text-purple-600 font-semibold dark:text-purple-400"> Average +400% engagement increase</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Video Strategy
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Video Marketing Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Video Marketing</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to production, we create video content that engages your audience and drives measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 mb-6 dark:bg-purple-950/30 dark:text-purple-400">
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

      {/* Complete Video Marketing Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Video Marketing</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to distribution, we handle every aspect of video marketing to maximize your reach and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Video Services:</h3>
              <div className="space-y-3">
                {[
                  "Explainer Video Creation",
                  "Social Media Video Content", 
                  "Product Demo Videos",
                  "Brand Story Videos",
                  "Customer Testimonials",
                  "Animated Video Production",
                  "Live Video Streaming",
                  "Video SEO Optimization"
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
                <Quote className="h-12 w-12 text-purple-500 mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6">
                  "Our video campaigns now get 5x more engagement than any other content. The quality and strategy are exceptional."
                </p>
                <div className="font-medium text-foreground">Jennifer Lee</div>
                <div className="text-sm text-muted-foreground">Marketing Director, TechStart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Video Marketing Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Video Marketing</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to video marketing that ensures engaging content and maximum impact across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-purple-950/30 dark:text-purple-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Video Marketing Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Video Marketing</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our video marketing strategies consistently deliver exceptional engagement, completion rates, and business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-purple-600 mb-2 dark:text-purple-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-purple-200 dark:border-purple-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our video campaigns now get 5x more engagement than any other content. The quality and strategy are exceptional."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium dark:bg-purple-950/30 dark:text-purple-400">
                    JL
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Jennifer Lee</div>
                    <div className="text-sm text-muted-foreground">Marketing Director, TechStart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-background dark:from-purple-950/20 dark:via-indigo-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-purple-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-purple-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Create</span> Engaging Videos?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free video strategy session and discover how to leverage video content for maximum engagement and conversions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Video Strategy
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free video strategy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Professional production
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