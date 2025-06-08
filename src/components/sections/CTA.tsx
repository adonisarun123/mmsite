"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Award, Users, Star, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const benefits = [
  "Free comprehensive marketing audit",
  "Custom strategy recommendations", 
  "Industry-specific insights",
  "No obligation consultation"
]

const testimonialQuotes = [
  {
    quote: "MonkMantra transformed our patient acquisition completely!",
    author: "Dr. Sarah Johnson",
    role: "Healthcare Director"
  },
  {
    quote: "Best ROI we've ever seen from a marketing agency.",
    author: "Michael Chen",
    role: "Real Estate CEO"
  },
  {
    quote: "Our bookings increased 300% in just 6 months.",
    author: "Lisa Thompson",
    role: "Tourism Manager"
  }
]

export function CTA() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/40 via-violet-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-6xl relative">
        <div className="text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-violet-50 text-purple-600 px-5 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-purple-200/50">
            <Sparkles className="h-4 w-4" />
            Ready to Transform Your Business?
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Get Your Free Marketing Audit
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover untapped growth opportunities in your industry with our comprehensive marketing audit and strategy consultation.
          </p>
          
          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center text-left p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-purple-200/50 hover:border-purple-300/50 hover-shadow transition-all duration-200"
              >
                <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Testimonial */}
          <div className="mb-12 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200/50 max-w-2xl mx-auto hover-shadow shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            <p className="text-lg text-gray-700 italic mb-4 min-h-[60px] flex items-center justify-center">
              &ldquo;{testimonialQuotes[currentTestimonial].quote}&rdquo;
            </p>
            <div className="text-gray-600">
              <p className="font-semibold">{testimonialQuotes[currentTestimonial].author}</p>
              <p className="text-sm">{testimonialQuotes[currentTestimonial].role}</p>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonialQuotes.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg font-medium hover-lift hover-shadow shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get My Free Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-lg font-medium hover-lift transform hover:scale-105 transition-all duration-300"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Strategy Call
              </Button>
            </Link>
          </div>

          {/* Enhanced Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "24 Hours", subtitle: "Response Time", color: "blue" },
              { icon: Users, title: "30 Minutes", subtitle: "Strategy Call", color: "green" },
              { icon: Award, title: "100% Free", subtitle: "No Commitment", color: "purple" }
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600"
              }
              return (
                <div key={index} className="text-center">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl w-fit hover-lift transition-transform duration-200 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </div>
                  <div className="text-gray-600">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="border-t border-purple-200/50 pt-12">
            <p className="text-gray-500 text-sm mb-6 font-medium">
              Join 500+ businesses already growing with MonkMantra
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Fortune 500 Companies', icon: '🏢' },
                { name: 'Healthcare Leaders', icon: '🏥' },
                { name: 'Real Estate Pros', icon: '🏡' },
                { name: 'Travel Giants', icon: '✈️' }
              ].map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-lg shadow-sm border border-purple-200/50 hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-xl">{company.icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 