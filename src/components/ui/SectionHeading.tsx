// components/UI/SectionHeading.tsx
'use client';

interface SectionHeadingProps {
  directory: string;
  command: string;
  description?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'blue';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  directory,
  command,
  description,
  glowColor = 'cyan'
}) => {
  const glowColors = {
    cyan: 'cyber-glow-cyan hover:border-cyan-400/50',
    pink: 'cyber-glow-pink hover:border-pink-400/50',
    purple: 'cyber-glow-purple hover:border-purple-400/50',
    blue: 'cyber-glow-blue hover:border-blue-400/50'
  };

  const bgColors = {
    cyan: 'bg-cyan-400',
    pink: 'bg-pink-400',
    purple: 'bg-purple-400',
    blue: 'bg-blue-400'
  };

  return (
    <div className="mb-6 group">
      <div className={`flex items-center gap-3 p-4 rounded-xl bg-black/60 border-2 border-${glowColor}-400/30 backdrop-blur-lg w-fit ${glowColors[glowColor]} transition-all duration-300`}>
        <span className="text-cyan-400 font-mono font-bold">{directory}</span>
        <span className="text-white font-mono">{command}</span>
        <div className={`w-3 h-6 ${bgColors[glowColor]} animate-pulse ml-2 rounded-sm group-hover:bg-pink-400 transition-colors duration-300`}></div>
      </div>
      {description && (
        <p className="mt-3 text-white/60 text-sm pl-4 font-mono">
          // {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;