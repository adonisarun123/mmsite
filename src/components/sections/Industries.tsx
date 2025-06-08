"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Plane, CheckCircle, TrendingUp, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const industries = [
  {
    icon: Heart,
    title: "Healthcare Marketing",
    description: "HIPAA-compliant campaigns that build trust and drive patient acquisition",
    features: [
      "Patient acquisition strategies",
      "Medical SEO and reputation management", 
      "Healthcare content marketing",
      "Compliance monitoring"
    ],
    caseStudy: "Increased patient bookings by 275% for multi-location medical practice",
    stats: "98% compliance rate across 250+ campaigns",
    color: "red"
  },
  {
    icon: Home,
    title: "Real Estate Marketing",
    description: "Lead generation systems that convert prospects into qualified buyers and sellers",
    features: [
      "Lead generation systems",
      "Property marketing campaigns",
      "Realtor brand building", 
      "Market analysis and targeting"
    ],
    caseStudy: "Generated 1,200+ qualified leads in 6 months for luxury real estate firm",
    stats: "85% of target keywords ranking on page 1",
    color: "blue"
  },
  {
    icon: Plane,
    title: "Travel & Tourism Marketing",
    description: "Destination marketing that inspires travelers and drives bookings",
    features: [
      "Destination marketing",
      "Booking optimization",
      "Travel content strategy",
      "Seasonal campaign management"
    ],
    caseStudy: "Boosted hotel bookings by 180% during off-season",
    stats: "150M+ travel content impressions generated",
    color: "emerald"
  }
]

const colorClasses = {
  red: {
    icon: "from-red-500 to-red-600",
    bg: "from-red-50 to-red-100/50",
    border: "border-red-200",
    text: "text-red-600",
    hover: "hover:border-red-300"
  },
  blue: {
    icon: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:border-blue-300"
  },
  emerald: {
    icon: "from-emerald-500 to-emerald-600",
    bg: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    hover: "hover:border-emerald-300"
  }
}

export function Industries() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/30 via-amber-50/20 to-yellow-50/40 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-orange-200/50">
            <Sparkles className="h-4 w-4" />
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Specialized Expertise in High-Growth Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We understand the unique challenges and opportunities in healthcare, real estate, and travel. 
            Our industry-specific strategies deliver results that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isHovered = hoveredCard === index;
            const colors = colorClasses[industry.color as keyof typeof colorClasses];
            
            return (
              <Card 
                key={index} 
                className={`group h-full transition-all duration-300 cursor-pointer border ${colors.border} ${colors.hover} bg-white/80 backdrop-blur-sm hover-shadow hover-lift`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center pb-6">
                  {/* Enhanced Icon */}
                  <div className={`mx-auto mb-6 p-6 bg-gradient-to-r ${colors.icon} rounded-3xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className={`h-5 w-5 mr-2 ${colors.text}`} />
                      Our Approach:
                    </h4>
                    <ul className="space-y-3">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Enhanced Success Story Card */}
                  <div className={`mb-8 p-6 bg-gradient-to-r ${colors.bg} rounded-2xl border ${colors.border}`}>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className={`h-4 w-4 mr-2 ${colors.text}`} />
                      Success Story:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {industry.caseStudy}
                    </p>
                    <div className={`inline-flex items-center px-3 py-1 bg-white rounded-full text-xs font-semibold ${colors.text} shadow-sm border border-white`}>
                      📊 {industry.stats}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/case-studies">
                    <Button 
                      className={`w-full hover:bg-gradient-to-r ${colors.bg} ${colors.hover} ${colors.text} transition-all duration-200 font-medium`}
                      variant="outline"
                    >
                      <span>View Case Studies</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Enhanced Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-8 p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-orange-200 shadow-lg">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to see what we can achieve in your industry?</h3>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Join hundreds of successful businesses who've transformed their marketing with our industry-specific strategies.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-4 text-lg rounded-lg font-medium hover-lift hover-shadow shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                <span>Get Your Industry-Specific Strategy</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 opacity-60">
              {['Healthcare Leaders', 'Real Estate Pros', 'Travel Giants'].map((text, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 