"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      content: "MonkMantra transformed our marketing from a cost center to our biggest revenue driver. Their AI-powered approach generated $2.3M in new revenue in just 6 months.",
      author: "Sarah Chen",
      role: "CMO",
      company: "TechFlow Solutions",
      rating: 5,
      results: "+340% ROAS",
      avatar: "SC",
      bgGradient: "from-blue-500 to-cyan-500",
    },
    {
      content: "Finally, a marketing agency that actually understands our business. They didn't just run ads - they became our strategic growth partner.",
      author: "Marcus Thompson",
      role: "Founder & CEO",
      company: "HealthTech Innovations",
      rating: 5,
      results: "2.4x Lead Growth",
      avatar: "MT",
      bgGradient: "from-green-500 to-emerald-500",
    },
    {
      content: "The speed of execution is incredible. What used to take our team months now happens in days. The ROI speaks for itself.",
      author: "Jennifer Rodriguez",
      role: "VP Marketing",
      company: "Real Estate Empire",
      rating: 5,
      results: "+180% Conversions",
      avatar: "JR",
      bgGradient: "from-purple-500 to-pink-500",
    },
  ];

  const stats = [
    { icon: Users, value: "250+", label: "Happy Clients" },
    { icon: TrendingUp, value: "$50M+", label: "Revenue Generated" },
    { icon: Award, value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-primary/5" />
      <div className="absolute inset-0 grid-pattern-lg opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6"
          >
            <Star className="h-4 w-4" />
            Customer Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-shadow"
          >
            Loved by{" "}
            <span className="gradient-text">growth-focused companies</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            Join hundreds of businesses that have transformed their marketing with MonkMantra.
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background border-2 border-border shadow-lg mb-4 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift group border-2 border-transparent hover:border-primary/20 transition-all duration-500"
            >
              <div className="card-content relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                    <div className="badge badge-success font-semibold">
                      {testimonial.results}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-foreground mb-8 leading-relaxed text-base group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.bgGradient} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-flex items-center gap-8 bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Glowing background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-xl text-foreground">4.9/5</span>
              </div>
              
              <div className="w-px h-8 bg-border hidden sm:block" />
              
              <div className="text-center sm:text-left">
                <div className="font-semibold text-foreground">250+ Reviews</div>
                <div className="text-sm text-muted-foreground">from verified clients</div>
              </div>
              
              <div className="w-px h-8 bg-border hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live results guaranteed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-10 w-4 h-4 bg-primary/20 rounded-full floating" />
      <div className="absolute top-2/3 right-10 w-6 h-6 bg-purple-500/20 rounded-full floating-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full floating" />
    </section>
  );
} 