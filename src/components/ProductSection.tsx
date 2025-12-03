import { ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ScrollReveal } from './ScrollReveal';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: string;
  inStock?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  onNavigate: (page: string) => void;
  variant?: 'default' | 'bestsellers' | 'new-arrivals' | 'special-offers';
}

export function ProductSection({ title, products, onNavigate, variant = 'default' }: ProductSectionProps) {
  // Variant-specific styles
  const variantStyles = {
    'bestsellers': {
      section: 'py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden',
      header: 'text-center mb-14',
      titleWrapper: 'text-4xl md:text-5xl text-foreground mb-4 inline-block relative',
      decoration: <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />,
      badge: <div className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm mb-4">برترین‌ها</div>,
      grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8',
      background: <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />,
    },
    'new-arrivals': {
      section: 'py-24 md:py-32 bg-white relative overflow-hidden',
      header: 'text-center mb-14',
      titleWrapper: 'text-4xl md:text-5xl text-foreground mb-4 inline-block relative',
      decoration: <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full" />,
      badge: <div className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">تازه‌ها</div>,
      grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8',
      background: (
        <>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        </>
      ),
    },
    'special-offers': {
      section: 'py-20 md:py-28 bg-gradient-to-b from-accent/5 via-background to-background relative overflow-hidden',
      header: 'text-center mb-14',
      titleWrapper: 'text-4xl md:text-5xl text-foreground mb-4 inline-block relative',
      decoration: <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-destructive via-accent to-destructive rounded-full" />,
      badge: <div className="inline-block px-6 py-2 bg-destructive/10 text-destructive rounded-full text-sm mb-4 animate-pulse">ویژه</div>,
      grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8',
      background: (
        <>
          <div className="absolute top-[15%] right-[8%] w-[450px] h-[450px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-destructive/5 rounded-full blur-[120px] pointer-events-none" />
        </>
      ),
    },
    'default': {
      section: 'py-16 md:py-20 transition-all duration-500',
      header: 'text-center mb-10',
      titleWrapper: 'text-3xl md:text-4xl text-foreground mb-4 inline-block relative',
      decoration: <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-l from-primary to-accent rounded-full" />,
      badge: null,
      grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6',
      background: null,
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <section className={currentVariant.section} dir="rtl">
      {currentVariant.background}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className={currentVariant.header}>
            <div className="flex flex-col items-center justify-center">
              {currentVariant.badge}
              <h2 className={currentVariant.titleWrapper}>
                {title}
                {currentVariant.decoration}
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-center">
                {variant === 'bestsellers' && 'محصولات برتر و پرفروش فروشگاه'}
                {variant === 'new-arrivals' && 'جدیدترین محصولات اضافه شده'}
                {variant === 'special-offers' && 'تخفیف‌های ویژه و محدود'}
                {variant === 'default' && 'مجموعه منتخب محصولات'}
              </p>
              <button
                onClick={() => onNavigate('category')}
                className="mt-4 text-primary hover:text-primary/80 transition-all duration-300 flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                <span className="text-sm">مشاهده همه محصولات</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className={currentVariant.grid}>
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 50}>
              <ProductCard {...product} onNavigate={onNavigate} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
