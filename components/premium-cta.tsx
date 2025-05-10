"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Crown, Check } from "lucide-react"

export function PremiumCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-xl overflow-hidden premium-card p-8 md:p-12"
    >
      <div className="absolute top-0 left-0 right-0 h-1 animated-gradient"></div>

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
          <Crown className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-playfair tracking-tight premium-gradient-text">
          Upgrade to Lumina Premium
        </h2>

        <p className="text-lg text-muted-foreground">
          Enjoy ad-free streaming, exclusive content, and the ability to download your favorite shows and movies for
          offline viewing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Ad-Free Experience</h3>
              <p className="text-sm text-muted-foreground">Enjoy uninterrupted streaming</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Exclusive Content</h3>
              <p className="text-sm text-muted-foreground">Access premium shows and movies</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Download & Watch</h3>
              <p className="text-sm text-muted-foreground">Enjoy content offline anytime</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full sm:w-auto px-8 py-6 text-lg premium-button">Upgrade Now</Button>
          </motion.div>

          <Button variant="outline" className="w-full sm:w-auto premium-border">
            View All Plans
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
