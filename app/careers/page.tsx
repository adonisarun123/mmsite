import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Trophy,
  Coffee,
  Laptop,
  DollarSign,
  Calendar,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | MonkMantra - Join Our Marketing Team",
  description: "Join MonkMantra's growing team of marketing experts. Explore career opportunities in digital marketing, growth, and innovation.",
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior PPC Marketing Specialist",
      department: "Paid Media",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead PPC campaigns across Google Ads, Facebook, and emerging platforms. Drive performance and ROI for enterprise clients.",
      skills: ["Google Ads", "Facebook Ads", "Data Analysis", "Campaign Optimization"],
      salary: "$75,000 - $95,000"
    },
    {
      title: "Content Marketing Manager",
      department: "Content Strategy",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create and execute content strategies that drive engagement and conversions. Lead content creation across multiple channels.",
      skills: ["Content Strategy", "SEO Writing", "Analytics", "Project Management"],
      salary: "$65,000 - $85,000"
    },
    {
      title: "Marketing Data Analyst",
      department: "Analytics",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "2-3 years",
      description: "Transform marketing data into actionable insights. Build dashboards and reports that drive strategic decisions.",
      skills: ["SQL", "Google Analytics", "Data Visualization", "Statistics"],
      salary: "$70,000 - $90,000"
    },
    {
      title: "Social Media Marketing Coordinator",
      department: "Social Media",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "1-3 years",
      description: "Manage social media campaigns and community engagement across multiple platforms for diverse client portfolios.",
      skills: ["Social Media Management", "Content Creation", "Community Management", "Analytics"],
      salary: "$50,000 - $65,000"
    },
    {
      title: "Email Marketing Specialist",
      department: "Email Marketing",
      location: "Remote / Miami",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design and execute email marketing campaigns that nurture leads and drive conversions using advanced automation.",
      skills: ["Email Marketing", "Marketing Automation", "A/B Testing", "CRM Management"],
      salary: "$60,000 - $75,000"
    },
    {
      title: "SEO Marketing Specialist",
      department: "SEO",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop and implement SEO strategies that improve organic visibility and drive qualified traffic growth.",
      skills: ["Technical SEO", "Keyword Research", "Link Building", "Content Optimization"],
      salary: "$65,000 - $80,000"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs to keep you healthy and happy.",
    },
    {
      icon: Laptop,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and the equipment you need to be productive.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and certification programs to advance your career.",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-rate salaries, performance bonuses, and equity participation in company growth.",
    },
    {
      icon: Calendar,
      title: "Unlimited PTO",
      description: "Take time off when you need it with our unlimited vacation and personal time policy.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible schedules, mental health support, and a culture that values your personal time.",
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace new technologies and creative solutions to solve complex marketing challenges.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Success comes from working together, sharing knowledge, and supporting each other's growth.",
    },
    {
      icon: Trophy,
      title: "Results-Driven",
      description: "We measure success by the impact we create for our clients and the results we deliver.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Every decision we make is guided by what's best for our clients and their success.",
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
            <h1 className="mb-6 text-shadow-lg">
              Join Our <span className="gradient-text">Marketing Team</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of digital marketing. Build your career while delivering exceptional results for clients worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="#positions" className="btn btn-primary btn-lg group">
                View Open Positions
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#culture" className="btn btn-outline btn-lg">
                Learn About Our Culture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Our <span className="gradient-text">Values</span> & Culture
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in creating an environment where talented people can thrive and do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-6 text-muted-foreground">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm">Employee Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Why Work at <span className="gradient-text">MonkMantra</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive benefits and a supportive environment that helps you grow personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our team and help shape the future of digital marketing. We're always looking for talented individuals.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-content">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {position.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {position.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="inline-flex items-center px-2 py-1 rounded-md bg-muted/80 text-muted-foreground text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline">
                        View Details
                      </Link>
                      <Link href={`/careers/apply?position=${encodeURIComponent(position.title)}`} className="btn btn-primary group">
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see a position that fits? We're always looking for exceptional talent.
            </p>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our hiring process is designed to be transparent, efficient, and focused on finding the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application with resume and cover letter through our careers portal."
              },
              {
                step: "02", 
                title: "Initial Review",
                description: "Our team reviews your application and responds within 3-5 business days."
              },
              {
                step: "03",
                title: "Interview Process",
                description: "2-3 rounds of interviews with team members and leadership to assess fit and skills."
              },
              {
                step: "04",
                title: "Welcome Aboard",
                description: "Receive offer details and join our comprehensive onboarding program."
              }
            ].map((step, index) => (
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
      <section className="section bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl">
              <div className="card-content p-12">
                <h2 className="mb-6">
                  Ready to <span className="gradient-text">Join</span> Our Team?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Take the next step in your marketing career and help us deliver exceptional results for clients worldwide.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="#positions" className="btn btn-primary btn-lg group">
                    Browse Open Positions
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="btn btn-outline btn-lg">
                    Contact HR Team
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