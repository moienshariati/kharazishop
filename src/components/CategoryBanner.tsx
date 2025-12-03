import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';
import { ArrowLeft } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

interface CategoryBannerProps {
  onNavigate: (page: string) => void;
}

export function CategoryBanner({ onNavigate }: CategoryBannerProps) {
  const categories: Category[] = [
    {
      id: 1,
      name: 'سوزن',
      image: 'https://images.unsplash.com/photo-1710432103939-ba474632b9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBuZWVkbGVzJTIwcGluc3xlbnwxfHx8fDE3NjQ3NTk5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 245,
    },
    {
      id: 2,
      name: 'نخ',
      image: 'https://images.unsplash.com/photo-1560880857-2b1c0603f964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJlYWQlMjBzcG9vbHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjQ3NTk5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 328,
    },
    {
      id: 3,
      name: 'دکمه',
      image: 'https://images.unsplash.com/photo-1566753627172-6b4ab24343c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1dHRvbnMlMjBjcmFmdHxlbnwxfHx8fDE3NjQ3NTk5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 192,
    },
    {
      id: 4,
      name: 'زیپ',
      image: 'https://images.unsplash.com/photo-1727516684797-d042ca80cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBwZXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2NDc1NDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 178,
    },
    {
      id: 5,
      name: 'پارچه',
      image: 'https://images.unsplash.com/photo-1761682719790-4e0b38ed5beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xscyUyMHRleHRpbGV8ZW58MXx8fHwxNzY0NzU5OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 456,
    },
    {
      id: 6,
      name: 'قیچی',
      image: 'https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBzY2lzc29ycyUyMGN1dHRpbmd8ZW58MXx8fHwxNzY0NzU5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 134,
    },
    {
      id: 7,
      name: 'یراق‌آلات',
      image: 'https://images.unsplash.com/photo-1634626857321-deb416dcdb00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBhY2Nlc3NvcmllcyUyMG5vdGlvbnN8ZW58MXx8fHwxNzY0NzU5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: 267,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 via-primary/5 to-background relative overflow-hidden" dir="rtl">
      {/* Unique visual elements for categories section */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-primary via-accent to-secondary" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm mb-4">
              دسته‌بندی محصولات
            </div>
            <h2 className="text-4xl md:text-5xl text-foreground mb-4">
              انواع محصولات خرازی
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              انتخاب از میان بیش از ۱۸۰۰ محصول در ۷ دسته‌بندی اصلی
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 80}>
              <button
                onClick={() => onNavigate('category')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 block w-full border-2 border-border hover:border-primary/30"
              >
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent flex flex-col justify-end p-5 group-hover:from-primary/95 group-hover:via-primary/70 transition-all duration-500">
                <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  <h3 className="text-white text-lg md:text-xl mb-1.5">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/90 text-sm">{category.count} محصول</p>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 rounded-bl-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
