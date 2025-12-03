import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  actionVariant?: 'primary' | 'secondary' | 'outline';
}

export function EmptyState({
  icon: Icon,
  title,
  message,
  actionLabel,
  onAction,
  actionVariant = 'primary',
}: EmptyStateProps) {
  const buttonClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'bg-white border-2 border-primary text-primary hover:bg-primary/5',
  };

  return (
    <div className="text-center py-16 px-4">
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
          <Icon className="w-12 h-12 text-muted-foreground" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl text-foreground mb-3">{title}</h3>

      {/* Message */}
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">{message}</p>

      {/* Action Button */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className={`px-6 py-3 rounded-lg transition-colors ${buttonClasses[actionVariant]}`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
