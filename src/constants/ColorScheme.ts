// contants/ColorScheme.ts

// Expanded color palette with more options
export const COLOR_PALETTE = {
  cyan: {
    primary: 'bg-cyan-500',
    light: 'bg-cyan-400',
    dark: 'bg-cyan-600',
    text: 'text-cyan-300',
    border: 'border-cyan-500',
    shadow: 'rgba(34,211,238,0.15)',
    gradient: 'from-cyan-500/10 via-transparent to-cyan-500/5'
  },
  purple: {
    primary: 'bg-purple-500',
    light: 'bg-purple-400',
    dark: 'bg-purple-600',
    text: 'text-purple-300',
    border: 'border-purple-500',
    shadow: 'rgba(168,85,247,0.15)',
    gradient: 'from-purple-500/10 via-transparent to-purple-500/5'
  },
  green: {
    primary: 'bg-green-500',
    light: 'bg-green-400',
    dark: 'bg-green-600',
    text: 'text-green-300',
    border: 'border-green-500',
    shadow: 'rgba(34,197,94,0.15)',
    gradient: 'from-green-500/10 via-transparent to-green-500/5'
  },
  blue: {
    primary: 'bg-blue-500',
    light: 'bg-blue-400',
    dark: 'bg-blue-600',
    text: 'text-blue-300',
    border: 'border-blue-500',
    shadow: 'rgba(59,130,246,0.15)',
    gradient: 'from-blue-500/10 via-transparent to-blue-500/5'
  },
  pink: {
    primary: 'bg-pink-500',
    light: 'bg-pink-400',
    dark: 'bg-pink-600',
    text: 'text-pink-300',
    border: 'border-pink-500',
    shadow: 'rgba(236,72,153,0.15)',
    gradient: 'from-pink-500/10 via-transparent to-pink-500/5'
  },
  // amber: {
  //   primary: 'bg-amber-500',
  //   light: 'bg-amber-400',
  //   dark: 'bg-amber-600',
  //   text: 'text-amber-300',
  //   border: 'border-amber-500',
  //   shadow: 'rgba(245,158,11,0.15)',
  //   gradient: 'from-amber-500/10 via-transparent to-amber-500/5'
  // }
} as const;

export type ColorName = keyof typeof COLOR_PALETTE;

export interface ColorScheme {
  primary: string;
  glow: string;
  accent: string;
  icon: string;
  badge: string;
  tab: {
    active: string;
    inactive: string;
  };
  button: {
    active: string;
    hover: string;
  };
  background: string;
}

// Dynamic color scheme generator
export function generateColorScheme(color: ColorName, variant: 'light' | 'dark' | 'glass' = 'dark'): ColorScheme {
  const palette = COLOR_PALETTE[color];
  const opacityMap = {
    light: { primary: '20', hover: '40', bg: '10' },
    dark: { primary: '30', hover: '50', bg: '20' },
    glass: { primary: '15', hover: '25', bg: '5' }
  };
  const opacities = opacityMap[variant];
  
  return {
    primary: `border-${color}-500/${opacities.primary} hover:border-${color}-400/${opacities.hover}`,
    glow: `hover:shadow-[0_0_30px_${palette.shadow}]`,
    accent: `bg-${color}-500/${opacities.bg} border-${color}-500/${opacities.primary} text-${color}-300`,
    icon: `text-${color}-400`,
    badge: `bg-gradient-to-br from-${color}-500/${opacities.bg} to-${color}-500/5 border-${color}-500/${opacities.primary} text-${color}-300`,
    tab: {
      active: `bg-${color}-500/${opacities.bg} border-${color}-500/${opacities.hover} text-${color}-300`,
      inactive: 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80 hover:bg-black/40'
    },
    button: {
      active: `bg-${color}-500/${opacities.bg} border-${color}-500/${opacities.primary}`,
      hover: `hover:bg-${color}-500/${opacities.hover} hover:border-${color}-500/${opacities.hover}`
    },
    background: palette.gradient
  };
}

// Predefined schemes for common use cases
export const COLOR_SCHEMES = Object.keys(COLOR_PALETTE).reduce((acc, color) => ({
  ...acc,
  [color]: generateColorScheme(color as ColorName)
}), {} as Record<ColorName, ColorScheme>);

// Cycle through colors for multiple items
export function getCycledColor(index: number): ColorScheme {
  const colors = Object.keys(COLOR_PALETTE) as ColorName[];
  return COLOR_SCHEMES[colors[index % colors.length]];
}

// Tab configuration factory
export function createTabConfig(configs: Record<string, {
  label: string;
  color: ColorName;
  icon: string;
  description: string;
}>) {
  return configs;
}

// Enhanced Colors utility with dynamic methods
export const Colors = {
  // Get scheme by name
  scheme: (name: ColorName) => COLOR_SCHEMES[name],
  
  // Dynamic helpers
  tab: (color: ColorName, isActive: boolean) => 
    isActive ? COLOR_SCHEMES[color].tab.active : COLOR_SCHEMES[color].tab.inactive,
  
  badge: (color: ColorName, variant: 'solid' | 'gradient' = 'gradient') =>
    variant === 'gradient' 
      ? COLOR_SCHEMES[color].badge 
      : `bg-${color}-500/20 border-${color}-500/30 text-${color}-300`,
    
  button: (color: ColorName) => COLOR_SCHEMES[color].button.active,
  
  text: (color: ColorName) => `text-${color}-300`,
  
  border: (color: ColorName, opacity: number = 30) => 
    `border-${color}-500/${opacity}`,
  
  background: (color: ColorName) => COLOR_SCHEMES[color].background,
  
  // Generate gradient string
  gradient: (from: ColorName, via: ColorName | 'transparent', to: ColorName, opacity: number = 10) =>
    `from-${from}-500/${opacity} via-${via === 'transparent' ? 'transparent' : `${via}-500/${opacity}`} to-${to}-500/${opacity}`,
  
  // Color cycling for lists
  cycle: (index: number): ColorName => {
    const colors = Object.keys(COLOR_PALETTE) as ColorName[];
    return colors[index % colors.length];
  }
};

// Default tab configurations (can be extended)
export const TAB_CONFIG = createTabConfig({
  projects: {
    label: 'Projects',
    color: 'cyan',
    icon: 'Code',
    description: 'AI-driven security tools, forensic applications, and research projects'
  },
  hackathons: {
    label: 'Hackathons',
    color: 'purple',
    icon: 'Trophy',
    description: 'CTF competitions, security challenges, and hackathon submissions'
  },
  all: {
    label: 'All Posts',
    color: 'cyan',
    icon: 'FileText',
    description: 'Browse all technical articles'
  },
  cyber: {
    label: 'Cybersecurity',
    color: 'purple',
    icon: 'Terminal',
    description: 'Security research, penetration testing, and threat analysis'
  },
  tech: {
    label: 'Technology',
    color: 'green',
    icon: 'PenTool',
    description: 'Development, programming, and technical tutorials'
  },
  research: {
    label: 'Research',
    color: 'blue',
    icon: 'BookOpen',
    description: 'Academic papers, studies, and detailed analysis'
  }
});

export type TabColor =
  | "cyan"
  | "purple"
  | "green"
  | "blue"
  | "pink"
  | "amber";