"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, TrendingUp, Users, Target, BarChart3, Star, Award } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            {/* Enhanced trust badge */}
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full px-5 py-2.5 text-sm text-blue-700 mb-8 shadow-sm transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-medium">Trusted by 250+ Growing Businesses</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Enhanced main headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <span className="text-gray-900">AI-Powered Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                That Drives Results
              </span>
            </h1>

            {/* Enhanced subheadline */}
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              We've generated <span className="font-bold text-green-600">$50M+</span> in revenue for healthcare, real estate & travel clients using our proven AI marketing systems and data-driven strategies.
            </p>

            {/* Enhanced key benefits */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-lg shadow-sm border border-gray-100">
                <Target className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-medium">AI-Powered Campaigns</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-lg shadow-sm border border-gray-100">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">98% Client Retention</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/80 rounded-lg shadow-sm border border-gray-100">
                <Users className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700 font-medium">15+ Industries</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Marketing Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Enhanced stats */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="text-center lg:text-left p-4 bg-white/60 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600 font-medium">Campaigns</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-white/60 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600 font-medium">Retention</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-white/60 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Revenue</div>
              </div>
              <div className="text-center lg:text-left p-4 bg-white/60 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Industries</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Enhanced dashboard mockup */}
              <div className="relative max-w-lg mx-auto">
                {/* Main dashboard */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <BarChart3 className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">Marketing Dashboard</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="text-xs text-gray-500 font-medium">Live Data</div>
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-medium">Campaign Performance</span>
                          <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            +185%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full w-4/5 shadow-sm"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-medium">Lead Generation</span>
                          <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            +240%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-5/6 shadow-sm"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 font-medium">ROI</span>
                          <span className="text-sm font-bold text-green-600 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            320%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full w-3/4 shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-4 py-3 text-sm font-bold shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    +320% ROI
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-4 py-3 text-sm font-bold shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    AI Optimized
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced trust indicators */}
      <div className="relative bg-gradient-to-r from-gray-50 to-blue-50/30 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8 font-medium">
            Trusted by industry leaders across healthcare, real estate, and travel
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare Leaders', icon: '🏥' },
              { name: 'Real Estate Pros', icon: '🏡' },
              { name: 'Travel Giants', icon: '✈️' },
              { name: 'Fortune 500', icon: '🏢' }
            ].map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-xl">{company.icon}</span>
                <span className="text-gray-700 text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 