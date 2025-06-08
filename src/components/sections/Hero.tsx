"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Clean geometric background pattern */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            {/* Trust badge */}
            <div className={`inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 mb-8 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Trusted by 250+ Growing Businesses</span>
            </div>

            {/* Main headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              AI-Powered Marketing
              <br />
              <span className="text-blue-600">That Drives Results</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              We've generated <span className="font-semibold text-gray-900">$50M+</span> in revenue for healthcare, real estate & travel clients using our proven AI marketing systems.
            </p>

            {/* Key benefits */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">AI-Powered Campaigns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">98% Client Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">15+ Industries</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover-lift hover-shadow"
                >
                  Get Free Marketing Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium hover-lift"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-8 mt-12 transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Retention</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">$50M+</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Professional illustration placeholder */}
              <div className="relative max-w-lg mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">Marketing Dashboard</div>
                      <div className="text-xs text-gray-500">Live Data</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Campaign Performance</span>
                        <span className="text-sm font-semibold text-green-600">+185%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Lead Generation</span>
                        <span className="text-sm font-semibold text-green-600">+240%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">ROI</span>
                        <span className="text-sm font-semibold text-green-600">320%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg px-3 py-2 text-sm font-medium shadow-lg">
                  +320% ROI
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium shadow-lg">
                  AI Optimized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by industry leaders across healthcare, real estate, and travel</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Healthcare Leaders', 'Real Estate Pros', 'Travel Giants', 'Fortune 500'].map((company, index) => (
              <div key={index} className="text-gray-600 text-sm font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 