import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-l from-primary/10 to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Side: Text Content */}
          <div className="text-right space-y-6 order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm">
              جدیدترین محصولات
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground">
              فروشگاه اینترنتی خرازی
            </h1>
            <p className="text-xl text-muted-foreground">
              تامین کننده ابزار و لوازم حرفه‌ای برای صنایع چرم، کفش‌دوزی و خیاطی
            </p>
            <p className="text-muted-foreground">
              با بیش از ۲۰ سال سابقه در ارائه بهترین محصولات صنعتی و ابزارآلات تخصصی، 
              ما افتخار همراهی با هزاران مشتری راضی را داشته‌ایم.
            </p>
            <div className="flex gap-4 justify-end">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                مشاهده محصولات
              </button>
              <button className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                تماس با ما
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl text-primary">+۲۰۰۰</div>
                <div className="text-sm text-muted-foreground mt-1">محصول متنوع</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary">+۵۰۰۰</div>
                <div className="text-sm text-muted-foreground mt-1">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary">۲۴/۷</div>
                <div className="text-sm text-muted-foreground mt-1">پشتیبانی</div>
              </div>
            </div>
          </div>

          {/* Left Side: Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ2OTc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="ابزار و لوازم خرازی"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
