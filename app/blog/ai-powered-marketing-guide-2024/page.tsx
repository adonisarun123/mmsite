import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar,
  Clock,
  Share2,
  BookOpen,
  TrendingUp,
  Brain,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  Star,
  Download,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Complete Guide to AI-Powered Marketing in 2024 | MonkMantra Blog",
  description: "Discover how artificial intelligence is revolutionizing marketing strategies. Learn AI tools, implementation strategies, and best practices for 2024 and beyond.",
  keywords: "AI marketing, artificial intelligence, marketing automation, AI tools, digital marketing 2024",
};

export default function AIMarketingGuidePage() {
  const tableOfContents = [
    { id: "introduction", title: "Introduction to AI Marketing", level: 1 },
    { id: "benefits", title: "Key Benefits of AI in Marketing", level: 1 },
    { id: "tools", title: "Essential AI Marketing Tools", level: 1 },
    { id: "implementation", title: "Implementation Strategy", level: 1 },
    { id: "case-studies", title: "Real-World Case Studies", level: 1 },
    { id: "future", title: "Future of AI Marketing", level: 1 },
    { id: "conclusion", title: "Getting Started", level: 1 }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb & Back Navigation */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">AI Marketing Guide</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Brain className="h-3 w-3" />
                  AI Marketing
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  12 min read
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  December 15, 2024
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                The Complete Guide to <span className="gradient-text">AI-Powered Marketing</span> in 2024
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Discover how artificial intelligence is revolutionizing marketing strategies and learn how to implement AI tools for better results, increased efficiency, and unprecedented growth.
              </p>

              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    SC
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Senior Marketing Strategist</div>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-border"></div>
                
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share Article
                </button>
              </div>

              <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                      <Brain className="h-16 w-16 text-white/90 mr-4" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="w-12 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <div className="w-12 h-2 bg-white/80 rounded-full animate-pulse delay-75"></div>
                        <div className="w-12 h-2 bg-white/40 rounded-full animate-pulse delay-150"></div>
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">AI-Powered Marketing Revolution</h2>
                    <p className="text-white/80 text-lg">Transforming Business Growth Through Intelligent Automation</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <div className="lg:order-1">
              <div className="sticky top-8">
                <div className="card">
                  <div className="card-content">
                    <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <a 
                          key={index}
                          href={`#${item.id}`}
                          className="block text-sm hover:text-primary transition-colors py-1 text-foreground font-medium"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <button className="w-full btn btn-primary btn-sm group">
                        <Download className="h-4 w-4" />
                        Download PDF
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 lg:order-2">
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:text-justify prose-p:leading-relaxed">
                <div className="space-y-16">
                  
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Introduction to AI Marketing
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-justify text-lg">
                        Artificial Intelligence is no longer a futuristic concept—it's reshaping marketing today. From personalized customer experiences to predictive analytics, AI is enabling marketers to achieve unprecedented levels of efficiency and effectiveness.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify text-lg">
                        In this comprehensive guide, we'll explore how AI is transforming every aspect of marketing, from customer acquisition to retention, and provide you with actionable strategies to implement AI in your marketing efforts.
                      </p>
                    </div>
                    
                    <div className="card border-l-4 border-l-primary bg-primary/5 mt-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="card-content">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <h4 className="font-semibold text-foreground">Key Takeaway</h4>
                        </div>
                        <p className="text-muted-foreground text-justify leading-relaxed">
                          Companies using AI in marketing report an average ROI increase of 250% and see 37% faster revenue growth compared to non-AI adopters.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Benefits */}
                  <section id="benefits" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Key Benefits of AI in Marketing
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      AI transforms marketing by automating complex processes, providing deeper insights, and enabling personalization at scale. Here are the most significant benefits:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          icon: Target,
                          title: "Enhanced Targeting",
                          description: "AI analyzes vast amounts of data to identify ideal customer segments and predict behavior patterns."
                        },
                        {
                          icon: Zap,
                          title: "Automation Efficiency",
                          description: "Automate repetitive tasks and optimize campaigns in real-time without manual intervention."
                        },
                        {
                          icon: BarChart3,
                          title: "Data-Driven Insights",
                          description: "Uncover hidden patterns and insights from customer data that humans might miss."
                        },
                        {
                          icon: TrendingUp,
                          title: "Improved ROI",
                          description: "Optimize budget allocation and campaign performance for maximum return on investment."
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="card hover-lift">
                          <div className="card-content">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                                <benefit.icon className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Tools */}
                  <section id="tools" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Essential AI Marketing Tools
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      The AI marketing landscape is rich with tools designed to enhance different aspects of your marketing strategy. Here are essential AI tools every marketer should consider:
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        { name: "HubSpot AI", use: "Marketing automation and lead scoring", rating: "4.8/5" },
                        { name: "Salesforce Einstein", use: "Predictive analytics and personalization", rating: "4.7/5" },
                        { name: "Adobe Sensei", use: "Content optimization and targeting", rating: "4.6/5" },
                        { name: "Google AI", use: "Search and advertising optimization", rating: "4.9/5" }
                      ].map((tool, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-foreground">{tool.name}</h4>
                            <p className="text-sm text-muted-foreground">{tool.use}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{tool.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Implementation */}
                  <section id="implementation" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Implementation Strategy
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      Successfully implementing AI in marketing requires a strategic approach. Here's a step-by-step framework to guide your AI adoption:
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Assess Your Current State",
                          description: "Audit your existing marketing processes, data quality, and team capabilities to identify AI opportunities."
                        },
                        {
                          step: "2",
                          title: "Define Clear Objectives",
                          description: "Set specific, measurable goals for your AI implementation, whether it's improving conversion rates, reducing costs, or enhancing personalization."
                        },
                        {
                          step: "3",
                          title: "Start Small and Scale", 
                          description: "Begin with pilot projects in specific areas like email personalization or chatbots before expanding to comprehensive AI integration."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Case Studies */}
                  <section id="case-studies" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Real-World Case Studies
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      Learn from companies that have successfully implemented AI in their marketing strategies and achieved remarkable results.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="card border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300">
                        <div className="card-content">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">Netflix: AI-Powered Recommendations</h4>
                          </div>
                          <p className="text-muted-foreground mb-6 text-justify leading-relaxed">
                            Netflix uses AI to analyze viewing patterns and recommend content. Their recommendation engine drives 80% of viewer engagement and saves $1 billion annually in customer retention.
                          </p>
                          <div className="flex items-center gap-6">
                            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <div className="font-bold text-green-600 text-2xl">80%</div>
                              <div className="text-xs text-muted-foreground">Engagement</div>
                            </div>
                            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <div className="font-bold text-green-600 text-2xl">$1B</div>
                              <div className="text-xs text-muted-foreground">Savings</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300">
                        <div className="card-content">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-lg">♪</span>
                            </div>
                            <h4 className="text-xl font-semibold text-foreground">Spotify: Personalized Marketing</h4>
                          </div>
                          <p className="text-muted-foreground mb-6 text-justify leading-relaxed">
                            Spotify's AI analyzes listening habits to create personalized playlists and campaigns. Their "Discover Weekly" feature has generated over 5 billion hours of listening time.
                          </p>
                          <div className="flex items-center gap-6">
                            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                              <div className="font-bold text-blue-600 text-2xl">5B+</div>
                              <div className="text-xs text-muted-foreground">Hours</div>
                            </div>
                            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                              <div className="font-bold text-blue-600 text-2xl">40%</div>
                              <div className="text-xs text-muted-foreground">Engagement</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Future */}
                  <section id="future" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Future of AI Marketing
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      As AI technology continues to evolve, we can expect even more sophisticated marketing applications. Here are the trends to watch:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Conversational AI",
                          description: "Advanced chatbots and voice assistants providing human-like customer service experiences."
                        },
                        {
                          title: "Predictive Analytics",
                          description: "AI predicting customer behavior, market trends, and optimal campaign timing with unprecedented accuracy."
                        },
                        {
                          title: "Visual Recognition",
                          description: "AI analyzing images and videos to understand brand sentiment and optimize visual content."
                        }
                      ].map((trend, index) => (
                        <div key={index} className="card">
                          <div className="card-content">
                            <h4 className="font-semibold text-foreground mb-3">{trend.title}</h4>
                            <p className="text-muted-foreground text-sm">{trend.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Getting Started */}
                  <section id="conclusion" className="scroll-mt-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8 relative">
                      Getting Started with AI Marketing
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify text-lg mb-10">
                      Ready to implement AI in your marketing strategy? Here's your roadmap to success:
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Start with Data Audit",
                          description: "Assess your current data quality and collection processes. Clean, organized data is the foundation of effective AI marketing."
                        },
                        {
                          step: "2", 
                          title: "Choose Your First AI Tool",
                          description: "Begin with simple AI tools like chatbots or email personalization before moving to more complex systems."
                        },
                        {
                          step: "3",
                          title: "Measure and Optimize",
                          description: "Track key metrics and continuously optimize your AI implementations based on performance data."
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section bg-gradient-to-r from-primary/5 via-purple-50/30 to-primary/5 dark:from-primary/10 dark:via-purple-950/20 dark:to-primary/10">
        <div className="container">
          <div className="card border-2 border-primary/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="card-content text-center py-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Ready to Transform Your Marketing with AI?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of businesses already using AI to drive better results, reduce costs, and accelerate growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/contact" className="btn btn-primary btn-lg group">
                    Get AI Marketing Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="btn btn-outline btn-lg">
                    View Our AI Services
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No long-term contracts
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Results in 30 days
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