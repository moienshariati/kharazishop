import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingBag,
  TrendingUp,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

interface AdminSidebarProps {
  activeMenu?: string;
  onMenuChange?: (menu: string) => void;
  onNavigate?: (page: string) => void;
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

export function AdminSidebar({ 
  activeMenu = 'dashboard', 
  onMenuChange, 
  onNavigate,
  isMobileMenuOpen = false,
  onCloseMobileMenu,
}: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'داشبورد', icon: LayoutDashboard },
    { id: 'products', label: 'مدیریت محصولات', icon: Package },
    { id: 'categories', label: 'مدیریت دسته‌بندی‌ها', icon: FolderTree },
    { id: 'orders', label: 'مدیریت سفارشات', icon: ShoppingBag },
    { id: 'sales', label: 'گزارش فروش', icon: TrendingUp },
    { id: 'settings', label: 'تنظیمات', icon: Settings },
  ];

  const handleMenuClick = (menuId: string) => {
    onMenuChange?.(menuId);
    onCloseMobileMenu?.();
  };

  const handleLogout = () => {
    onNavigate?.('home');
    onCloseMobileMenu?.();
  };

  return (
    <>
      {/* Backdrop - Mobile Only */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onCloseMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 right-0 z-50
          w-64 bg-secondary text-white h-screen 
          flex flex-col flex-shrink-0
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        dir="rtl"
      >
        {/* Header with Close Button */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="text-right">
            <h1 className="text-2xl">پنل مدیریت</h1>
            <p className="text-sm text-white/70 mt-1">فروشگاه خرازی</p>
          </div>
          {/* Close Button - Mobile Only */}
          <button
            onClick={onCloseMobileMenu}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="بستن منو"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors min-h-[44px] ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'hover:bg-white/10 text-white/90'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 text-right">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 text-white/90 transition-colors min-h-[44px]"
          >
            <LogOut className="w-5 h-5" />
            <span className="flex-1 text-right">خروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
