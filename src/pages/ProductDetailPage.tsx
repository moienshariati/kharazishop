import { ArrowRight, ShoppingCart, Heart, Share2, Star, TruckIcon, Shield, RefreshCw } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { ImageGallery } from '../components/ImageGallery';
import { QuantitySelector } from '../components/QuantitySelector';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'دسته‌بندی‌ها', href: '/categories' },
    { label: 'سوزن و نخ', href: '/categories/needles-threads' },
    { label: 'ست سوزن و نخ ۵۰ عددی حرفه‌ای', href: '/products/professional-needle-thread-set' },
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG9vbHMlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjQ3NTU5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdG9vbHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1753947686751-c77068e043ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ2OTc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'قیچی خیاطی ۲۵ سانتی استیل',
      price: '۱۸۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdG9vbHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 89,
      inStock: true,
    },
    {
      id: 2,
      name: 'جعبه نظم‌دهنده خیاطی چوبی',
      price: '۳۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1753947686751-c77068e043ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 203,
      inStock: true,
    },
    {
      id: 3,
      name: 'نخ DMC رنگی ۱۰۰ عددی',
      price: '۴۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG9vbHMlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjQ3NTU5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 32,
      inStock: true,
    },
    {
      id: 4,
      name: 'دکمه فلزی طلایی بسته ۲۰ تایی',
      price: '۶۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ2OTc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 67,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={3} />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button & Breadcrumb */}
          <div className="mb-6 flex items-center justify-between" dir="rtl">
            <div></div>
            <div className="flex items-center gap-4">
              <Breadcrumb items={breadcrumbItems} />
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span>بازگشت</span>
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </div>

          {/* Product Detail Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16" dir="rtl">
            {/* RIGHT: Product Info */}
            <div className="order-1 lg:order-1 space-y-6" dir="rtl">
              {/* Product Title & Category */}
              <div className="text-right">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                  سوزن و نخ
                </div>
                <h1 className="text-3xl text-foreground mb-3">
                  ست سوزن و نخ ۵۰ عددی حرفه‌ای
                </h1>
                <div className="flex items-center gap-3 justify-end">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(۱۲۴ نظر)</span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-border py-6">
                <div className="flex items-center gap-4 justify-end">
                  <div className="bg-destructive text-white px-4 py-2 rounded-lg">
                    ۱۷٪ تخفیف
                  </div>
                  <div className="text-right">
                    <div className="text-3xl text-accent">۱۲۵,۰۰۰ تومان</div>
                    <div className="text-lg text-muted-foreground line-through">۱۵۰,۰۰۰ تومان</div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="text-right space-y-3">
                <h3 className="text-lg text-foreground">توضیحات محصول</h3>
                <p className="text-muted-foreground leading-relaxed">
                  این ست کامل شامل ۵۰ عدد سوزن و نخ با کیفیت بالا برای انواع کارهای دوخت و خیاطی است. 
                  سوزن‌ها از فولاد ضد زنگ ساخته شده و نخ‌ها از الیاف مرغوب با استحکام بالا می‌باشند.
                  مناسب برای خیاطی، دوخت دستی، تعمیرات پارچه و کارهای هنری.
                </p>
              </div>

              {/* Specifications */}
              <div className="text-right space-y-3">
                <h3 className="text-lg text-foreground">مشخصات فنی</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 py-2 border-b border-border" dir="rtl">
                    <span className="text-foreground">DMC</span>
                    <span className="text-muted-foreground">برند:</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-border" dir="rtl">
                    <span className="text-foreground">فولاد ضد زنگ و نخ پلی‌استر</span>
                    <span className="text-muted-foreground">مواد اولیه:</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-border" dir="rtl">
                    <span className="text-foreground">۱۵ × ۱۰ × ۳ سانتی‌متر</span>
                    <span className="text-muted-foreground">ابعاد بسته‌بندی:</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-border" dir="rtl">
                    <span className="text-foreground">۱۲۰ گرم</span>
                    <span className="text-muted-foreground">وزن:</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-border" dir="rtl">
                    <span className="text-foreground">۱ سال</span>
                    <span className="text-muted-foreground">گارانتی:</span>
                  </div>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 pt-4" dir="rtl">
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-foreground">تعداد:</span>
                  <QuantitySelector />
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-4 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                    <span>خرید فوری</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('cart')}
                    className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>افزودن به سبد خرید</span>
                  </button>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    <span>اشتراک‌گذاری</span>
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    <span>افزودن به علاقه‌مندی‌ها</span>
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-1 gap-3 pt-6 border-t border-border">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg justify-end">
                  <span className="text-sm text-foreground">ارسال رایگان برای این محصول</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TruckIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg justify-end">
                  <span className="text-sm text-foreground">ضمانت اصالت کالا</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg justify-end">
                  <span className="text-sm text-foreground">۷ روز ضمانت بازگشت کالا</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT: Image Gallery */}
            <div className="order-2 lg:order-2">
              <ImageGallery images={productImages} productName="ست سوزن و نخ ۵۰ عددی حرفه‌ای" />
            </div>
          </div>

          {/* Related Products */}
          <section className="pt-12 border-t border-border">
            <h2 className="text-3xl text-foreground text-right mb-8">محصولات مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
