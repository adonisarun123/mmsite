"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  const benefits = [
    {
      icon: Calendar,
      title: "Free Marketing Audit",
      description: "Complete assessment worth $2,000",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-950/20",
    },
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description: "45-minute strategy session",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-950/20",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Launch your first campaign in 72 hours",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-950/20",
    },
  ];

  const trustElements = [
    "No long-term contracts",
    "Setup in 72 hours",
    "30-day money back guarantee",
  ];

  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50/50 to-background dark:from-primary/5 dark:via-purple-950/20 dark:to-background">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Enhanced Background Card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            <div className="card border-2 border-primary/20 bg-background/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-xl" />
              
              <div className="card-content p-12 lg:p-16 relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-8"
                >
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Limited Time Offer
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6 text-shadow"
                >
                  Ready to{" "}
                  <span className="gradient-text">transform</span>{" "}
                  your marketing?
                </motion.h2>
                
                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Join 250+ growing businesses who've accelerated their growth with our AI-powered marketing platform. 
                  <span className="text-primary font-semibold"> Get started with a free audit today.</span>
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <benefit.icon className="h-8 w-8" />
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <Link href="/get-started" className="btn btn-primary btn-lg group glow-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Get Your Free Audit ($2,000 Value)
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  
                  <Link href="/contact" className="btn btn-outline btn-lg group">
                    <MessageCircle className="h-5 w-5" />
                    Schedule a Call
                  </Link>
                </motion.div>

                {/* Trust Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50"
                >
                  {trustElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {element}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5 from 250+ reviews</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live results guaranteed</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full floating" />
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-purple-500/20 rounded-full floating-delayed" />
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-blue-500/20 rounded-full floating" />
    </section>
  );
} 