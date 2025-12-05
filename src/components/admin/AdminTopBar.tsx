import { Bell, User, Home, Menu } from 'lucide-react';

interface AdminTopBarProps {
  onNavigate: (page: string) => void;
  onToggleMobileMenu?: () => void;
}

export function AdminTopBar({ onNavigate, onToggleMobileMenu }: AdminTopBarProps) {
  return (
    <header className="bg-white border-b border-border px-4 md:px-6 py-4" dir="rtl">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Search & Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="hidden md:flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>بازگشت به فروشگاه</span>
          </button>
          
          {/* Mobile: Just icon */}
          <button
            onClick={() => onNavigate('home')}
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="بازگشت به فروشگاه"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Hamburger, User & Notifications */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="منوی اصلی"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-muted px-2 md:px-3 py-2 rounded-lg transition-colors">
            <div className="text-right hidden md:block">
              <div className="text-sm text-foreground">مدیر سیستم</div>
              <div className="text-xs text-muted-foreground">admin@kharazi.com</div>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Bell className="w-6 h-6 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
