import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Handshake,
  Users,
  DollarSign,
  Award,
  Target,
  Zap,
  Globe,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnership Program | MonkMantra - Grow Together",
  description: "Join MonkMantra's partnership program for agencies, consultants, and technology providers. Expand your services and grow your revenue.",
};

export default function PartnershipPage() {
  const partnerTypes = [
    {
      icon: Users,
      title: "Agency Partners",
      description: "Marketing agencies looking to expand their service offerings with our expertise and white-label solutions.",
      benefits: [
        "White-label service delivery",
        "Revenue sharing opportunities", 
        "Co-marketing initiatives",
        "Priority support access"
      ],
      idealFor: "Marketing agencies with 10+ clients seeking to expand service capabilities"
    },
    {
      icon: Target,
      title: "Consultant Partners",
      description: "Independent marketing consultants who want to offer comprehensive solutions to their clients.",
      benefits: [
        "Referral commission program",
        "Access to premium tools",
        "Training and certification",
        "Dedicated account management"
      ],
      idealFor: "Senior marketing consultants with enterprise client relationships"
    },
    {
      icon: Zap,
      title: "Technology Partners",
      description: "SaaS platforms and technology providers seeking to integrate marketing services.",
      benefits: [
        "Technical integration support",
        "Joint go-to-market strategy",
        "API access and documentation",
        "Co-development opportunities"
      ],
      idealFor: "B2B SaaS companies with complementary marketing technology"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Growth",
      value: "30-50%",
      description: "Average revenue increase for partners in first year"
    },
    {
      icon: Users,
      title: "Client Retention",
      value: "95%+",
      description: "Client retention rate through our partnership program"
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "85%",
      description: "Of partners exceed their growth targets"
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: "50+",
      description: "Countries where our partners operate successfully"
    }
  ];

  const requirements = [
    {
      title: "Proven Track Record",
      description: "Minimum 2 years experience in digital marketing with verifiable client results and case studies."
    },
    {
      title: "Quality Standards",
      description: "Commitment to maintaining high service quality and client satisfaction standards aligned with our values."
    },
    {
      title: "Communication Excellence",
      description: "Strong communication skills and ability to collaborate effectively with our team and clients."
    },
    {
      title: "Growth Mindset",
      description: "Ambition to grow your business and help clients achieve exceptional marketing results."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Application",
      description: "Complete our partnership application with your company details, experience, and goals."
    },
    {
      step: "02", 
      title: "Evaluation",
      description: "Our team reviews your application and conducts an initial consultation call."
    },
    {
      step: "03",
      title: "Onboarding",
      description: "Begin comprehensive onboarding with training, tools access, and account setup."
    },
    {
      step: "04",
      title: "Launch",
      description: "Start delivering services with ongoing support and regular performance reviews."
    }
  ];

  const testimonials = [
    {
      text: "Partnering with MonkMantra has transformed our agency. We've expanded our service offerings and increased revenue by 40% in just 8 months.",
      author: "Sarah Mitchell",
      position: "Founder",
      company: "Digital Growth Agency",
      results: "40% revenue increase, 15 new service lines"
    },
    {
      text: "The white-label solutions are exceptional. Our clients get world-class marketing services while we maintain our brand relationship.",
      author: "Michael Chen",
      position: "Managing Director", 
      company: "Strategic Marketing Consultants",
      results: "25 new clients, 90% client retention"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-50/50 dark:to-purple-950/20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8">
              <Handshake className="h-4 w-4" />
              Partnership Program
            </div>
            
            <h1 className="mb-6 text-shadow-lg">
              Grow Your Business with <span className="gradient-text">Strategic Partnerships</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our exclusive partnership program and unlock new revenue streams while delivering exceptional marketing results to your clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="#apply" className="btn btn-primary btn-lg group">
                Apply for Partnership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#benefits" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Partnership <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer flexible partnership models designed to fit different business types and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="card hover-lift h-full">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <type.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Ideal for:</span> {type.idealFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Stats */}
      <section id="benefits" className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Partnership <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our partners experience significant growth and success through our comprehensive support program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Partnership <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with high-quality professionals who share our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {requirement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Partner <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our partners have grown their businesses and achieved exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card border-2 border-primary/20">
                <div className="card-content p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-semibold text-foreground">Results:</div>
                      <div className="text-sm text-muted-foreground">{testimonial.results}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined application process gets you started quickly while ensuring the right fit for both parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-lg mb-6">
                  <span className="text-lg font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Partner</span> with Us?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join our exclusive partnership program and start growing your business with our proven marketing expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/get-started" className="btn btn-primary btn-lg group">
                    Apply for Partnership
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="btn btn-outline btn-lg">
                    Schedule Consultation
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No upfront costs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Comprehensive training
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ongoing support
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