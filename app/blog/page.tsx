import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Search,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Blog | MonkMantra - Expert Digital Marketing Insights",
  description: "Stay ahead with the latest digital marketing trends, strategies, and insights. Expert tips on SEO, PPC, social media, content marketing, and more.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to AI-Powered Marketing in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and learn how to implement AI tools for better results.",
    image: "/images/blog/ai-marketing-guide.jpg",
    category: "AI Marketing",
    readTime: "12 min read",
    date: "December 15, 2024",
    author: "Sarah Chen",
    slug: "ai-powered-marketing-guide-2024"
  };

  const recentPosts = [
    {
      title: "10 PPC Optimization Strategies That Actually Work",
      excerpt: "Proven techniques to improve your PPC campaigns and maximize ROI with data-driven optimization strategies.",
      image: "/images/blog/ppc-optimization.jpg",
      category: "PPC Marketing",
      readTime: "8 min read",
      date: "December 12, 2024",
      author: "Mike Rodriguez",
      slug: "ppc-optimization-strategies"
    },
    {
      title: "Content Marketing ROI: How to Measure What Matters",
      excerpt: "Learn the key metrics and KPIs to track your content marketing success and prove ROI to stakeholders.",
      image: "/images/blog/content-roi.jpg",
      category: "Content Marketing",
      readTime: "6 min read",
      date: "December 10, 2024",
      author: "Emily Johnson",
      slug: "content-marketing-roi-measurement"
    },
    {
      title: "Email Marketing Automation: Advanced Workflows for 2024",
      excerpt: "Master email automation with advanced workflows that nurture leads and drive conversions at scale.",
      image: "/images/blog/email-automation.jpg",
      category: "Email Marketing",
      readTime: "10 min read",
      date: "December 8, 2024",
      author: "David Park",
      slug: "email-marketing-automation-workflows"
    },
    {
      title: "SEO Trends 2024: What's Changing in Search Optimization",
      excerpt: "Stay ahead of the latest SEO trends and algorithm updates to maintain your search rankings.",
      image: "/images/blog/seo-trends.jpg",
      category: "SEO",
      readTime: "9 min read",
      date: "December 5, 2024",
      author: "Lisa Wang",
      slug: "seo-trends-2024"
    },
    {
      title: "Social Media Marketing: Platform-Specific Strategies",
      excerpt: "Optimize your social media strategy with platform-specific tactics for maximum engagement and reach.",
      image: "/images/blog/social-media-strategies.jpg",
      category: "Social Media",
      readTime: "7 min read",
      date: "December 3, 2024",
      author: "James Mitchell",
      slug: "social-media-platform-strategies"
    },
    {
      title: "Conversion Rate Optimization: A/B Testing Best Practices",
      excerpt: "Master the art and science of A/B testing to improve your website conversion rates significantly.",
      image: "/images/blog/ab-testing.jpg",
      category: "CRO",
      readTime: "11 min read",
      date: "December 1, 2024",
      author: "Rachel Green",
      slug: "ab-testing-best-practices"
    }
  ];

  const categories = [
    { name: "AI Marketing", count: 15, color: "bg-blue-100 text-blue-700" },
    { name: "PPC Marketing", count: 23, color: "bg-green-100 text-green-700" },
    { name: "Content Marketing", count: 31, color: "bg-purple-100 text-purple-700" },
    { name: "Email Marketing", count: 18, color: "bg-orange-100 text-orange-700" },
    { name: "SEO", count: 27, color: "bg-teal-100 text-teal-700" },
    { name: "Social Media", count: 22, color: "bg-pink-100 text-pink-700" },
    { name: "CRO", count: 14, color: "bg-emerald-100 text-emerald-700" },
    { name: "Analytics", count: 19, color: "bg-cyan-100 text-cyan-700" }
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
              Expert <span className="gradient-text">Marketing Insights</span> & Strategies
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay ahead of the curve with actionable digital marketing insights, proven strategies, and industry trends from our expert team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search articles, strategies, tips..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            
            <div className="card hover-lift overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto bg-muted/50 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-muted-foreground/30" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Lightbulb className="h-3 w-3" />
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{featuredPost.author}</div>
                        <div className="text-xs text-muted-foreground">{featuredPost.date}</div>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary group">
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles & Sidebar */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <article key={index} className="card hover-lift overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="aspect-[16/10] md:aspect-auto bg-muted/50 flex items-center justify-center">
                        <BarChart3 className="h-12 w-12 text-muted-foreground/30" />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="inline-flex items-center gap-1 bg-secondary/80 text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            <Tag className="h-2 w-2" />
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-2 w-2" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-xs font-medium text-foreground">{post.author}</div>
                              <div className="text-xs text-muted-foreground">{post.date}</div>
                            </div>
                          </div>
                          
                          <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 text-sm font-medium group">
                            Read More
                            <ArrowRight className="inline h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="btn btn-outline btn-lg">
                  Load More Articles
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <Link key={index} href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card border-2 border-primary/20">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-3">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get the latest marketing insights and strategies delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <button className="w-full btn btn-primary btn-sm">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="card">
                <div className="card-content">
                  <h3 className="text-lg font-bold text-foreground mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Digital Marketing', 'SEO Tips', 'PPC Strategy', 'Content Strategy', 'Social Media', 'Email Marketing', 'Analytics', 'Conversion Optimization', 'AI Tools', 'Marketing Automation'].map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center px-3 py-1 rounded-full bg-muted/80 hover:bg-primary/10 hover:text-primary text-sm font-medium transition-colors">
                        {tag}
                      </Link>
                    ))}
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