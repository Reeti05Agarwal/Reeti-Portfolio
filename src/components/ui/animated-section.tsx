"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur"
  delay?: number
  duration?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>()

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }

    if (!isInView) {
      switch (animation) {
        case "fade-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(40px)" }
        case "fade-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-40px)" }
        case "fade-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(40px)" }
        case "fade-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(-40px)" }
        case "scale":
          return { ...baseStyles, opacity: 0, transform: "scale(0.95)" }
        case "blur":
          return { ...baseStyles, opacity: 0, filter: "blur(10px)" }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
      filter: "blur(0)",
    }
  }

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
    </div>
  )
}
