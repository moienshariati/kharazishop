import { XCircle, RefreshCw, ShoppingCart, Home } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-destructive/10 flex items-center justify-center">
              <XCircle className="w-16 h-16 text-destructive" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl text-foreground mb-4">پرداخت ناموفق</h1>
          <p className="text-lg text-muted-foreground mb-8">
            متأسفانه پرداخت شما انجام نشد. لطفاً دوباره تلاش کنید.
          </p>

          {/* Order Details */}
          <div className="bg-muted rounded-lg p-6 mb-8 text-right">
            <div className="grid gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-muted-foreground">ناموفق</span>
                <span className="text-foreground">وضعیت تراکنش:</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-foreground">۱۰۲۳۴۵۶۷</span>
                <span className="text-foreground">شماره سفارش:</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent">۳,۲۰۰,۰۰۰ تومان</span>
                <span className="text-foreground">مبلغ:</span>
              </div>
            </div>
          </div>

          {/* Possible Reasons */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 text-right">
            <h3 className="text-foreground mb-3">دلایل احتمالی عدم موفقیت:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• موجودی کافی در حساب وجود ندارد</li>
              <li>• اطلاعات کارت به درستی وارد نشده است</li>
              <li>• مشکل در اتصال به درگاه پرداخت</li>
              <li>• زمان پرداخت به پایان رسیده است</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mb-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <RefreshCw className="w-5 h-5" />
              <span>تلاش مجدد برای پرداخت</span>
            </button>
            <a
              href="/cart"
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>بازگشت به سبد خرید</span>
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="/"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>بازگشت به صفحه اصلی</span>
            </a>
          </div>

          {/* Support Info */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-right">
            <h3 className="text-foreground mb-2">نیاز به کمک دارید؟</h3>
            <p className="text-sm text-muted-foreground">
              در صورت بروز مشکل، با پشتیبانی ما تماس بگیرید:
            </p>
            <p className="text-sm text-foreground mt-2">۰۲۱-۸۸۷۷۶۶۵۵</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
