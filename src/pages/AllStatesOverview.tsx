import { useState } from 'react';
import {
  ShoppingCart,
  Package,
  FolderTree,
  ClipboardList,
  Search,
  FileQuestion,
  ServerCrash,
  XCircle,
  WifiOff,
  CheckCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type StateCategory = 'empty' | 'error' | 'success' | 'info';

export function AllStatesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<StateCategory | 'all'>('all');

  const states = [
    {
      category: 'empty' as StateCategory,
      icon: ShoppingCart,
      title: 'سبد خرید خالی',
      description: 'زمانی که کاربر هیچ محصولی در سبد خرید ندارد',
      color: 'bg-blue-100 text-blue-600',
      page: 'cart',
    },
    {
      category: 'empty' as StateCategory,
      icon: Package,
      title: 'بدون محصول',
      description: 'دسته‌بندی یا صفحه‌ای که محصولی ندارد',
      color: 'bg-blue-100 text-blue-600',
      page: 'category',
    },
    {
      category: 'empty' as StateCategory,
      icon: FolderTree,
      title: 'بدون دسته‌بندی',
      description: 'پنل مدیریت زمانی که دسته‌بندی تعریف نشده',
      color: 'bg-blue-100 text-blue-600',
      page: 'admin-categories',
    },
    {
      category: 'empty' as StateCategory,
      icon: ClipboardList,
      title: 'بدون سفارش',
      description: 'داشبورد مدیریت بدون سفارش ثبت شده',
      color: 'bg-blue-100 text-blue-600',
      page: 'admin-orders',
    },
    {
      category: 'empty' as StateCategory,
      icon: Search,
      title: 'نتیجه جستجو یافت نشد',
      description: 'جستجویی که نتیجه‌ای نداشته است',
      color: 'bg-blue-100 text-blue-600',
      page: 'search-results',
    },
    {
      category: 'error' as StateCategory,
      icon: FileQuestion,
      title: 'خطای ۴۰۴',
      description: 'صفحه مورد نظر یافت نشد',
      color: 'bg-red-100 text-red-600',
      page: 'error-404',
    },
    {
      category: 'error' as StateCategory,
      icon: ServerCrash,
      title: 'خطای ۵۰۰',
      description: 'مشکل در سرور',
      color: 'bg-orange-100 text-orange-600',
      page: 'error-500',
    },
    {
      category: 'error' as StateCategory,
      icon: XCircle,
      title: 'پرداخت ناموفق',
      description: 'تراکنش پرداخت انجام نشد',
      color: 'bg-red-100 text-red-600',
      page: 'error-payment',
    },
    {
      category: 'error' as StateCategory,
      icon: WifiOff,
      title: 'خطای شبکه',
      description: 'مشکل در اتصال به اینترنت',
      color: 'bg-orange-100 text-orange-600',
      page: 'error-network',
    },
    {
      category: 'success' as StateCategory,
      icon: CheckCircle,
      title: 'سفارش موفق',
      description: 'تأیید ثبت سفارش',
      color: 'bg-green-100 text-green-600',
      page: 'order-confirmation',
    },
  ];

  const filteredStates =
    selectedCategory === 'all'
      ? states
      : states.filter((state) => state.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'همه', count: states.length },
    {
      id: 'empty',
      label: 'حالت‌های خالی',
      count: states.filter((s) => s.category === 'empty').length,
    },
    {
      id: 'error',
      label: 'صفحات خطا',
      count: states.filter((s) => s.category === 'error').length,
    },
    {
      id: 'success',
      label: 'موفقیت',
      count: states.filter((s) => s.category === 'success').length,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl text-foreground mb-4">
              مرور کلیه حالت‌های سیستم
            </h1>
            <p className="text-lg text-muted-foreground">
              نمایش تمامی حالت‌های خالی، خطا، و موفقیت در یک نگاه
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(category.id as StateCategory | 'all')
                }
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-white hover:border-primary/50'
                }`}
              >
                <div className="text-3xl text-primary mb-2">{category.count}</div>
                <div className="text-foreground">{category.label}</div>
              </button>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-right">
            <div className="flex items-start gap-3 justify-end">
              <div>
                <h3 className="text-foreground mb-2">راهنما:</h3>
                <p className="text-sm text-muted-foreground">
                  روی هر کارت کلیک کنید تا به صفحه مربوطه بروید و حالت را مشاهده کنید
                </p>
              </div>
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            </div>
          </div>

          {/* States Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStates.map((state, index) => {
              const Icon = state.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => alert(`رفتن به صفحه: ${state.page}`)}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${state.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg text-foreground mb-2">{state.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {state.description}
                    </p>

                    {/* Category Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        state.category === 'empty'
                          ? 'bg-blue-100 text-blue-700'
                          : state.category === 'error'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {state.category === 'empty'
                        ? 'حالت خالی'
                        : state.category === 'error'
                        ? 'خطا'
                        : 'موفقیت'}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm text-primary">کلیک برای مشاهده →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Design Guidelines */}
          <div className="mt-12 bg-muted rounded-lg p-8 text-right">
            <h3 className="text-2xl text-foreground mb-6">اصول طراحی:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-foreground mb-3">حالت‌های خالی (Empty States):</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• آیکون واضح و مرتبط</li>
                  <li>• پیام توضیحی مختصر و مفید</li>
                  <li>• دکمه عمل (CTA) برای اقدام بعدی</li>
                  <li>• طراحی مثبت و تشویق‌کننده</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3">صفحات خطا (Error Pages):</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• کد خطا به همراه توضیح</li>
                  <li>• راهکارهای پیشنهادی برای کاربر</li>
                  <li>• دکمه بازگشت یا تلاش مجدد</li>
                  <li>• اطلاعات تماس پشتیبانی</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3">رنگ‌بندی:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• آبی: حالت‌های خالی و اطلاعات</li>
                  <li>• قرمز: خطاهای حیاتی</li>
                  <li>• نارنجی: هشدارها</li>
                  <li>• سبز: موفقیت و تأیید</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground mb-3">محتوا:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• ۱۰۰٪ فارسی و RTL</li>
                  <li>• لحن دوستانه و حرفه‌ای</li>
                  <li>• راهنمایی عملی</li>
                  <li>• بدون اصطلاحات فنی</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
