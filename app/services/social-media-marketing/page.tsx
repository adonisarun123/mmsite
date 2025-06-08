import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Users,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Sparkles,
  Quote,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Marketing | MonkMantra - Engaging Community-Driven Campaigns",
  description: "Build engaging social communities that convert. Expert social media management across Instagram, Facebook, LinkedIn, Twitter, and TikTok with +180% engagement growth.",
};

export default function SocialMediaMarketingPage() {
  const features = [
    {
      icon: Users,
      title: "Community Building",
      description: "Create engaged communities around your brand that drive word-of-mouth marketing and customer loyalty."
    },
    {
      icon: MessageCircle,
      title: "Content Strategy",
      description: "Data-driven content strategies that resonate with your audience and encourage meaningful interactions."
    },
    {
      icon: Heart,
      title: "Engagement Optimization",
      description: "Advanced techniques to boost likes, comments, shares, and saves across all social platforms."
    },
    {
      icon: Share2,
      title: "Viral Marketing",
      description: "Create shareable content that expands your reach organically and builds brand awareness exponentially."
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      description: "Visual storytelling, Reels, Stories, and IGTV content that drives engagement and conversions.",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    },
    {
      name: "Facebook",
      icon: Facebook,
      description: "Community building, targeted advertising, and comprehensive audience engagement strategies.",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "B2B networking, thought leadership content, and professional community engagement.",
      color: "text-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      name: "Twitter",
      icon: Twitter,
      description: "Real-time engagement, trending topics, and conversation-driven marketing strategies.",
      color: "text-sky-500",
      bgColor: "bg-sky-50 dark:bg-sky-950/20"
    },
    {
      name: "YouTube",
      icon: Youtube,
      description: "Video content strategy, channel optimization, and subscriber growth campaigns.",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      name: "TikTok",
      icon: TrendingUp,
      description: "Viral short-form content, trend participation, and Gen Z audience engagement.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audience Research",
      description: "Deep dive into your target audience's social behavior, preferences, and engagement patterns.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Content Strategy",
      description: "Develop a comprehensive content calendar with platform-specific strategies and messaging.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality visual and written content optimized for each social platform.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Community Management",
      description: "Active engagement, community building, and performance optimization across all channels.",
      duration: "Daily"
    }
  ];

  const results = [
    { metric: "Engagement Growth", value: "+180%", description: "Average increase in likes, comments, shares" },
    { metric: "Follower Growth", value: "+250%", description: "Organic follower growth across platforms" },
    { metric: "Reach Expansion", value: "+400%", description: "Extended brand reach and visibility" },
    { metric: "Conversion Rate", value: "+95%", description: "Social media to website conversions" }
  ];

  const services = [
    "Content Creation & Curation",
    "Community Management",
    "Social Media Advertising",
    "Influencer Partnerships",
    "Analytics & Reporting",
    "Crisis Management",
    "Brand Voice Development",
    "Hashtag Strategy",
    "User-Generated Content",
    "Social Listening"
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:via-blue-950/20 dark:to-purple-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-8 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300">
              <Users className="h-4 w-4" />
              Social Media Marketing
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Build Engaging <span className="gradient-text">Social Communities</span> That Convert
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your social presence with engaging campaigns that build communities and drive conversions across all major platforms. 
              <span className="text-blue-600 font-semibold dark:text-blue-400"> Average +180% engagement increase</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Social Audit
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
              Why Choose Our <span className="gradient-text">Social Media Marketing</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We create authentic connections that turn followers into loyal customers and brand advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6 dark:bg-blue-950/30 dark:text-blue-400">
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

      {/* Platforms Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              <span className="gradient-text">Multi-Platform</span> Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We create platform-specific strategies that maximize engagement and conversions on every channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${platform.bgColor} mb-4`}>
                    <platform.icon className={`h-6 w-6 ${platform.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Social Media Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we handle every aspect of your social media presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 card">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">4-Step Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From research to community management, we follow a proven methodology for social success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-blue-950/30 dark:text-blue-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Social Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our social media strategies deliver measurable growth across all key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial */}
          <div className="card border-2 border-blue-200 dark:border-blue-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our social media was practically dead before MonkMantra. Now we have an engaged community of 50K+ followers who actually buy our products. The transformation has been incredible."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium dark:bg-blue-950/30 dark:text-blue-400">
                    AL
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Amanda Liu</div>
                    <div className="text-sm text-muted-foreground">Founder, StyleCraft Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-background dark:from-blue-950/20 dark:via-purple-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-blue-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-blue-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Transform</span> Your Social Presence?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free social media audit and discover how to build an engaged community that converts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Social Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free comprehensive audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Content strategy included
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