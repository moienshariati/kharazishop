import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ShoppingBag } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';

interface UserAccountPageProps {
  onNavigate: (page: string) => void;
}

export function UserAccountPage({ onNavigate }: UserAccountPageProps) {
  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'addresses' | 'profile'>('orders');

  const orders = [
    {
      id: '#۱۲۳۴۵',
      date: '۱۴۰۲/۰۹/۱۵',
      status: 'تحویل داده شده',
      statusColor: 'text-green-600',
      total: '۲,۴۵۰,۰۰۰ تومان',
      items: 3,
    },
    {
      id: '#۱۲۳۴۴',
      date: '۱۴۰۲/۰۹/۱۰',
      status: 'در حال ارسال',
      statusColor: 'text-blue-600',
      total: '۱,۸۵۰,۰۰۰ تومان',
      items: 2,
    },
    {
      id: '#۱۲۳۴۳',
      date: '۱۴۰۲/۰۸/۲۸',
      status: 'تحویل داده شده',
      statusColor: 'text-green-600',
      total: '۳,۲۰۰,۰۰۰ تومان',
      items: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={3} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar - RIGHT */}
          <div className="md:col-span-1 order-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              {/* User Info */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-foreground mb-1">علی احمدی</h3>
                <p className="text-sm text-muted-foreground">ali.ahmadi@example.com</p>
              </div>

              {/* Menu Items */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors justify-end ${
                    activeTab === 'orders'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>سفارشات من</span>
                  <Package className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors justify-end ${
                    activeTab === 'favorites'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>علاقه‌مندی‌ها</span>
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors justify-end ${
                    activeTab === 'addresses'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>آدرس‌های من</span>
                  <MapPin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors justify-end ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>تنظیمات حساب</span>
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right text-red-600 hover:bg-red-50 transition-colors justify-end"
                >
                  <span>خروج از حساب</span>
                  <LogOut className="w-5 h-5" />
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content - LEFT */}
          <div className="md:col-span-3 order-2">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl text-foreground">سفارشات من</h2>
                    <button 
                      onClick={() => onNavigate('category')}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      خرید جدید
                    </button>
                  </div>

                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <ShoppingBag className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-foreground">سفارش {order.id}</p>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                          </div>
                          <div className="text-left">
                            <p className={`mb-1 ${order.statusColor}`}>{order.status}</p>
                            <p className="text-foreground">{order.total}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <p className="text-sm text-muted-foreground">{order.items} محصول</p>
                          <button 
                            onClick={() => onNavigate('order-confirmation')}
                            className="text-primary hover:text-primary/80 text-sm"
                          >
                            مشاهده جزئیات ←
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-lg border border-border p-6">
                <h2 className="text-2xl text-foreground mb-6">علاقه‌مندی‌ها</h2>
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    شما هنوز محصولی را به لیست علاقه‌مندی‌های خود اضافه نکرده‌اید
                  </p>
                  <button
                    onClick={() => onNavigate('category')}
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    مشاهده محصولات
                  </button>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-foreground">آدرس‌های من</h2>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    افزودن آدرس جدید
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="text-foreground mb-2">آدرس منزل</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            تهران، خیابان ولیعصر، کوچه ۱۵، پلاک ۲۳، طبقه ۳
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            کد پستی: ۱۲۳۴۵۶۷۸۹۰
                          </p>
                        </div>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        پیش‌فرض
                      </span>
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border">
                      <button className="text-sm text-primary hover:text-primary/80">
                        ویرایش
                      </button>
                      <span className="text-muted-foreground">|</span>
                      <button className="text-sm text-red-600 hover:text-red-700">
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg border border-border p-6">
                <h2 className="text-2xl text-foreground mb-6">تنظیمات حساب کاربری</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground mb-2">نام</label>
                      <input
                        type="text"
                        defaultValue="علی"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground mb-2">نام خانوادگی</label>
                      <input
                        type="text"
                        defaultValue="احمدی"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">ایمیل</label>
                    <input
                      type="email"
                      defaultValue="ali.ahmadi@example.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground mb-2">شماره تلفن</label>
                    <input
                      type="tel"
                      defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg text-foreground mb-4">تغییر رمز عبور</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-foreground mb-2">رمز عبور فعلی</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground mb-2">رمز عبور جدید</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground mb-2">تکرار رمز عبور جدید</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      ذخیره تغییرات
                    </button>
                    <button 
                      onClick={() => onNavigate('home')}
                      className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      انصراف
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
