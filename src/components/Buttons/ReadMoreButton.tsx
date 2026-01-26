import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ReadMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
  fullWidth?: boolean;
}

export const ReadMoreButton = ({ 
  children = "$ Read More", 
  showIcon = true,
  fullWidth = false,
  className,
  ...props 
}: ReadMoreButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full flex items-center justify-center gap-2 text-green-400 border-green-400/30 bg-black/20 backdrop-blur-sm hover:bg-green-400/10 hover:border-green-400/50 hover:text-green-300 transition-all duration-300 font-mono",
        fullWidth ? "w-full" : "flex-1",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
    </Button>
  );
};

export default ReadMoreButton;