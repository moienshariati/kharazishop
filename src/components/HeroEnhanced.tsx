import { useEffect, useState } from 'react';
import { ArrowLeft, Scissors, PackageOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroEnhancedProps {
  onNavigate: (page: string) => void;
}

export function HeroEnhanced({ onNavigate }: HeroEnhancedProps) {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'جدیدترین محصولات',
      headline: 'فروشگاه اینترنتی خرازی',
      subtitle: 'تامین کننده ابزار و لوازم حرفه‌ای برای خیاطی، دوخت و کارهای هنری',
      description: 'با بیش از ۲۰ سال سابقه در ارائه بهترین محصولات خرازی و لوازم دوخت',
      ctaText: 'مشاهده محصولات',
      ctaAction: 'category',
      image: 'https://images.unsplash.com/photo-1678978334864-08a83604276e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwY2xvc2V8ZW58MXx8fHwxNzY0NzU5OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'ماشین دوخت و لوازم خیاطی',
    },
    {
      id: 2,
      badge: 'رنگارنگ و متنوع',
      headline: 'نخ‌های حرفه‌ای',
      subtitle: 'بهترین نخ‌های دوخت با کیفیت عالی برای پروژه‌های خلاقانه شما',
      description: 'طیف گسترده‌ای از نخ‌های رنگی با کیفیت بالا',
      ctaText: 'خرید نخ',
      ctaAction: 'category',
      image: 'https://images.unsplash.com/photo-1560880857-2b1c0603f964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRocmVhZCUyMHNwb29sc3xlbnwxfHx8fDE3NjQ3NjI2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'نخ‌های رنگی',
    },
    {
      id: 3,
      badge: 'ابزار حرفه‌ای',
      headline: 'قیچی و ابزار برش',
      subtitle: 'قیچی‌های برش پارچه با تیغه‌های استیل و طراحی ارگونومیک',
      description: 'کیفیت برتر برای کارهای دقیق و حرفه‌ای',
      ctaText: 'مشاهده ابزار',
      ctaAction: 'category',
      image: 'https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBjdXR0aW5nJTIwc2Npc3NvcnN8ZW58MXx8fHwxNzY0NzYyNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'قیچی و ابزار برش',
    },
    {
      id: 4,
      badge: 'پیشنهاد ویژه',
      headline: 'دکمه‌های تزئینی',
      subtitle: 'مجموعه کامل دکمه‌های زیبا و متنوع برای پروژه‌های خیاطی',
      description: 'با تخفیف ویژه تا ۳۰ درصد',
      ctaText: 'خرید دکمه',
      ctaAction: 'category',
      image: 'https://images.unsplash.com/photo-1613555793439-c50b6274176a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBidXR0b25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0NzYyNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'دکمه‌های تزئینی',
    },
    {
      id: 5,
      badge: 'تنوع بی‌نظیر',
      headline: 'پارچه‌های باکیفیت',
      subtitle: 'انواع پارچه با رنگ‌ها و بافت‌های متنوع برای هر نوع پروژه',
      description: 'بهترین کیفیت با قیمت مناسب',
      ctaText: 'مشاهده دسته‌بندی‌ها',
      ctaAction: 'category',
      image: 'https://images.unsplash.com/photo-1580250569064-b2ac463aa820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xscyUyMHN0YWNrZWR8ZW58MXx8fHwxNzY0NzYyNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'پارچه‌های رنگارنگ',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate parallax offsets
  const layer1 = scrollY * 0.1; // Slowest background
  const layer2 = scrollY * 0.15;
  const layer3 = scrollY * 0.25;
  const layer4 = scrollY * 0.35;
  const layer5 = scrollY * 0.5; // Fastest foreground

  return (
    <section className="relative bg-gradient-to-bl from-primary/5 via-background to-secondary/3 overflow-hidden min-h-[95vh] flex items-center">
      {/* Parallax Background Layers - Cinematic Depth */}
      
      {/* Layer 1: Deepest - Large soft gradients with glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${layer1}px)` }}
      >
        <div className="absolute top-[8%] right-[3%] w-[550px] h-[550px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-[12%] left-[8%] w-[480px] h-[480px] bg-gradient-radial from-accent/6 to-transparent rounded-full blur-[110px]" />
        <div className="absolute top-[45%] left-[40%] w-[380px] h-[380px] bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-[90px]" />
      </div>

      {/* Layer 2: Mid-depth - Geometric shapes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-12"
        style={{ transform: `translateY(${layer2}px)` }}
      >
        <div className="absolute top-[18%] right-[12%] w-40 h-40 border border-primary/20 rounded-2xl rotate-12" />
        <div className="absolute bottom-[28%] left-[18%] w-32 h-32 border border-accent/20 rounded-full" />
        <div className="absolute top-[55%] right-[38%] w-24 h-24 bg-gradient-to-br from-primary/8 to-accent/8 rounded-xl -rotate-6" />
        <div className="absolute bottom-[15%] right-[25%] w-28 h-28 border-2 border-dashed border-secondary/15 rounded-lg rotate-45" />
      </div>

      {/* Layer 3: Tool icons/hints - Sewing elements */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ transform: `translateY(${layer3}px)` }}
      >
        {/* Scissors hint */}
        <div className="absolute top-[22%] right-[6%]">
          <Scissors className="w-16 h-16 text-primary/30 rotate-45" strokeWidth={0.7} />
        </div>
        {/* Package hint */}
        <div className="absolute bottom-[32%] left-[10%]">
          <PackageOpen className="w-20 h-20 text-accent/30 -rotate-12" strokeWidth={0.7} />
        </div>
        {/* Abstract thread/stitch lines */}
        <svg
          className="absolute top-[38%] right-[22%] w-40 h-40 text-secondary/25"
          viewBox="0 0 100 100"
        >
          <path
            d="M 10,50 Q 30,20 50,50 T 90,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="5,5"
          />
          <path
            d="M 15,65 Q 35,85 55,65 T 95,65"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </svg>
        {/* Small needle icon */}
        <svg className="absolute bottom-[45%] right-[50%] w-10 h-10 text-primary/25 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
        </svg>
      </div>

      {/* Layer 4: Dot pattern and texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-6"
        style={{ transform: `translateY(${layer4}px)` }}
      >
        <div className="absolute top-[12%] right-[28%] grid grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
          ))}
        </div>
        <div className="absolute bottom-[22%] left-[32%] grid grid-cols-5 gap-3">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-accent/30 rounded-full" />
          ))}
        </div>
        <div className="absolute top-[50%] left-[15%] grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-secondary/30 rounded-full" />
          ))}
        </div>
      </div>

      {/* Layer 5: Floating small elements - Fastest movement */}
      <div
        className="absolute inset-0 pointer-events-none opacity-12"
        style={{ transform: `translateY(${layer5}px)` }}
      >
        <div className="absolute top-[15%] right-[42%] w-8 h-8 border-2 border-accent/40 rounded-full" />
        <div className="absolute top-[65%] right-[16%] w-7 h-7 bg-primary/25 rounded-md rotate-45" />
        <div className="absolute bottom-[38%] left-[22%] w-10 h-10 border-2 border-secondary/30 rounded-xl -rotate-12" />
        <div className="absolute top-[35%] left-[45%] w-5 h-5 bg-gradient-to-br from-accent/25 to-primary/25 rounded-full" />
        <div className="absolute bottom-[20%] right-[35%] w-12 h-12 border border-dashed border-primary/25 rounded-lg rotate-6" />
      </div>

      {/* Main Content - Full Width Slider */}
      <div className="w-full h-full relative z-10">
        <div className="relative w-full h-full min-h-[95vh] flex items-center">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/30"></div>
              </div>

              {/* Content Container */}
              <div className="container mx-auto px-6 py-20 md:py-32 relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Right Side (RTL) */}
                    <div className="text-right space-y-6 md:space-y-8 order-2 md:order-1">
                      <div className="inline-block px-5 py-2.5 bg-accent/20 text-white rounded-full text-sm backdrop-blur-md border border-accent/30">
                        {slide.badge}
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                        {slide.headline}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <p className="text-white/90 leading-relaxed drop-shadow-sm">
                        {slide.description}
                      </p>
                      <div className="flex gap-4 justify-end pt-4">
                        <button 
                          onClick={() => onNavigate(slide.ctaAction)}
                          className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
                        >
                          <ArrowLeft className="w-5 h-5" />
                          {slide.ctaText}
                        </button>
                        <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-lg hover:bg-white/20 transition-all hover:shadow-lg">
                          تماس با ما
                        </button>
                      </div>

                      {/* Stats - Only show on first slide */}
                      {index === 0 && (
                        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
                          <div className="text-center">
                            <div className="text-3xl text-accent drop-shadow-lg">+۲۰۰۰</div>
                            <div className="text-sm text-white/90 mt-1.5 drop-shadow-sm">محصول متنوع</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl text-accent drop-shadow-lg">+۵۰۰۰</div>
                            <div className="text-sm text-white/90 mt-1.5 drop-shadow-sm">مشتری راضی</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl text-accent drop-shadow-lg">۲۴/۷</div>
                            <div className="text-sm text-white/90 mt-1.5 drop-shadow-sm">پشتیبانی</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Empty space for image visibility - Left Side */}
                    <div className="order-1 md:order-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows - RTL positioned */}
          <button
            onClick={prevSlide}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 md:p-4 rounded-full border border-white/20 transition-all hover:scale-110 shadow-xl"
            aria-label="اسلاید قبلی"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 md:p-4 rounded-full border border-white/20 transition-all hover:scale-110 shadow-xl"
            aria-label="اسلاید بعدی"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </button>

          {/* Pagination Dots - Bottom Center */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-primary'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                } rounded-full backdrop-blur-sm shadow-lg`}
                aria-label={`برو به اسلاید ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
