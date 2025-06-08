import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Sparkles, 
  Quote,
  Target,
  BarChart3,
  TestTube,
  Clock,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization | MonkMantra - Maximize Your Website Conversions",
  description: "Increase your website conversion rates with data-driven optimization. A/B testing, UX audits, and conversion improvements with +85% average increase.",
};

export default function ConversionOptimizationPage() {
  const features = [
    {
      icon: TestTube,
      title: "A/B Testing & Experimentation",
      description: "Scientific testing methodologies to identify what drives conversions and optimize every element for maximum performance."
    },
    {
      icon: Eye,
      title: "User Experience Audits",
      description: "Comprehensive UX audits that identify friction points and optimization opportunities throughout the customer journey."
    },
    {
      icon: Target,
      title: "Landing Page Optimization",
      description: "Optimize landing pages for specific campaigns and audiences to maximize conversion rates and ROI."
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance Tracking",
      description: "Advanced analytics setup to track conversions, user behavior, and optimization opportunities with precision."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Conversion Audit & Analysis",
      description: "Comprehensive analysis of current conversion funnels, user behavior, and performance bottlenecks.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Hypothesis Development",
      description: "Develop data-driven hypotheses for optimization based on user research and performance data.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Testing & Implementation",
      description: "Execute A/B tests and implement optimization changes with proper statistical significance.",
      duration: "Week 3-4"
    },
    {
      step: "04",
      title: "Monitor & Iterate",
      description: "Continuous monitoring and iterative optimization to maintain and improve conversion performance.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Conversion Rate", value: "+85%", description: "Average conversion rate improvement" },
    { metric: "Revenue Per Visitor", value: "+120%", description: "Increase in revenue per website visitor" },
    { metric: "Cart Abandonment", value: "-40%", description: "Reduction in cart abandonment rate" },
    { metric: "User Experience Score", value: "+65%", description: "Improvement in overall UX metrics" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-emerald-50/30 to-green-50/30 dark:via-emerald-950/20 dark:to-green-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 text-sm font-medium text-emerald-700 mb-8 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300">
              <TrendingUp className="h-4 w-4" />
              Conversion Rate Optimization
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Maximize Your Website <span className="gradient-text">Conversions</span> with Data-Driven Optimization
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Turn more visitors into customers with scientific conversion optimization. A/B testing, UX audits, and proven strategies that increase conversions. 
              <span className="text-emerald-600 font-semibold dark:text-emerald-400"> Average +85% conversion increase</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Conversion Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Conversion Optimization Services */}
      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Conversion Optimization</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Data-driven optimization strategies that turn more visitors into customers through scientific testing and user experience improvements.
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

      {/* Complete Conversion Optimization Solutions */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Conversion Optimization</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From analysis to implementation, we provide comprehensive conversion optimization that maximizes your website's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Optimization Services:</h3>
              <div className="space-y-3">
                {[
                  "Conversion Funnel Analysis",
                  "A/B Testing & Multivariate Testing", 
                  "Landing Page Optimization",
                  "User Experience (UX) Audits",
                  "E-commerce Optimization",
                  "Mobile Conversion Optimization",
                  "Form Optimization",
                  "Performance Monitoring"
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
                <Quote className="h-12 w-12 text-emerald-500 mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6">
                  "Our conversion rate doubled in just 3 months. Their systematic approach to testing and optimization delivered incredible results."
                </p>
                <div className="font-medium text-foreground">Michael Brown</div>
                <div className="text-sm text-muted-foreground">CEO, ConvertCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Conversion Optimization Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Conversion Optimization</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic, data-driven approach to conversion optimization that ensures measurable improvements and sustainable growth.
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

      {/* Proven Conversion Optimization Results */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Conversion Optimization</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our conversion optimization strategies consistently deliver significant improvements in conversion rates and revenue performance.
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

          <div className="card border-2 border-emerald-200 dark:border-emerald-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our conversion rate doubled in just 3 months. Their systematic approach to testing and optimization delivered incredible results."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-medium dark:bg-emerald-950/30 dark:text-emerald-400">
                    MB
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Michael Brown</div>
                    <div className="text-sm text-muted-foreground">CEO, ConvertCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-background dark:from-emerald-950/20 dark:via-green-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-emerald-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-emerald-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Optimize</span> Your Conversions?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free conversion audit and discover hidden opportunities to increase your website's conversion rate.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Conversion Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free conversion audit
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    A/B testing included
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