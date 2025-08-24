"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, and pancetta",
    price: "$18",
    image: "/spaghetti-carbonara.png",
    rating: 4.9,
    likes: 127,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil on crispy crust",
    price: "$16",
    image: "/margherita-pizza-basil.png",
    rating: 4.8,
    likes: 89,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Atlantic salmon with herbs and seasonal vegetables",
    price: "$24",
    image: "/grilled-salmon-vegetables.png",
    rating: 4.9,
    likes: 156,
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan and croutons",
    price: "$12",
    image: "/caesar-salad-croutons.png",
    rating: 4.7,
    likes: 73,
  },
  {
    id: 5,
    name: "Beef Tenderloin",
    description: "Premium cut with garlic mashed potatoes",
    price: "$32",
    image: "/beef-tenderloin-mashed-potatoes.png",
    rating: 5.0,
    likes: 203,
  },
  {
    id: 6,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: "$8",
    image: "/classic-tiramisu.png",
    rating: 4.8,
    likes: 94,
  },
]

export function MenuSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [likedItems, setLikedItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const menuCards = document.querySelectorAll(".menu-card")
    menuCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const toggleLike = (itemId: number, event: React.MouseEvent) => {
    event.stopPropagation()
    setLikedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <section ref={sectionRef} id="menu" className="py-20 relative overflow-hidden">
      <div className="floating-element top-10 left-10 animate-morph">
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-60 animate-pulse-glow"></div>
      </div>
      <div className="floating-element bottom-20 right-16 animate-bounce-in">
        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 hover:animate-wiggle transition-all duration-300">
            Our Signature Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and traditional recipes passed down
            through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.id}
              data-index={index}
              className={`menu-card group cursor-pointer transition-all duration-500 interactive-card hover:shadow-2xl ${
                visibleItems.includes(index) ? "animate-bounce-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <button
                  onClick={(e) => toggleLike(item.id, e)}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    likedItems.includes(item.id)
                      ? "bg-red-500/90 text-white animate-bounce-in"
                      : "bg-white/90 text-gray-600 hover:bg-red-500/90 hover:text-white hover:scale-110"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likedItems.includes(item.id) ? "fill-current" : ""}`} />
                </button>

                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-primary animate-pulse-glow">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {item.likes + (likedItems.includes(item.id) ? 1 : 0)} likes
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary font-medium">
                      Click to order →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
