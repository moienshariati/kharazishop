import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { Shield, Truck, DollarSign, Headphones, Award, Users, Target } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'درباره ما', href: '/about' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'کیفیت بالا',
      description: 'تمامی محصولات ما از برندهای معتبر و با کیفیت برتر تهیه می‌شوند تا بهترین تجربه خرید را برای شما فراهم کنیم.',
    },
    {
      icon: Truck,
      title: 'ارسال سریع',
      description: 'ارسال سریع و ایمن به سراسر کشور با بسته‌بندی استاندارد و ضمانت تحویل به موقع سفارشات شما.',
    },
    {
      icon: DollarSign,
      title: 'قیمت مناسب',
      description: 'بهترین قیمت‌ها در بازار با تخفیف‌های ویژه و پیشنهادات منحصر به فرد برای مشتریان وفادار ما.',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم پشتیبانی ما همیشه آماده است تا به سوالات و مشکلات شما پاسخ دهد و راهنمایی‌های لازم را ارائه کند.',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'تعهد به کیفیت',
      description: 'ما متعهد به ارائه محصولات با کیفیت و استاندارد بالا هستیم.',
    },
    {
      icon: Users,
      title: 'مشتری مداری',
      description: 'رضایت و اعتماد شما اولویت اصلی ماست.',
    },
    {
      icon: Target,
      title: 'نوآوری مداوم',
      description: 'همواره در تلاش برای بهبود خدمات و محصولات خود هستیم.',
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header onNavigate={onNavigate} cartCount={0} />

      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                درباره ما
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                فروشگاه اینترنتی خرازی - ابزار و لوازم خیاطی
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-right">
                داستان ما
              </h2>
              <div className="space-y-6 text-right">
                <p className="text-lg text-foreground leading-relaxed">
                  فروشگاه خرازی با هدف ارائه بهترین و با کیفیت‌ترین ابزار و لوازم خیاطی در سال ۱۳۹۵ فعالیت خود را آغاز کرد. ما با تجربه‌ای بیش از ۸ سال در زمینه تامین و فروش ابزار تخصصی، توانسته‌ایم اعتماد هزاران مشتری را در سراسر کشور جلب کنیم.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  ماموریت ما فراهم کردن بهترین تجربه خرید برای علاقه‌مندان به هنر خیاطی و دوخت است. ما معتقدیم که دسترسی آسان به ابزار با کیفیت، می‌تواند الهام‌بخش خلاقیت و نوآوری باشد.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  تیم ما متشکل از متخصصان با تجربه در حوزه خیاطی و تجارت الکترونیک است که همواره در تلاش هستند تا بهترین محصولات را با قیمت‌های رقابتی و خدمات پس از فروش عالی به شما ارائه دهند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Mission */}
                <div className="bg-white border border-border rounded-xl p-8 text-right">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mr-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-foreground mb-4">
                    ماموریت ما
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    ارائه محصولات با کیفیت، خدمات عالی و قیمت‌های منصفانه به تمامی علاقه‌مندان هنر خیاطی و دوخت در سراسر کشور. ما می‌خواهیم بهترین شریک تجاری برای شما باشیم.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-white border border-border rounded-xl p-8 text-right">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mr-auto">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-foreground mb-4">
                    چشم‌انداز ما
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    تبدیل شدن به بزرگترین و معتبرترین فروشگاه آنلاین ابزار و لوازم خیاطی در کشور و ایجاد یک جامعه فعال از علاقه‌مندان به این هنر زیبا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                  چرا ما را انتخاب کنید؟
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  مزایای خرید از فروشگاه خرازی
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 text-right hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mr-auto">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                  ارزش‌های ما
                </h2>
                <p className="text-lg text-muted-foreground">
                  اصولی که راهنمای کار ما هستند
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border border-border rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                آماده شروع خرید هستید؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                محصولات با کیفیت ما را مشاهده کنید و تجربه خرید آنلاین عالی را با ما داشته باشید.
              </p>
              <button
                onClick={() => onNavigate('category')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                مشاهده محصولات
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
