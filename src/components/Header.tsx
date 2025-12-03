import { Search, ShoppingCart, User, Menu, X, UserCircle, LayoutDashboard, Package, Settings, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  cartCount?: number;
}

export function Header({ onNavigate, cartCount = 0 }: HeaderProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleProfileItemClick = (page: string) => {
    setIsProfileDropdownOpen(false);
    onNavigate(page);
  };

  const handleMobileNavClick = (page: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50" dir="rtl">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <span>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</span>
              <span>|</span>
              <span>ایمیل: info@kharazi.ir</span>
            </div>
            <div>
              <span>ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Right Side: Brand/Logo */}
          <div className="flex items-center gap-4 order-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">خ</span>
              </div>
              <div className="hidden sm:block text-right">
                <h1 className="text-lg md:text-xl text-foreground">خرازی</h1>
                <p className="text-xs text-muted-foreground">فروشگاه ابزار و لوازم</p>
              </div>
            </button>
          </div>

          {/* Center: Search Bar - Hidden on mobile */}
          <div className="flex-1 max-w-2xl hidden md:block order-2">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                className="w-full px-4 py-3 pr-12 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Left Side: Cart & User Icons */}
          <div className="flex items-center gap-2 md:gap-4 order-3">
            {/* Hamburger Menu - Mobile Only */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors lg:hidden"
              aria-label="منوی اصلی"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>

            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="سبد خرید"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-accent text-accent-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className={`p-2 hover:bg-muted rounded-lg transition-colors ${isProfileDropdownOpen ? 'bg-muted' : ''}`}
                aria-label="حساب کاربری"
              >
                <User className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 md:w-56 bg-white rounded-xl shadow-2xl border border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[60]"
                  dir="rtl"
                  style={{ maxWidth: 'calc(100vw - 2rem)' }}
                >
                  <div className="py-2">
                    {/* Profile */}
                    <button
                      onClick={() => handleProfileItemClick('user-account')}
                      className="w-full px-4 py-2.5 text-right hover:bg-muted transition-colors flex items-center gap-3 text-foreground"
                    >
                      <UserCircle className="w-5 h-5 text-primary" />
                      <span>پروفایل کاربری</span>
                    </button>

                    {/* Admin Dashboard */}
                    <button
                      onClick={() => handleProfileItemClick('admin-dashboard')}
                      className="w-full px-4 py-2.5 text-right hover:bg-muted transition-colors flex items-center gap-3 text-foreground"
                    >
                      <LayoutDashboard className="w-5 h-5 text-primary" />
                      <span>داشبورد مدیریت</span>
                    </button>

                    {/* Orders */}
                    <button
                      onClick={() => handleProfileItemClick('order-confirmation')}
                      className="w-full px-4 py-2.5 text-right hover:bg-muted transition-colors flex items-center gap-3 text-foreground"
                    >
                      <Package className="w-5 h-5 text-primary" />
                      <span>سفارش‌ها</span>
                    </button>

                    {/* Settings */}
                    <button
                      onClick={() => handleProfileItemClick('user-account')}
                      className="w-full px-4 py-2.5 text-right hover:bg-muted transition-colors flex items-center gap-3 text-foreground"
                    >
                      <Settings className="w-5 h-5 text-primary" />
                      <span>تنظیمات</span>
                    </button>

                    {/* Divider */}
                    <div className="my-2 border-t border-border"></div>

                    {/* Logout */}
                    <button
                      onClick={() => handleProfileItemClick('home')}
                      className="w-full px-4 py-2.5 text-right hover:bg-destructive/10 transition-colors flex items-center gap-3 text-destructive"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>خروج از حساب</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search - Visible on mobile only */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="w-full px-4 py-2.5 pr-10 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop */}
      <nav className="border-t border-border hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-8 py-3">
            <li>
              <button 
                onClick={() => onNavigate('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                صفحه اصلی
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('category')}
                className="text-foreground hover:text-primary transition-colors"
              >
                دسته‌بندی‌ها
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('category')}
                className="text-foreground hover:text-primary transition-colors"
              >
                محصولات
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => scrollToSection('special-offers'), 100);
                }}
                className="text-foreground hover:text-primary transition-colors"
              >
                پیشنهادات ویژه
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                درباره ما
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                تماس با ما
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Opens from RIGHT */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto lg:hidden animate-in slide-in-from-right duration-300"
            dir="rtl"
          >
            <div className="p-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="بستن منو"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <h2 className="text-lg text-foreground">خرازی</h2>
                    <p className="text-xs text-muted-foreground">فروشگاه ابزار و لوازم</p>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">خ</span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <nav className="space-y-2">
                <button
                  onClick={() => handleMobileNavClick('home')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  صفحه اصلی
                </button>
                <button
                  onClick={() => handleMobileNavClick('category')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  دسته‌بندی‌ها
                </button>
                <button
                  onClick={() => handleMobileNavClick('category')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  محصولات
                </button>
                <button
                  onClick={() => handleMobileNavClick('home', 'special-offers')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  پیشنهادات ویژه
                </button>
                <button
                  onClick={() => handleMobileNavClick('about')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  درباره ما
                </button>
                <button
                  onClick={() => handleMobileNavClick('contact')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  تماس با ما
                </button>
              </nav>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* User Info Section */}
              <div className="space-y-2">
                <button
                  onClick={() => handleMobileNavClick('user-account')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-3"
                >
                  <UserCircle className="w-5 h-5 text-primary" />
                  <span>پروفایل کاربری</span>
                </button>
                <button
                  onClick={() => handleMobileNavClick('admin-dashboard')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-3"
                >
                  <LayoutDashboard className="w-5 h-5 text-primary" />
                  <span>داشبورد مدیریت</span>
                </button>
                <button
                  onClick={() => handleMobileNavClick('order-confirmation')}
                  className="w-full text-right px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-3"
                >
                  <Package className="w-5 h-5 text-primary" />
                  <span>سفارش‌ها</span>
                </button>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-border" />

              {/* Contact Info */}
              <div className="bg-muted p-4 rounded-lg space-y-2 text-sm text-right">
                <p className="text-foreground">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
                <p className="text-foreground">ایمیل: info@kharazi.ir</p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
