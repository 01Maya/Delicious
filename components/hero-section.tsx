"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div
        className="floating-element top-20 left-10 animate-morph hover-lift"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 10}px)`,
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-80 animate-pulse-glow"></div>
      </div>
      <div
        className="floating-element top-32 right-16 animate-bounce-in hover-lift"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 8}px)`,
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-accent to-orange-400 rounded-full opacity-70 animate-wiggle"></div>
      </div>
      <div
        className="floating-element bottom-32 left-20 animate-slow-rotate hover-lift"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -12}px) rotate(45deg)`,
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 opacity-60 animate-morph"></div>
      </div>
      <div
        className="floating-element top-1/2 right-8 animate-float hover-lift"
        style={{
          transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 15}px)`,
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-50 animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Bowl Image */}
        <div className={`relative transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="relative group">
            <img
              src="/images/hero-ramen-vibrant.png"
              alt="Vibrant ramen bowl with crispy tofu, fresh greens, lime, and chopsticks in rich orange broth"
              className="w-full max-w-lg mx-auto rounded-full shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 hover-lift"
            />
            <div className="absolute -top-4 -right-4 animate-bounce-in magnetic-effect group-hover:animate-wiggle">
              <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 animate-pulse-glow"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 animate-float-reverse magnetic-effect group-hover:animate-shake">
              <div className="w-6 h-6 bg-gradient-to-br from-accent to-orange-400 opacity-70 animate-morph"></div>
            </div>
            <div className="absolute top-1/2 -left-8 animate-slow-rotate magnetic-effect group-hover:animate-bounce-in">
              <div className="w-4 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
            <span className="inline-block hover:animate-wiggle transition-all duration-300">Fresh</span> &{" "}
            <span className="inline-block hover:animate-wiggle transition-all duration-300">Delicious</span>
            <span className="block text-primary hover:animate-pulse-glow transition-all duration-300">
              for Every Bite
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience authentic flavors with our fresh, handcrafted dishes made with love and premium ingredients.
            Every meal is a journey of taste that brings families together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:animate-pulse-glow interactive-card"
              onClick={() => scrollToSection("menu")}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300 hover:scale-105 bg-transparent interactive-card"
              onClick={() => scrollToSection("menu")}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
