import { WifiOff, RefreshCw } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function NetworkErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          {/* Network Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-orange-100 flex items-center justify-center">
              <WifiOff className="w-16 h-16 text-orange-600" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl text-foreground mb-4">خطا در اتصال</h1>
          <p className="text-lg text-muted-foreground mb-8">
            لطفاً اتصال اینترنت خود را بررسی کنید
          </p>

          {/* Troubleshooting Steps */}
          <div className="bg-muted rounded-lg p-6 mb-8 text-right">
            <h3 className="text-foreground mb-4">راهکارهای پیشنهادی:</h3>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li className="flex items-start gap-3 justify-end">
                <span>بررسی کنید که به اینترنت متصل هستید</span>
                <span className="text-primary flex-shrink-0">۱.</span>
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span>مودم یا روتر خود را مجدداً راه‌اندازی کنید</span>
                <span className="text-primary flex-shrink-0">۲.</span>
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span>از VPN یا پروکسی استفاده می‌کنید؟ آن را غیرفعال کنید</span>
                <span className="text-primary flex-shrink-0">۳.</span>
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span>تنظیمات فایروال یا آنتی‌ویروس را بررسی کنید</span>
                <span className="text-primary flex-shrink-0">۴.</span>
              </li>
            </ul>
          </div>

          {/* Retry Button */}
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mx-auto"
          >
            <RefreshCw className="w-5 h-5" />
            <span>تلاش مجدد</span>
          </button>

          {/* Status Indicator */}
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-destructive animate-pulse"></span>
            <span>در حال بررسی اتصال...</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
