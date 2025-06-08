"use client"

import { TrendingUp, Users, DollarSign, Award, Star } from "lucide-react"
import { useState, useEffect } from "react"

const stats = [
  {
    icon: TrendingUp,
    value: 250,
    suffix: "+",
    label: "Successful Campaigns",
    description: "Delivered across healthcare, real estate, and travel industries",
    color: "blue"
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: "M+",
    label: "Revenue Generated",
    description: "For our clients using proprietary frameworks and strategies",
    color: "green"
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Long-term partnerships built on consistent results",
    color: "purple"
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "With specialized expertise in key growth sectors",
    color: "orange"
  }
]

const colorClasses = {
  blue: {
    icon: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100/50",
    text: "text-blue-600",
    number: "text-blue-700"
  },
  green: {
    icon: "from-green-500 to-green-600",
    bg: "from-green-50 to-green-100/50",
    text: "text-green-600",
    number: "text-green-700"
  },
  purple: {
    icon: "from-purple-500 to-purple-600",
    bg: "from-purple-50 to-purple-100/50",
    text: "text-purple-600",
    number: "text-purple-700"
  },
  orange: {
    icon: "from-orange-500 to-orange-600",
    bg: "from-orange-50 to-orange-100/50",
    text: "text-orange-600",
    number: "text-orange-700"
  }
}

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
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-200/50">
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
            const colors = colorClasses[stat.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover-shadow hover-lift transition-all duration-300"
              >
                {/* Enhanced Icon */}
                <div className={`mx-auto mb-6 p-4 bg-gradient-to-r ${colors.icon} rounded-2xl w-fit shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Animated Number */}
                <div className="mb-3">
                  <span className={`text-4xl md:text-5xl font-bold ${colors.number} block leading-none`}>
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
        
        {/* Enhanced Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
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
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 shadow-sm"
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