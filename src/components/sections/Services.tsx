"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Target, FileText, TrendingUp, Code, Globe, Bot, Zap, Database, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "AI Marketing Systems",
    description: "Leverage artificial intelligence to optimize campaigns and predict customer behavior",
    features: ["AI campaign optimization", "Predictive analytics", "Smart audience targeting"],
    result: "312% improvement in campaign performance",
    color: "blue",
    href: "/services/ai-marketing"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Automate your entire marketing funnel for 24/7 lead generation and nurturing",
    features: ["Email automation", "Lead scoring", "Workflow optimization"],
    result: "85% reduction in manual marketing tasks",
    color: "purple",
    href: "/services/marketing-automation"
  },
  {
    icon: Search,
    title: "Organic Growth & SEO",
    description: "AI-powered SEO strategies that dominate search results and build sustainable traffic",
    features: ["Healthcare SEO", "Local SEO", "AI content optimization"],
    result: "Average 340% organic traffic increase",
    color: "green",
    href: "/services/organic-growth"
  },
  {
    icon: Target,
    title: "Strategic Media Buying",
    description: "AI-optimized ad campaigns with automated bidding and smart audience targeting",
    features: ["Google Ads automation", "Facebook AI targeting", "Programmatic advertising"],
    result: "Average 4.2x ROAS across campaigns",
    color: "orange",
    href: "/services/media-buying"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "AI-assisted content creation and automated distribution for maximum engagement",
    features: ["AI content generation", "Automated publishing", "Performance optimization"],
    result: "2.5x increase in qualified leads",
    color: "cyan",
    href: "/services/content-marketing"
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Data-driven strategies powered by AI insights and predictive analytics",
    features: ["AI market analysis", "Automated reporting", "Growth forecasting"],
    result: "85% faster time to market",
    color: "indigo",
    href: "/services/marketing-strategy"
  },
  {
    icon: Code,
    title: "Internal Tools Development",
    description: "AI-powered custom solutions to automate and scale operations",
    features: ["AI-powered CRM", "Smart dashboards", "Automation workflows"],
    result: "60% reduction in manual tasks",
    color: "pink",
    href: "/services/internal-tools"
  },
  {
    icon: Globe,
    title: "World-Class Websites",
    description: "High-converting websites with AI chatbots and automated user experiences",
    features: ["AI chatbots", "Smart personalization", "Conversion optimization"],
    result: "Average 190% increase in conversions",
    color: "emerald",
    href: "/services/websites"
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform data into actionable insights and intelligence",
    features: ["Custom Dashboards", "Predictive Analytics", "ROI Attribution"],
    result: "95% improvement in decision-making speed",
    color: "violet",
    href: "/services/data-analytics"
  }
]

const colorClasses = {
  blue: {
    icon: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:border-blue-300"
  },
  purple: {
    icon: "from-purple-500 to-purple-600",
    bg: "from-purple-50 to-purple-100/50",
    border: "border-purple-200",
    text: "text-purple-600",
    hover: "hover:border-purple-300"
  },
  green: {
    icon: "from-green-500 to-green-600",
    bg: "from-green-50 to-green-100/50",
    border: "border-green-200",
    text: "text-green-600",
    hover: "hover:border-green-300"
  },
  orange: {
    icon: "from-orange-500 to-orange-600",
    bg: "from-orange-50 to-orange-100/50",
    border: "border-orange-200",
    text: "text-orange-600",
    hover: "hover:border-orange-300"
  },
  cyan: {
    icon: "from-cyan-500 to-cyan-600",
    bg: "from-cyan-50 to-cyan-100/50",
    border: "border-cyan-200",
    text: "text-cyan-600",
    hover: "hover:border-cyan-300"
  },
  indigo: {
    icon: "from-indigo-500 to-indigo-600",
    bg: "from-indigo-50 to-indigo-100/50",
    border: "border-indigo-200",
    text: "text-indigo-600",
    hover: "hover:border-indigo-300"
  },
  pink: {
    icon: "from-pink-500 to-pink-600",
    bg: "from-pink-50 to-pink-100/50",
    border: "border-pink-200",
    text: "text-pink-600",
    hover: "hover:border-pink-300"
  },
  emerald: {
    icon: "from-emerald-500 to-emerald-600",
    bg: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    hover: "hover:border-emerald-300"
  },
  violet: {
    icon: "from-violet-500 to-violet-600",
    bg: "from-violet-50 to-violet-100/50",
    border: "border-violet-200",
    text: "text-violet-600",
    hover: "hover:border-violet-300"
  }
}

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-200/50">
            <Sparkles className="h-4 w-4" />
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
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <Card 
                key={index} 
                className={`group h-full transition-all duration-300 cursor-pointer border ${colors.border} ${colors.hover} bg-white hover-shadow hover-lift`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start mb-4">
                    <div className={`p-3 bg-gradient-to-r ${colors.icon} rounded-xl mr-4 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
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
                          className={`text-xs px-3 py-1 bg-gradient-to-r ${colors.bg} ${colors.text} rounded-full border ${colors.border}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        {service.result}
                      </p>
                    </div>
                  </div>
                  
                  <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
                    <Button 
                      variant="outline" 
                      className={`w-full hover:bg-gradient-to-r ${colors.bg} ${colors.hover} ${colors.text} transition-all duration-200 font-medium`}
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium hover-lift hover-shadow shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
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