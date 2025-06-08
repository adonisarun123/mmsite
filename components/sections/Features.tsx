"use client";

import { 
  Zap, 
  Target, 
  BarChart3, 
  Brain,
  Palette,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Strategy",
      description: "Our proprietary AI analyzes your market, competitors, and audience to create winning strategies in minutes, not months.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-950/20",
      borderColor: "hover:border-purple-200 dark:hover:border-purple-800",
      shadowColor: "hover:shadow-purple-500/20",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "From concept to campaign launch in 72 hours. Our streamlined process eliminates the typical agency bottlenecks.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      darkBgColor: "dark:bg-yellow-950/20",
      borderColor: "hover:border-yellow-200 dark:hover:border-yellow-800",
      shadowColor: "hover:shadow-yellow-500/20",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal customers with surgical precision using advanced audience modeling and behavioral data.",
      color: "text-red-500",
      bgColor: "bg-red-50",
      darkBgColor: "dark:bg-red-950/20",
      borderColor: "hover:border-red-200 dark:hover:border-red-800",
      shadowColor: "hover:shadow-red-500/20",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor campaign performance with our intuitive dashboard. Make data-driven decisions with confidence.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-950/20",
      borderColor: "hover:border-blue-200 dark:hover:border-blue-800",
      shadowColor: "hover:shadow-blue-500/20",
    },
    {
      icon: Palette,
      title: "Creative Excellence",
      description: "Our creative team produces scroll-stopping content that converts. From video ads to landing pages.",
      color: "text-green-500",
      bgColor: "bg-green-50",
      darkBgColor: "dark:bg-green-950/20",
      borderColor: "hover:border-green-200 dark:hover:border-green-800",
      shadowColor: "hover:shadow-green-500/20",
    },
    {
      icon: Users,
      title: "Dedicated Success Team",
      description: "Your dedicated team of marketing experts works as an extension of your business, not just another vendor.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      darkBgColor: "dark:bg-orange-950/20",
      borderColor: "hover:border-orange-200 dark:hover:border-orange-800",
      shadowColor: "hover:shadow-orange-500/20",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern-lg opacity-30" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Everything You Need
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-shadow"
          >
            Everything you need to{" "}
            <span className="gradient-text">dominate your market</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            From strategy to execution, we handle every aspect of your marketing so you can focus on what you do best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card hover-lift group cursor-pointer border-2 border-transparent ${feature.borderColor} transition-all duration-500 ${feature.shadowColor}`}
            >
              <div className="card-content relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 ${feature.bgColor} ${feature.darkBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} ${feature.darkBgColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-4">
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-4">
              <Link href="/services" className="btn btn-outline btn-lg group">
                <BarChart3 className="h-5 w-5" />
                View All Services
              </Link>
              <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary">
                <Sparkles className="h-5 w-5" />
                Get Started Today
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Join 250+ businesses already growing with MonkMantra</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 