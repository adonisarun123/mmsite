import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Palette,
  FileText,
  Video,
  Image,
  Clock,
  Sparkles,
  Quote,
  TrendingUp,
  Users,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Content Marketing | MonkMantra - High-Converting Content That Drives Results",
  description: "Create compelling content that educates, engages, and converts. Blog posts, videos, landing pages, and email sequences that drive +220% organic traffic.",
};

export default function ContentMarketingPage() {
  const features = [
    {
      icon: FileText,
      title: "Strategic Content Planning",
      description: "Data-driven content strategies that align with your business goals and target audience needs."
    },
    {
      icon: Palette,
      title: "Multi-Format Content",
      description: "Blog posts, videos, infographics, podcasts, and interactive content optimized for each platform."
    },
    {
      icon: TrendingUp,
      title: "SEO-Optimized Writing",
      description: "Content that ranks high in search results while providing genuine value to your audience."
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Compelling storytelling that builds trust, authority, and drives meaningful audience engagement."
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      name: "Blog Posts & Articles",
      description: "Long-form content that educates, informs, and drives organic traffic.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Video,
      name: "Video Content",
      description: "Engaging video content for YouTube, social media, and your website.",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Image,
      name: "Visual Content",
      description: "Infographics, images, and visual assets that capture attention.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Eye,
      name: "Landing Pages",
      description: "High-converting landing pages optimized for specific campaigns.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Content Strategy Development",
      description: "Research your audience, competitors, and create a comprehensive content strategy.",
      duration: "Week 1-2"
    },
    {
      step: "02", 
      title: "Content Calendar Creation",
      description: "Plan and schedule content across all channels with optimal timing and frequency.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Content Production",
      description: "Create high-quality, engaging content optimized for search and conversions.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Performance Optimization",
      description: "Monitor performance and optimize content for maximum engagement and results.",
      duration: "Monthly"
    }
  ];

  const results = [
    { metric: "Organic Traffic Growth", value: "+220%", description: "Average increase from content marketing" },
    { metric: "Lead Generation", value: "+180%", description: "More qualified leads from content" },
    { metric: "Brand Authority", value: "+150%", description: "Increased brand recognition and trust" },
    { metric: "Engagement Rate", value: "+95%", description: "Higher audience engagement across platforms" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-emerald-50/30 to-teal-50/30 dark:via-emerald-950/20 dark:to-teal-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 text-sm font-medium text-emerald-700 mb-8 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300">
              <Palette className="h-4 w-4" />
              Content Marketing
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              High-Converting <span className="gradient-text">Content Marketing</span> That Drives Results
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Create compelling content that educates, engages, and converts your audience at every stage of the customer journey. 
              <span className="text-emerald-600 font-semibold dark:text-emerald-400"> Average +220% organic traffic growth</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Content Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Content Marketing</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We create content that not only engages your audience but drives measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-6 dark:bg-emerald-950/30 dark:text-emerald-400">
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

      {/* Content Types Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Content Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From blog posts to videos, we create content that resonates with your audience across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="card hover-lift text-center">
                <div className="card-content">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${type.bgColor} mb-4`}>
                    <type.icon className={`h-6 w-6 ${type.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {type.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Content Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to content creation that ensures consistent quality and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-emerald-950/30 dark:text-emerald-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Content Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our content marketing strategies deliver measurable improvements in traffic, leads, and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-emerald-600 mb-2 dark:text-emerald-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial */}
          <div className="card border-2 border-emerald-200 dark:border-emerald-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "The content MonkMantra creates for us is incredible. Our blog traffic has tripled, and we're now seen as thought leaders in our industry. The quality and strategy behind every piece is exceptional."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-medium dark:bg-emerald-950/30 dark:text-emerald-400">
                    RK
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Rachel Kim</div>
                    <div className="text-sm text-muted-foreground">VP Marketing, InnovateTech</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-background dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-emerald-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-emerald-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Amplify</span> Your Content Strategy?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free content audit and discover how to create content that drives real business results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Content Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free content strategy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Content calendar included
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