import { useState } from 'react';
import { DollarSign, ShoppingBag, Package, TrendingDown, Eye } from 'lucide-react';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { AdminTopBar } from '../../components/admin/AdminTopBar';
import { StatCard } from '../../components/admin/StatCard';
import { ProductsManagement } from './ProductsManagement';
import { CategoriesManagement } from './CategoriesManagement';
import { OrdersManagement } from './OrdersManagement';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    {
      title: 'فروش کل',
      value: '۱۲۵,۴۵۰,۰۰۰ تومان',
      icon: DollarSign,
      trend: '۱۲٪ نسبت به ماه قبل',
      trendUp: true,
    },
    {
      title: 'تعداد سفارشات',
      value: '۳۴۸',
      icon: ShoppingBag,
      trend: '۸٪ نسبت به ماه قبل',
      trendUp: true,
    },
    {
      title: 'محصولات فروخته شده',
      value: '۱,۲۳۴',
      icon: Package,
      trend: '۱۵٪ نسبت به ماه قبل',
      trendUp: true,
    },
    {
      title: 'محصولات کم‌فروش',
      value: '۲۴',
      icon: TrendingDown,
      trend: '۵٪ کاهش',
      trendUp: false,
    },
  ];

  const recentOrders = [
    {
      id: '۱۰۲۳۴۵',
      customer: 'علی احمدی',
      amount: '۲,۴۵۰,۰۰۰',
      status: 'در حال پردازش',
      date: '۱۴۰۳/۰۹/۱۳',
    },
    {
      id: '۱۰۲۳۴۴',
      customer: 'زهرا محمدی',
      amount: '۸۵۰,۰۰۰',
      status: 'تحویل شده',
      date: '۱۴۰۳/۰۹/۱۲',
    },
    {
      id: '۱۰۲۳۴۳',
      customer: 'رضا کریمی',
      amount: '۱,۲۵۰,۰۰۰',
      status: 'در حال ارسال',
      date: '۱۴۰۳/۰۹/۱۲',
    },
    {
      id: '۱۰۲۳۴۲',
      customer: 'فاطمه رضایی',
      amount: '۳۵۰,۰۰۰',
      status: 'تحویل شده',
      date: '۱۴۰۳/۰۹/۱۱',
    },
  ];

  const topProducts = [
    { name: 'ست سوزن و نخ ۵۰ عددی حرفه‌ای', sales: '۳۲۴', revenue: '۴۰,۵۰۰,۰۰۰' },
    { name: 'قیچی خیاطی ۲۵ سانتی استیل', sales: '۲۱۵', revenue: '۳۹,۷۷۵,۰۰۰' },
    { name: 'نخ DMC رنگی ۱۰۰ عددی', sales: '۱۸۹', revenue: '۸۵,۰۵۰,۰۰۰' },
    { name: 'ماشین دوخت صنعتی ژانومه', sales: '۴۵', revenue: '۸۳۲,۵۰۰,۰۰۰' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تحویل شده':
        return 'bg-green-100 text-green-700';
      case 'در حال پردازش':
        return 'bg-yellow-100 text-yellow-700';
      case 'در حال ارسال':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Render different admin views based on active menu
  if (activeMenu === 'products') {
    return (
      <div className="flex min-h-screen bg-background" dir="rtl">
        <AdminSidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopBar 
            onNavigate={onNavigate}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <ProductsManagement />
        </div>
      </div>
    );
  }

  if (activeMenu === 'categories') {
    return (
      <div className="flex min-h-screen bg-background" dir="rtl">
        <AdminSidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopBar 
            onNavigate={onNavigate}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <CategoriesManagement />
        </div>
      </div>
    );
  }

  if (activeMenu === 'orders') {
    return (
      <div className="flex min-h-screen bg-background" dir="rtl">
        <AdminSidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopBar 
            onNavigate={onNavigate}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <OrdersManagement />
        </div>
      </div>
    );
  }

  if (activeMenu === 'sales') {
    return (
      <div className="flex min-h-screen bg-background" dir="rtl">
        <AdminSidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopBar 
            onNavigate={onNavigate}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="mb-6 md:mb-8 text-right">
              <h1 className="text-2xl md:text-3xl text-foreground mb-2">گزارش فروش</h1>
              <p className="text-sm md:text-base text-muted-foreground">گزارشات و آمار فروش</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-4 md:p-6">
              <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">گزارش فروش (در حال توسعه)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (activeMenu === 'settings') {
    return (
      <div className="flex min-h-screen bg-background" dir="rtl">
        <AdminSidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminTopBar 
            onNavigate={onNavigate}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="mb-6 md:mb-8 text-right">
              <h1 className="text-2xl md:text-3xl text-foreground mb-2">تنظیمات</h1>
              <p className="text-sm md:text-base text-muted-foreground">تنظیمات سیستم و فروشگاه</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-4 md:p-6">
              <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">تنظیمات (در حال توسعه)</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Default: Dashboard view
  return (
    <div className="flex min-h-screen bg-background" dir="rtl">
      {/* Sidebar - RIGHT */}
      <AdminSidebar 
        activeMenu={activeMenu} 
        onMenuChange={setActiveMenu} 
        onNavigate={onNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Main Content - LEFT */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopBar 
          onNavigate={onNavigate}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6 md:mb-8 text-right">
            <h1 className="text-2xl md:text-3xl text-foreground mb-2">داشبورد</h1>
            <p className="text-sm md:text-base text-muted-foreground">آمار و گزارشات فروشگاه</p>
          </div>

          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts Section - Responsive */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Sales Chart Area */}
            <div className="bg-white border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl text-foreground text-right mb-4 md:mb-6">روند فروش</h3>
              <div className="h-48 md:h-64 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-sm md:text-base text-muted-foreground">نمودار فروش (مثال)</p>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl text-foreground text-right mb-4 md:mb-6">
                پرفروش‌ترین محصولات
              </h3>
              <div className="space-y-3 md:space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="text-left">
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {product.revenue} تومان
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {product.sales} فروش
                      </div>
                    </div>
                    <div className="text-right flex-1 mr-4">
                      <div className="text-xs md:text-sm text-foreground line-clamp-2">{product.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders - Responsive Table/Cards */}
          <div className="bg-white border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl text-foreground text-right mb-4 md:mb-6">
              سفارشات اخیر
            </h3>
            
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      عملیات
                    </th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      وضعیت
                    </th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      مبلغ (تومان)
                    </th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      تاریخ
                    </th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      مشتری
                    </th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                      شماره سفارش
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">مشاهده</span>
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-foreground text-right">
                        {order.amount}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                        {order.date}
                      </td>
                      <td className="py-3 px-4 text-sm text-foreground text-right">
                        {order.customer}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                        #{order.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      #{order.id}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-foreground mb-1">{order.customer}</div>
                    <div className="text-xs text-muted-foreground">{order.date}</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors px-3 py-2 rounded-lg hover:bg-white">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">مشاهده</span>
                    </button>
                    <div className="text-foreground">
                      {order.amount} تومان
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
