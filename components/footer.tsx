"use client"

import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-bold text-primary">Delizioso</div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Experience authentic flavors with our fresh, handcrafted dishes made with love and premium ingredients.
              Creating memorable dining experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
  <div className="space-y-4 min-h-0 text-center">
    <h3 className="font-semibold text-foreground text-lg">Quick Links</h3>
    <div className="flex flex-col gap-2 items-start">
      <button
        onClick={() => scrollToSection("hero")}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("menu")}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Menu
      </button>
      <button
        onClick={() => scrollToSection("testimonials")}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Testimonials
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Contact
      </button>
    </div>
  </div>
</div>


          <div className="space-y-4 min-h-0">
            <h3 className="font-semibold text-foreground text-lg">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>123 Culinary Street</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
                  <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
                  <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Delizioso. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  )
}
