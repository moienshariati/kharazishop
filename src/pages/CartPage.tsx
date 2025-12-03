import { useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { CartItem } from '../components/CartItem';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سبد خرید', href: '/cart' },
  ];

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'ست کامل ابزار خرازی حرفه‌ای',
      price: '۲,۴۵۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG9vbHMlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjQ3NTU5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quantity: 1,
    },
    {
      id: 2,
      name: 'چاقوی برش چرم استیل ژاپنی',
      price: '۳۵۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdG9vbHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quantity: 2,
    },
    {
      id: 3,
      name: 'انبردست حرفه‌ای چرم‌کاری',
      price: '۱,۲۵۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1753947686751-c77068e043ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[,،]/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const shippingCost = 50000;
  const total = subtotal + shippingCost;

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={cartItems.length} />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8" dir="rtl">
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 justify-end">
                <span>سبد خرید</span>
                <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                {cartItems.length} محصول در سبد خرید شما
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors justify-end md:justify-start"
            >
              <span>ادامه خرید</span>
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-8">
            {/* Cart Items - RIGHT side in RTL */}
            <div className="order-2 lg:order-2 space-y-3 md:space-y-4">
              {/* Table Headers - Desktop Only */}
              <div className="hidden md:grid grid-cols-[auto_auto_auto_1fr_auto] gap-4 px-4 py-3 bg-muted rounded-lg" dir="rtl">
                <div className="text-sm text-muted-foreground text-right">محصول</div>
                <div className="text-sm text-muted-foreground text-right">قیمت</div>
                <div className="text-sm text-muted-foreground text-center">تعداد</div>
                <div className="text-sm text-muted-foreground text-right">جمع</div>
                <div className="text-sm text-muted-foreground text-right">عملیات</div>
              </div>

              {/* Cart Items */}
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))
              ) : (
                <div className="text-center py-12 md:py-16 bg-white rounded-lg border border-border" dir="rtl">
                  <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">سبد خرید شما خالی است</p>
                  <p className="text-sm text-muted-foreground mb-6">محصولی به سبد خرید شما اضافه نشده است</p>
                  <button
                    onClick={() => onNavigate('home')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <span>مشاهده محصولات</span>
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary - LEFT side in RTL */}
            <div className="order-1 lg:order-1">
              <div className="bg-white border border-border rounded-lg p-4 md:p-6 lg:sticky lg:top-24" dir="rtl">
                <h3 className="text-lg md:text-xl text-foreground text-right mb-4 md:mb-6">
                  خلاصه سفارش
                </h3>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex items-center justify-between py-2 md:py-3 border-b border-border">
                    <span className="text-foreground text-sm md:text-base">
                      {subtotal.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">جمع کل:</span>
                  </div>

                  <div className="flex items-center justify-between py-2 md:py-3 border-b border-border">
                    <span className="text-foreground text-sm md:text-base">
                      {shippingCost.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">هزینه ارسال:</span>
                  </div>

                  <div className="flex items-center justify-between py-2 md:py-3">
                    <span className="text-lg md:text-xl text-accent">
                      {total.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-base md:text-lg text-foreground">مبلغ قابل پرداخت:</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('checkout')}
                  disabled={cartItems.length === 0}
                  className="w-full px-6 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  تکمیل سفارش
                </button>

                <div className="mt-3 md:mt-4 p-3 md:p-4 bg-muted rounded-lg text-right">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    ✓ ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
