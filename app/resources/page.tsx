import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Download,
  BookOpen,
  FileText,
  Video,
  Calculator,
  BarChart3,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Resources | MonkMantra - Free Guides, Templates & Tools",
  description: "Access our comprehensive library of marketing resources including guides, templates, calculators, webinars, and industry reports. All free to download.",
};

export default function ResourcesPage() {
  const featuredResources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Complete Digital Marketing Strategy Guide 2024",
      description: "120-page comprehensive guide covering every aspect of digital marketing strategy from planning to execution and optimization.",
      downloads: "15,234",
      rating: 4.9,
      image: "/images/resources/strategy-guide.jpg",
      category: "Strategy",
      link: "/resources/digital-marketing-strategy-guide"
    },
    {
      type: "Template",
      icon: FileText,
      title: "Marketing Campaign Planning Template Pack",
      description: "15 professionally designed templates for planning, executing, and tracking marketing campaigns across all channels.",
      downloads: "12,567",
      rating: 4.8,
      image: "/images/resources/template-pack.jpg",
      category: "Templates",
      link: "/resources/campaign-planning-templates"
    },
    {
      type: "Calculator",
      icon: Calculator,
      title: "ROI & Budget Planning Calculator",
      description: "Advanced Excel calculator for marketing ROI analysis, budget allocation, and performance forecasting.",
      downloads: "8,923",
      rating: 4.7,
      image: "/images/resources/roi-calculator.jpg",
      category: "Tools",
      link: "/marketing-calculator"
    }
  ];

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Guides & eBooks",
      count: 45,
      description: "In-depth guides covering all aspects of digital marketing",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
    },
    {
      icon: FileText,
      title: "Templates",
      count: 67,
      description: "Ready-to-use templates for campaigns, strategies, and planning",
      color: "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400"
    },
    {
      icon: Calculator,
      title: "Tools & Calculators",
      count: 23,
      description: "Interactive tools and calculators for marketing analysis",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400"
    },
    {
      icon: Video,
      title: "Webinars",
      count: 156,
      description: "Expert-led webinars on latest marketing trends and strategies",
      color: "bg-orange-100 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400"
    },
    {
      icon: BarChart3,
      title: "Industry Reports",
      count: 28,
      description: "Data-driven insights and industry benchmarking reports",
      color: "bg-teal-100 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400"
    },
    {
      icon: Users,
      title: "Case Studies",
      count: 89,
      description: "Real client success stories and campaign breakdowns",
      color: "bg-pink-100 text-pink-700 dark:bg-pink-950/30 dark:text-pink-400"
    }
  ];

  const recentResources = [
    {
      type: "Guide",
      title: "AI Marketing Implementation Playbook",
      category: "AI Marketing",
      downloads: "3,456",
      rating: 4.9,
      isNew: true,
      link: "/resources/ai-marketing-playbook"
    },
    {
      type: "Template",
      title: "Social Media Content Calendar 2024",
      category: "Social Media",
      downloads: "5,678",
      rating: 4.8,
      isNew: true,
      link: "/resources/social-media-calendar"
    },
    {
      type: "Report",
      title: "Digital Marketing Trends Report Q4 2024",
      category: "Industry Reports",
      downloads: "2,345",
      rating: 4.7,
      isNew: false,
      link: "/resources/trends-report-q4-2024"
    },
    {
      type: "Webinar",
      title: "PPC Optimization Masterclass",
      category: "PPC",
      downloads: "4,123",
      rating: 4.9,
      isNew: false,
      link: "/resources/ppc-optimization-webinar"
    },
    {
      type: "Calculator",
      title: "Email Marketing ROI Calculator",
      category: "Email Marketing",
      downloads: "1,876",
      rating: 4.6,
      isNew: true,
      link: "/resources/email-roi-calculator"
    },
    {
      type: "Template",
      title: "SEO Audit Checklist Template",
      category: "SEO",
      downloads: "6,789",
      rating: 4.8,
      isNew: false,
      link: "/resources/seo-audit-checklist"
    }
  ];

  const popularResources = [
    "Complete Guide to Google Ads Optimization",
    "Facebook Ads Template Collection",
    "Content Marketing Strategy Worksheet",
    "Email Marketing Automation Guide",
    "SEO Keyword Research Template",
    "Marketing Budget Planning Calculator"
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
              Free Marketing <span className="gradient-text">Resources</span> & Tools
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of marketing guides, templates, calculators, webinars, and industry reports.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search guides, templates, tools..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-primary btn-sm">
                  Search
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-6 text-muted-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm">Free Resources</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm">Downloads</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Resources</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <div key={index} className="card hover-lift overflow-hidden">
                  <div className="aspect-[16/10] bg-muted/50 flex items-center justify-center">
                    <resource.icon className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-muted-foreground">{resource.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Download className="h-3 w-3" />
                        {resource.downloads}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <Link href={resource.link} className="btn btn-primary btn-sm w-full group">
                      Download Free
                      <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find exactly what you need from our organized collection of marketing resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <Link key={index} href={`/resources/${category.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} className="card hover-lift group">
                <div className="card-content text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <div className="text-xs text-muted-foreground">Resources Available</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent & Popular */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Resources */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Recent Resources</h2>
              
              <div className="space-y-6">
                {recentResources.map((resource, index) => (
                  <div key={index} className="card hover-lift">
                    <div className="card-content">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center gap-1 bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                              {resource.type}
                            </span>
                            {resource.isNew && (
                              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                New
                              </span>
                            )}
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-muted-foreground">{resource.rating}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            <Link href={resource.link} className="hover:text-primary transition-colors">
                              {resource.title}
                            </Link>
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{resource.category}</span>
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {resource.downloads} downloads
                            </div>
                          </div>
                        </div>
                        
                        <Link href={resource.link} className="btn btn-outline btn-sm group ml-4">
                          Download
                          <Download className="h-3 w-3 transition-transform group-hover:translate-y-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link href="/resources/all" className="btn btn-outline btn-lg">
                  View All Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Resources */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-6">Most Popular</h3>
                  <div className="space-y-3">
                    {popularResources.map((resource, index) => (
                      <Link key={index} href={`/resources/${resource.toLowerCase().replace(/\s+/g, '-')}`} className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {resource}
                          </span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card border-2 border-primary/20">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-3">Get New Resources</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Be the first to access new guides, templates, and tools as they're released.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <button className="w-full btn btn-primary btn-sm">
                      Subscribe for Updates
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-6">Quick Access</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Marketing Calculator", link: "/marketing-calculator", icon: Calculator },
                      { name: "Free Templates", link: "/free-templates", icon: FileText },
                      { name: "Webinar Library", link: "/webinars", icon: Video },
                      { name: "Industry Reports", link: "/industry-reports", icon: BarChart3 }
                    ].map((item, index) => (
                      <Link key={index} href={item.link} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                  Need <span className="gradient-text">Custom</span> Marketing Resources?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get personalized marketing strategies, custom templates, and dedicated support tailored to your business needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/get-started" className="btn btn-primary btn-lg group">
                    Get Custom Strategy
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/contact" className="btn btn-outline btn-lg">
                    Contact Our Team
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