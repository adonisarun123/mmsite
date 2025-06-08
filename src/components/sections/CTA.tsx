"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Award, Users, Star } from "lucide-react"
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
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Ready to Transform Your Business?
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Get Your Free Marketing Audit
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover untapped growth opportunities in your industry with our comprehensive marketing audit and strategy consultation.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center text-left p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover-shadow transition-all duration-200"
              >
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mb-12 p-8 rounded-2xl bg-white border border-gray-200 max-w-2xl mx-auto hover-shadow">
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
                    currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover-lift hover-shadow"
              >
                Get My Free Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium hover-lift"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Strategy Call
              </Button>
            </Link>
          </div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "24 Hours", subtitle: "Response Time" },
              { icon: Users, title: "30 Minutes", subtitle: "Strategy Call" },
              { icon: Award, title: "100% Free", subtitle: "No Commitment" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-50 rounded-2xl w-fit hover-lift transition-transform duration-200">
                    <Icon className="h-8 w-8 text-blue-600" />
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

          {/* Trust Indicators */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-gray-500 text-sm mb-6">
              Join 500+ businesses already growing with MonkMantra
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Fortune 500 Companies', 'Healthcare Leaders', 'Real Estate Pros', 'Travel Giants'].map((company, index) => (
                <div key={index} className="text-gray-600 text-sm font-medium">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 