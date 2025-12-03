import { ServerCrash, RefreshCw, Home } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function ServerErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          {/* Error Illustration */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="text-9xl text-muted/20 select-none">500</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-destructive/10 flex items-center justify-center">
                    <ServerCrash className="w-16 h-16 text-destructive" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl text-foreground mb-4">خطای سرور</h1>
          <p className="text-lg text-muted-foreground mb-8">
            متأسفانه مشکلی در سرور رخ داده است. لطفاً بعداً تلاش کنید.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              <span>تلاش مجدد</span>
            </button>
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>بازگشت به صفحه اصلی</span>
            </a>
          </div>

          {/* Status Info */}
          <div className="mt-12 p-6 bg-destructive/5 border border-destructive/20 rounded-lg text-right">
            <h3 className="text-foreground mb-3">کد خطا: 500</h3>
            <p className="text-sm text-muted-foreground mb-4">
              این مشکل از سمت سرور است و تیم فنی ما در حال بررسی آن هستند.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>در صورت ادامه مشکل:</p>
              <p className="mt-2">پشتیبانی: ۰۲۱-۸۸۷۷۶۶۵۵</p>
              <p>ایمیل: support@kharazi.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
