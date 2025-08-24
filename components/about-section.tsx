"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/chef-cooking.png" alt="Chef cooking" className="rounded-lg shadow-lg" />
              <img src="/fresh-vegetables.png" alt="Fresh ingredients" className="rounded-lg shadow-lg mt-8" />
              <img src="/restaurant-interior-dining.png" alt="Restaurant interior" className="rounded-lg shadow-lg -mt-8" />
              <img src="/gourmet-plated-dish.png" alt="Gourmet dish" className="rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Story of Passion & Flavor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2010, Delizioso began as a small family restaurant with a simple mission: to bring authentic,
              fresh flavors to our community. Our journey started with traditional recipes passed down through
              generations, combined with a passion for using only the finest, locally-sourced ingredients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue to honor our heritage while embracing innovation in the kitchen. Every dish is crafted
              with love, attention to detail, and a commitment to creating memorable dining experiences that bring
              families and friends together around the table.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-serif">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-serif">13+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
