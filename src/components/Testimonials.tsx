"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Small Business Owner",
      text: "Krishna delivered exactly what I needed. The website was fast, clean, and professional. Communication was smooth throughout the project.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Startup Founder",
      text: "I was impressed by the UI and performance of the project. Krishna understands both design and development, which is rare.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Freelancer Client",
      text: "Very professional and dedicated developer. He completed the project on time and exceeded expectations.",
      rating: 5
    },
    {
      id: 4,
      name: "Sneha Joshi",
      role: "Student Project Client",
      text: "The system he built for us worked perfectly. Clean code and easy to use interface.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[350px] flex items-center justify-center perspective-[1000px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4"
            >
              <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 text-center relative max-w-3xl mx-auto shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12 rotate-180" />
                <Quote className="absolute bottom-6 right-6 text-primary/20 w-12 h-12" />
                
                {/* Star Rating */}
                <div className="flex justify-center gap-1.5 text-yellow-500 mb-8 drop-shadow-md">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={22} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground font-medium italic mb-10 relative z-10 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                
                <div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="font-bold font-heading text-lg text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary text-sm font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white hover:bg-white/10 transition-colors z-10 hover:scale-110"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white hover:bg-white/10 transition-colors z-10 hover:scale-110"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
