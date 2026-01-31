export interface ColorScheme {
  primary: string;
  glow: string;
  accent: string;
  icon: string;
  badge: string;
}

export const colorSchemes: ColorScheme[] = [
  { // Blue scheme
    primary: 'border-blue-500/30 hover:border-blue-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    accent: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    icon: 'text-blue-400',
    badge: 'from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-300'
  },
  { // Purple scheme
    primary: 'border-purple-500/30 hover:border-purple-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    accent: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    icon: 'text-purple-400',
    badge: 'from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-300'
  },
  { // Pink scheme
    primary: 'border-pink-500/30 hover:border-pink-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
    accent: 'bg-pink-500/20 border-pink-500/30 text-pink-300',
    icon: 'text-pink-400',
    badge: 'from-pink-500/20 to-pink-500/10 border-pink-500/30 text-pink-300'
  },
  { // Green scheme
    primary: 'border-green-500/30 hover:border-green-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    accent: 'bg-green-500/20 border-green-500/30 text-green-300',
    icon: 'text-green-400',
    badge: 'from-green-500/20 to-green-500/10 border-green-500/30 text-green-300'
  },
  { // Cyan scheme
    primary: 'border-cyan-500/30 hover:border-cyan-400/50',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    accent: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
    icon: 'text-cyan-400',
    badge: 'from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-300'
  }
];

// Get color scheme by index
export function getColorScheme(index: number): ColorScheme {
  return colorSchemes[index % colorSchemes.length];
}

// Get specific color scheme if you want to force a particular color
export function getSpecificColorScheme(name: 'blue' | 'purple' | 'pink' | 'green' | 'cyan'): ColorScheme {
  const schemeMap = {
    blue: colorSchemes[0],
    purple: colorSchemes[1],
    pink: colorSchemes[2],
    green: colorSchemes[3],
    cyan: colorSchemes[4]
  };
  return schemeMap[name];
}