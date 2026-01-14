"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CyberCardProps {
  children: ReactNode
  className?: string
  glowColor?: "cyan" | "pink" | "purple" | "green"
  hover?: boolean
}

export function CyberCard({ children, className, glowColor = "cyan", hover = true }: CyberCardProps) {
  const glowClasses = {
    cyan: "border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20",
    pink: "border-pink-500/20 hover:border-pink-400/50 hover:shadow-pink-500/20",
    purple: "border-purple-500/20 hover:border-purple-400/50 hover:shadow-purple-500/20",
    green: "border-green-500/20 hover:border-green-400/50 hover:shadow-green-500/20",
  }

  return (
    <div
      className={cn(
        "relative rounded-xl border-2 bg-black/60 backdrop-blur-xl p-4",
        "transition-all duration-500 ease-out",
        hover && "hover:shadow-lg hover:-translate-y-1",
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </div>
  )
}
