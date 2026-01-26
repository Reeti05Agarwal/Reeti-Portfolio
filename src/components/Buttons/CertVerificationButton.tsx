import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CertVerificationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
  fullWidth?: boolean;
  verified?: boolean;
}

export const CertVerificationButton = ({ 
  children = "Verify Certificate", 
  showIcon = true,
  fullWidth = true,
  verified = false,
  className,
  ...props 
}: CertVerificationButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full flex items-center justify-center gap-2 text-cyan-400 border-cyan-400/30 bg-black/20 backdrop-blur-sm hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 font-mono",
        fullWidth ? "w-full" : "flex-1",
        verified && "text-green-400 border-green-400/30 hover:bg-green-400/10 hover:border-green-400/50 hover:text-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
        className
      )}
      {...props}
    >
      {showIcon && (
        verified ? (
          // Checkmark icon for verified certificates
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        ) : (
          // Shield icon for unverified certificates
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            />
          </svg>
        )
      )}
      <span>
        {verified ? "✓ " : " "}{children}
      </span>
    </Button>
  );
};


export default CertVerificationButton;