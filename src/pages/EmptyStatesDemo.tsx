import { useState } from 'react';
import {
  ShoppingCart,
  Package,
  FolderTree,
  Search,
  ClipboardList,
  Inbox,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { EmptyState } from '../components/EmptyState';

type EmptyStateType =
  | 'empty-cart'
  | 'no-products'
  | 'no-categories'
  | 'no-orders'
  | 'no-search-results'
  | 'no-wishlist';

export function EmptyStatesDemo() {
  const [activeState, setActiveState] = useState<EmptyStateType>('empty-cart');

  const emptyStates = {
    'empty-cart': {
      icon: ShoppingCart,
      title: 'سبد خرید شما خالی است',
      message: 'محصولی به سبد خرید شما اضافه نشده است',
      actionLabel: 'مشاهده محصولات',
      actionVariant: 'primary' as const,
    },
    'no-products': {
      icon: Package,
      title: 'محصولی موجود نیست',
      message: 'در حال حاضر محصولی در این دسته‌بندی موجود نیست',
      actionLabel: 'بازگشت به صفحه اصلی',
      actionVariant: 'primary' as const,
    },
    'no-categories': {
      icon: FolderTree,
      title: 'هنوز دسته‌بندی اضافه نشده',
      message: 'برای شروع، دسته‌بندی جدید اضافه کنید',
      actionLabel: 'افزودن دسته‌بندی جدید',
      actionVariant: 'primary' as const,
    },
    'no-orders': {
      icon: ClipboardList,
      title: 'سفارشی ثبت نشده',
      message: 'هنوز سفارشی از طریق سایت ثبت نشده است',
    },
    'no-search-results': {
      icon: Search,
      title: 'محصولی یافت نشد',
      message: 'متأسفانه محصولی با این جستجو پیدا نشد. لطفاً دوباره امتحان کنید.',
      actionLabel: 'بازگشت به صفحه اصلی',
      actionVariant: 'outline' as const,
    },
    'no-wishlist': {
      icon: Inbox,
      title: 'لیست علاقه‌مندی‌های شما خالی است',
      message: 'محصولی به لیست علاقه‌مندی‌های شما اضافه نشده است',
      actionLabel: 'جستجوی محصولات',
      actionVariant: 'primary' as const,
    },
  };

  const categories = [
    { id: 'empty-cart', label: 'سبد خرید خالی' },
    { id: 'no-products', label: 'بدون محصول' },
    { id: 'no-categories', label: 'بدون دسته‌بندی' },
    { id: 'no-orders', label: 'بدون سفارش' },
    { id: 'no-search-results', label: 'نتیجه جستجو' },
    { id: 'no-wishlist', label: 'لیست علاقه‌مندی' },
  ];

  const currentState = emptyStates[activeState];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl text-foreground mb-4">حالت‌های خالی (دمو)</h1>
            <p className="text-lg text-muted-foreground">
              نمایش حالت‌های مختلف خالی در سیستم
            </p>
          </div>

          {/* State Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveState(category.id as EmptyStateType)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeState === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white border-2 border-border text-foreground hover:bg-muted'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Empty State Display */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-border rounded-lg p-8">
              <EmptyState
                icon={currentState.icon}
                title={currentState.title}
                message={currentState.message}
                actionLabel={currentState.actionLabel}
                actionVariant={currentState.actionVariant}
                onAction={() => alert('عملیات انجام شد!')}
              />
            </div>
          </div>

          {/* Usage Examples */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-muted rounded-lg p-8 text-right">
              <h3 className="text-xl text-foreground mb-4">کاربردها:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-foreground mb-2">سبد خرید خالی:</h4>
                  <p className="text-sm text-muted-foreground">
                    زمانی که کاربر هیچ محصولی در سبد خرید ندارد
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">بدون محصول:</h4>
                  <p className="text-sm text-muted-foreground">
                    دسته‌بندی یا صفحه‌ای که محصولی ندارد
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">بدون دسته‌بندی:</h4>
                  <p className="text-sm text-muted-foreground">
                    پنل مدیریت زمانی که دسته‌بندی تعریف نشده
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">بدون سفارش:</h4>
                  <p className="text-sm text-muted-foreground">
                    داشبورد مدیریت بدون سفارش ثبت شده
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">نتیجه جستجو:</h4>
                  <p className="text-sm text-muted-foreground">
                    جستجویی که نتیجه‌ای نداشته است
                  </p>
                </div>
                <div>
                  <h4 className="text-foreground mb-2">لیست علاقه‌مندی:</h4>
                  <p className="text-sm text-muted-foreground">
                    زمانی که کاربر محصولی را علاقه‌مند نکرده
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
