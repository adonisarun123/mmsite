"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Target, FileText, TrendingUp, Code, Globe, Bot, Zap, Database } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "AI Marketing Systems",
    description: "Leverage artificial intelligence to optimize campaigns and predict customer behavior",
    features: ["AI campaign optimization", "Predictive analytics", "Smart audience targeting"],
    result: "312% improvement in campaign performance",
    href: "/services/ai-marketing"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Automate your entire marketing funnel for 24/7 lead generation and nurturing",
    features: ["Email automation", "Lead scoring", "Workflow optimization"],
    result: "85% reduction in manual marketing tasks",
    href: "/services/marketing-automation"
  },
  {
    icon: Search,
    title: "Organic Growth & SEO",
    description: "AI-powered SEO strategies that dominate search results and build sustainable traffic",
    features: ["Healthcare SEO", "Local SEO", "AI content optimization"],
    result: "Average 340% organic traffic increase",
    href: "/services/organic-growth"
  },
  {
    icon: Target,
    title: "Strategic Media Buying",
    description: "AI-optimized ad campaigns with automated bidding and smart audience targeting",
    features: ["Google Ads automation", "Facebook AI targeting", "Programmatic advertising"],
    result: "Average 4.2x ROAS across campaigns",
    href: "/services/media-buying"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "AI-assisted content creation and automated distribution for maximum engagement",
    features: ["AI content generation", "Automated publishing", "Performance optimization"],
    result: "2.5x increase in qualified leads",
    href: "/services/content-marketing"
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Data-driven strategies powered by AI insights and predictive analytics",
    features: ["AI market analysis", "Automated reporting", "Growth forecasting"],
    result: "85% faster time to market",
    href: "/services/marketing-strategy"
  },
  {
    icon: Code,
    title: "Internal Tools Development",
    description: "AI-powered custom solutions to automate and scale operations",
    features: ["AI-powered CRM", "Smart dashboards", "Automation workflows"],
    result: "60% reduction in manual tasks",
    href: "/services/internal-tools"
  },
  {
    icon: Globe,
    title: "World-Class Websites",
    description: "High-converting websites with AI chatbots and automated user experiences",
    features: ["AI chatbots", "Smart personalization", "Conversion optimization"],
    result: "Average 190% increase in conversions",
    href: "/services/websites"
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform data into actionable insights and intelligence",
    features: ["Custom Dashboards", "Predictive Analytics", "ROI Attribution"],
    result: "95% improvement in decision-making speed",
    href: "/services/data-analytics"
  }
]

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven marketing systems deliver measurable results for healthcare, real estate, and travel businesses through intelligent automation and data-driven strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={index} 
                className={`group relative h-full transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 bg-white hover-shadow hover-lift`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4 transition-colors duration-300 group-hover:bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-sm font-semibold text-green-700">
                        ✓ {service.result}
                      </p>
                    </div>
                  </div>
                  
                  <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-lg text-gray-600 max-w-2xl">
              Ready to accelerate your growth with our proven strategies?
            </p>
            <Link href="/services">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover-lift hover-shadow"
              >
                <span>View All Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 