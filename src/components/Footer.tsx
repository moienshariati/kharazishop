import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-secondary text-white" dir="rtl">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-end text-right">
            <div className="flex flex-row-reverse items-center gap-3 mb-4 w-full justify-end">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">خ</span>
              </div>
              <div className="text-right">
                <h3 className="text-xl">خرازی</h3>
                <p className="text-sm text-white/70">فروشگاه ابزار و لوازم</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4 text-right w-full">
              تامین کننده معتبر ابزار و لوازم حرفه‌ای برای صنایع چرم، کفش‌دوزی و خیاطی با بیش از ۲۰ سال سابقه.
            </p>
            <div className="flex gap-3 w-full justify-center">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-end text-right w-full">
            <h4 className="text-lg mb-4 w-full text-right">دسترسی سریع</h4>
            <ul className="space-y-2 flex flex-col items-end w-full">
              <li className="w-full text-right">
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/80 hover:text-white transition-colors text-sm w-full text-right"
                >
                  صفحه اصلی
                </button>
              </li>
              <li className="w-full text-right">
                <button 
                  onClick={() => onNavigate('category')}
                  className="text-white/80 hover:text-white transition-colors text-sm w-full text-right"
                >
                  محصولات
                </button>
              </li>
              <li className="w-full text-right">
                <button 
                  onClick={() => onNavigate('category')}
                  className="text-white/80 hover:text-white transition-colors text-sm w-full text-right"
                >
                  دسته‌بندی‌ها
                </button>
              </li>
              <li className="w-full text-right">
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-white/80 hover:text-white transition-colors text-sm w-full text-right"
                >
                  درباره ما
                </button>
              </li>
              <li className="w-full text-right">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-white/80 hover:text-white transition-colors text-sm w-full text-right"
                >
                  تماس با ما
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-end text-right w-full">
            <h4 className="text-lg mb-4 w-full text-right">خدمات مشتریان</h4>
            <ul className="space-y-2 flex flex-col items-end w-full">
              <li className="w-full text-right">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm w-full inline-block text-right">
                  پیگیری سفارش
                </a>
              </li>
              <li className="w-full text-right">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm w-full inline-block text-right">
                  شیوه‌های پرداخت
                </a>
              </li>
              <li className="w-full text-right">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm w-full inline-block text-right">
                  ضمانت و گارانتی
                </a>
              </li>
              <li className="w-full text-right">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm w-full inline-block text-right">
                  شرایط و قوانین
                </a>
              </li>
              <li className="w-full text-right">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm w-full inline-block text-right">
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-end text-right w-full">
            <h4 className="text-lg mb-4 w-full text-right">تماس با ما</h4>
            <ul className="space-y-3 flex flex-col items-end w-full">
              <li className="flex flex-row-reverse items-start gap-3 text-sm text-white/80 w-full justify-end">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-right">تهران، خیابان جمهوری، پلاک ۱۲۳</span>
              </li>
              <li className="flex flex-row-reverse items-center gap-3 text-sm text-white/80 w-full justify-end">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">021-12345678</span>
              </li>
              <li className="flex flex-row-reverse items-center gap-3 text-sm text-white/80 w-full justify-end">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@kharazi.ir</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-center gap-4 text-sm text-white/70">
            <div className="flex gap-6 w-full md:w-auto justify-center md:justify-start">
              <a href="#" className="hover:text-white transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-white transition-colors">
                شرایط استفاده
              </a>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <p>© ۱۴۰۳ فروشگاه خرازی. تمامی حقوق محفوظ است.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
