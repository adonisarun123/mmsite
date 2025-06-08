"use client"

import { TrendingUp, Users, DollarSign, Award, Star } from "lucide-react"
import { useState, useEffect } from "react"

const stats = [
  {
    icon: TrendingUp,
    value: 250,
    suffix: "+",
    label: "Successful Campaigns",
    description: "Delivered across healthcare, real estate, and travel industries"
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: "M+",
    label: "Revenue Generated",
    description: "For our clients using proprietary frameworks and strategies"
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Long-term partnerships built on consistent results"
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "With specialized expertise in key growth sectors"
  }
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="stats-section"
      className="py-20 bg-gray-50"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record demonstrates our commitment to driving measurable growth for every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover-shadow hover-lift transition-all duration-300"
              >
                {/* Icon */}
                <div className="mx-auto mb-6 p-4 bg-blue-50 rounded-2xl w-fit">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Animated Number */}
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900 block leading-none">
                    {isVisible ? (
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2000 + (index * 200)}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-white border border-gray-200">
            <div className="flex items-center gap-3 text-gray-900">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold">Trusted by Industry Leaders Worldwide</span>
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {['Google Partner', 'Meta Business Partner', 'HubSpot Certified', 'Salesforce Partner'].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 