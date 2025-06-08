import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Mail,
  Zap,
  Target,
  BarChart3,
  Clock,
  Sparkles,
  Quote,
  Users,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Email Marketing | MonkMantra - Automated Email Sequences That Convert",
  description: "Build automated email sequences that nurture leads and convert subscribers into customers. Expert email marketing with 42% average open rates.",
};

export default function EmailMarketingPage() {
  const features = [
    {
      icon: Mail,
      title: "Strategic Email Campaigns",
      description: "Custom email campaigns designed to nurture leads and drive conversions at every stage of the customer journey."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automated email sequences that work 24/7 to engage your audience and drive sales."
    },
    {
      icon: Target,
      title: "Advanced Segmentation",
      description: "Precise audience segmentation to deliver the right message to the right person at the right time."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed analytics and A/B testing to continuously improve open rates, click rates, and conversions."
    }
  ];

  const emailSolutions = [
    {
      icon: Mail,
      name: "Welcome Email Series",
      description: "Automated welcome sequences that introduce new subscribers to your brand and convert them into customers.",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: Target,
      name: "Behavioral Triggers",
      description: "Smart email automation based on user behavior, purchase history, and engagement patterns.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Users,
      name: "Newsletter Campaigns",
      description: "Regular newsletter campaigns that keep your audience engaged and drive repeat business.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: MessageCircle,
      name: "Drip Campaigns",
      description: "Long-term nurture sequences that build relationships and convert prospects over time.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Develop email marketing strategy, audience segmentation, and campaign planning based on your goals.",
      duration: "Week 1"
    },
    {
      step: "02", 
      title: "Email Creation & Setup",
      description: "Design and create compelling email templates, copy, and automation workflows.",
      duration: "Week 2"
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "Launch email campaigns and automation sequences with comprehensive testing and optimization.",
      duration: "Week 3"
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring, A/B testing, and optimization to improve performance and ROI.",
      duration: "Ongoing"
    }
  ];

  const results = [
    { metric: "Open Rate", value: "42%", description: "Average open rate across campaigns" },
    { metric: "Click-Through Rate", value: "8.5%", description: "Higher than industry average" },
    { metric: "Conversion Rate", value: "+150%", description: "Email to customer conversions" },
    { metric: "Revenue Growth", value: "+220%", description: "Revenue attributed to email marketing" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-orange-50/30 to-amber-50/30 dark:via-orange-950/20 dark:to-amber-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700 mb-8 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-300">
              <Mail className="h-4 w-4" />
              Email Marketing
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Automated Email Sequences That <span className="gradient-text">Convert</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Build automated email sequences that nurture leads and turn subscribers into loyal customers. 
              <span className="text-orange-600 font-semibold dark:text-orange-400"> Average 42% open rate</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Free Email Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#features" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Strategic <span className="gradient-text">Email Marketing</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to automation, we create email campaigns that engage and convert your audience at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 mb-6 dark:bg-orange-950/30 dark:text-orange-400">
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

      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Complete <span className="gradient-text">Email Marketing</span> Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From welcome series to advanced automation, we provide comprehensive email marketing solutions for every business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailSolutions.map((solution, index) => (
              <div key={index} className="card hover-lift text-center">
                <div className="card-content">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${solution.bgColor} mb-4`}>
                    <solution.icon className={`h-6 w-6 ${solution.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Email Marketing</span> Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to email marketing that ensures consistent performance and growing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500 text-white shadow-lg mb-4">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium dark:bg-orange-950/30 dark:text-orange-300">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Proven <span className="gradient-text">Email Marketing</span> Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our email marketing strategies consistently deliver superior performance across all key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="text-3xl font-bold text-orange-600 mb-2 dark:text-orange-400">{result.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{result.metric}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-2 border-orange-200 dark:border-orange-800">
            <div className="card-content p-8">
              <div className="text-center">
                <Quote className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed max-w-3xl mx-auto">
                  "Our email campaigns now generate 40% of our total revenue. MonkMantra's automation sequences work perfectly and our open rates are through the roof."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium dark:bg-orange-950/30 dark:text-orange-400">
                    DM
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">David Martinez</div>
                    <div className="text-sm text-muted-foreground">CEO, E-commerce Plus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-background dark:from-orange-950/20 dark:via-amber-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-orange-200 bg-background/90 backdrop-blur-xl shadow-2xl dark:border-orange-800">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Automate</span> Your Email Marketing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get a free email audit and discover how to build sequences that convert subscribers into customers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                    <Sparkles className="h-5 w-5" />
                    Get Free Email Audit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn btn-outline btn-lg">
                    View Case Studies
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free email audit
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