"use client"

import { useState, useEffect, useRef } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "I'm currently on the tour with Paula Abdul, and while we were performing in town I came across your chocolate chip cookies. They were absolutely delicious! I couldn't stop eating them. Paula Abdul, the Physical therapist and the glam squad. Of course they all agreed with me that So glad we are coming back next week!",
    author: "Sarah Johnson",
    role: "Food Blogger",
    avatar: "/food-blogger-woman.png",
  },
  {
    id: 2,
    text: "The pasta here is absolutely incredible! Every bite is perfectly seasoned and the ingredients are so fresh. This has become our family's favorite restaurant for special occasions.",
    author: "Michael Chen",
    role: "Regular Customer",
    avatar: "/friendly-asian-customer.png",
  },
  {
    id: 3,
    text: "Outstanding service and even better food. The attention to detail in every dish shows the chef's passion. I've recommended this place to all my friends!",
    author: "Emma Davis",
    role: "Local Resident",
    avatar: "/happy-woman-dining.png",
  },
]

export function TestimonialSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 4000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="floating-element top-10 right-10 animate-morph hover-lift">
        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 opacity-60 animate-pulse-glow"></div>
      </div>
      <div className="floating-element bottom-20 left-8 animate-bounce-in hover-lift">
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-pink-400 rounded-full opacity-50 animate-wiggle"></div>
      </div>
      <div className="floating-element top-1/2 right-16 animate-slow-rotate hover-lift">
        <div className="w-4 h-8 bg-gradient-to-br from-red-500 to-purple-500 rounded-full opacity-70"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pasta Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative group">
              <img
                src="/images/testimonial-pasta.jpeg"
                alt="Elegant pasta dish with poached egg, cherry tomatoes, and fresh basil"
                className="w-full max-w-lg mx-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-105 hover-lift rounded-xl aspect-square object-cover"
              />
              <div className="absolute -top-6 -right-6 animate-bounce-in magnetic-effect group-hover:animate-wiggle">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 opacity-70 animate-morph"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float-reverse magnetic-effect group-hover:animate-shake">
                <div className="w-6 h-6 bg-gradient-to-br from-accent to-emerald-400 rounded-full opacity-60 animate-pulse-glow"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2 hover:animate-wiggle transition-all duration-300">
                Let's see what other says
              </h2>
              <p className="text-muted-foreground">Please serve yourself without any hesitate</p>
            </div>

            <div className="relative min-h-[120px]">
              <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary/30 animate-pulse-glow" />
              <blockquote
                key={activeTestimonial}
                className="text-lg text-foreground leading-relaxed pl-6 animate-fade-in-up"
              >
                {testimonials[activeTestimonial].text}
              </blockquote>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 interactive-card"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              {/* Profile Images */}
              <div className="flex items-center justify-center space-x-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`relative transition-all duration-500 interactive-card ${
                      index === activeTestimonial
                        ? "scale-110 animate-pulse-glow"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg hover-lift"
                    />
                    {index === activeTestimonial && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 animate-pulse-glow"></div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 interactive-card"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            <div className="text-center">
              <p key={`author-${activeTestimonial}`} className="font-semibold text-foreground animate-fade-in-up">
                {testimonials[activeTestimonial].author}
              </p>
              <p
                key={`role-${activeTestimonial}`}
                className="text-sm text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                {testimonials[activeTestimonial].role}
              </p>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeTestimonial ? "w-8 bg-primary animate-pulse-glow" : "w-2 bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
