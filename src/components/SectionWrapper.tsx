import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'muted' | 'gradient';
  withSeparator?: boolean;
}

export function SectionWrapper({
  children,
  className = '',
  background = 'white',
  withSeparator = false,
}: SectionWrapperProps) {
  const bgClasses = {
    white: 'bg-white',
    muted: 'bg-muted',
    gradient: 'bg-gradient-to-b from-background to-white',
  };

  return (
    <section
      className={`relative py-16 md:py-20 ${bgClasses[background]} transition-colors duration-500 ${className}`}
    >
      {withSeparator && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
