import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface OrderConfirmationPageProps {
  onNavigate: (page: string) => void;
}

export function OrderConfirmationPage({ onNavigate }: OrderConfirmationPageProps) {
  const orderNumber = '۱۰۲۳۴۵۶۷';
  const orderDate = '۱۴۰۳/۰۹/۱۳';
  const estimatedDelivery = '۱۴۰۳/۰۹/۱۸';

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={0} />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white border border-border rounded-lg p-8 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl text-foreground mb-3">
              سفارش شما با موفقیت ثبت شد
            </h1>
            <p className="text-muted-foreground mb-8">
              از خرید شما متشکریم. سفارش شما در حال پردازش است.
            </p>

            {/* Order Details */}
            <div className="bg-muted rounded-lg p-6 mb-8 text-right">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <span className="text-foreground text-lg">{orderNumber}</span>
                <span className="text-muted-foreground">شماره سفارش:</span>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <span className="text-foreground">{orderDate}</span>
                <span className="text-muted-foreground">تاریخ ثبت سفارش:</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">{estimatedDelivery}</span>
                <span className="text-muted-foreground">تاریخ تحویل تقریبی:</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8">
              <h3 className="text-lg text-foreground text-right mb-4">محصولات سفارش</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-foreground">۲,۴۵۰,۰۰۰ تومان</span>
                  <span className="text-muted-foreground text-sm">
                    ست کامل ابزار خرازی حرفه‌ای × ۱
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-foreground">۷۰۰,۰۰۰ تومان</span>
                  <span className="text-muted-foreground text-sm">
                    چاقوی برش چرم استیل ژاپنی × ۲
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                <span className="text-xl text-accent">۳,۲۰۰,۰۰۰ تومان</span>
                <span className="text-foreground">مبلغ کل:</span>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-right">
              <div className="flex items-start gap-3 justify-end">
                <div>
                  <p className="text-sm text-blue-900">
                    پیامک تأییدیه سفارش و همچنین اطلاعات رهگیری مرسوله به شماره موبایل شما ارسال خواهد شد.
                  </p>
                </div>
                <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="flex-1 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>بازگشت به فروشگاه</span>
              </button>
              <button
                onClick={() => onNavigate('account')}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                مشاهده سفارش‌های من
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
