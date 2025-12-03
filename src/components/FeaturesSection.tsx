import { Truck, Shield, Headphones, CreditCard } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Truck,
      title: 'ارسال رایگان',
      description: 'برای خریدهای بالای ۵۰۰ هزار تومان',
    },
    {
      id: 2,
      icon: Shield,
      title: 'ضمانت اصالت کالا',
      description: 'تضمین کیفیت و اصالت محصولات',
    },
    {
      id: 3,
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'پاسخگویی در تمام ساعات شبانه‌روز',
    },
    {
      id: 4,
      icon: CreditCard,
      title: 'پرداخت امن',
      description: 'درگاه پرداخت معتبر و ایمن',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-b border-border/50 relative overflow-hidden" dir="rtl">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
