import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Sparkles, 
  Quote,
  Palette,
  Smartphone,
  Zap,
  BarChart3,
  Clock,
  Monitor
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Development | MonkMantra - Conversion-Optimized Websites",
  description: "Build stunning, high-converting websites optimized for user experience and conversions. Responsive design with +150% conversion rate improvements.",
};

export default function WebDesignDevelopmentPage() {
  const features = [
    {
      icon: Palette,
      title: "Conversion-Focused Design",
      description: "Beautiful websites designed with conversion in mind, turning visitors into customers through strategic UX/UI design."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Responsive designs that look and perform perfectly on all devices, ensuring optimal user experience across platforms."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience to maximize search rankings and conversions."
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Built-in analytics and tracking to measure performance, user behavior, and conversion optimization opportunities."
    }
  ];

  const webSolutions = [
    {
      icon: Globe,
      name: "Business Websites",
      description: "Professional websites that establish credibility and drive business growth with strategic design.",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20"
    },
    {
      icon: Monitor,
      name: "E-commerce Platforms",
      description: "High-converting online stores with seamless checkout processes and inventory management.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Smartphone,
      name: "Landing Pages",
      description: "Conversion-optimized landing pages designed for specific campaigns and maximum ROI.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Palette,
      name: "Custom Web Apps",
      description: "Tailored web applications that solve specific business challenges and streamline operations.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understand your business goals, target audience, and project requirements through comprehensive analysis.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the final website design.",
      duration: "Week 2-3"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build the website with clean code, implement functionality, and perform comprehensive testing.",
      duration: "Week 4-6"
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploy the website, monitor performance, and continuously optimize for better results.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Conversion Rate", value: "+150%", description: "Average conversion rate improvement" },
    { metric: "Page Load Speed", value: "2.3s", description: "Average page load time" },
    { metric: "Mobile Performance", value: "98%", description: "Mobile responsiveness score" },
    { metric: "SEO Optimization", value: "95%", description: "Search engine optimization score" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-teal-50/30 to-cyan-50/30 dark:via-teal-950/20 dark:to-cyan-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 rounded-full px-4 py-2 text-sm font-medium text-teal-700 mb-8 dark:bg-teal-950/30 dark:border-teal-800 dark:text-teal-300">
              <Globe className="h-4 w-4" />
              Web Design & Development
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Conversion-Optimized <span className="gradient-text">Websites</span> That Drive Results
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Build stunning websites that look amazing and convert visitors into customers. Modern, responsive design optimized for performance and conversions. 
              <span className="text-teal-600 font-semibold dark:text-teal-400"> Average +150% conversion rate increase</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Website Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Web Design Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Web Design</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From design to development, we create websites that not only look stunning but drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 mb-6 dark:bg-teal-950/30 dark:text-teal-400">
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

      {/* Complete Web Design Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Web Design</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From simple business websites to complex e-commerce platforms, we deliver comprehensive web solutions for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What We Build:</h3>
              <div className="space-y-3">
                {[
                  "Responsive Website Design",
                  "E-commerce Platforms", 
                  "Landing Page Optimization",
                  "CMS Development",
                  "Mobile-First Design",
                  "Speed Optimization",
                  "SEO-Friendly Structure",
                  "Conversion Rate Optimization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webSolutions.map((solution, index) => (
                <div key={index} className="card hover-lift text-center">
                  <div className="card-content p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${solution.bgColor} mb-3`}>
                      <solution.icon className={`h-5 w-5 ${solution.color}`} />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">
                      {solution.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Design Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Web Design</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to web development that ensures quality, performance, and results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-teal-950/30 dark:text-teal-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Web Design Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Web Design</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our web design and development projects consistently deliver superior performance and measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-teal-600 mb-2 dark:text-teal-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-teal-200 dark:border-teal-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our new website not only looks incredible but converts 3x better than our old one. The design is beautiful and the performance is outstanding."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium dark:bg-teal-950/30 dark:text-teal-400">
                    AJ
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Alex Johnson</div>
                    <div className="text-sm text-muted-foreground">Founder, Digital Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-background dark:from-teal-950/20 dark:via-cyan-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-teal-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-teal-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Redesign</span> Your Website?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free website audit and discover how to improve your conversions and user experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Website Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free website audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom design included
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