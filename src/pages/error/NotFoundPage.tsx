import { FileQuestion, Home } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="text-9xl text-muted/20 select-none">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                    <FileQuestion className="w-16 h-16 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl text-foreground mb-4">صفحه مورد نظر یافت نشد</h1>
          <p className="text-lg text-muted-foreground mb-8">
            آدرس وارد شده اشتباه است یا این صفحه وجود ندارد
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>بازگشت به صفحه اصلی</span>
            </a>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              بازگشت به صفحه قبل
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-right">
            <h3 className="text-foreground mb-2">راهنمایی:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• بررسی کنید که آدرس را به درستی وارد کرده‌اید</li>
              <li>• از منوی اصلی برای دسترسی به صفحات استفاده کنید</li>
              <li>• در صورت نیاز با پشتیبانی تماس بگیرید</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
