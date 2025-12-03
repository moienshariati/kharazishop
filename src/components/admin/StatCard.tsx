import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow" dir="rtl">
      <div className="flex items-start justify-between mb-4">
        <div className="text-right">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl text-foreground">{value}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            trendUp ? 'bg-green-100' : 'bg-primary/10'
          }`}
        >
          <Icon
            className={`w-6 h-6 ${trendUp ? 'text-green-600' : 'text-primary'}`}
          />
        </div>
      </div>
      {trend && (
        <div className="flex items-center justify-end gap-2">
          <span
            className={`text-sm ${
              trendUp ? 'text-green-600' : 'text-destructive'
            }`}
          >
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}
