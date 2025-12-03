import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { FilterSidebar, FilterButton } from '../components/FilterSidebar';
import { SortDropdown } from '../components/SortDropdown';
import { ProductCard } from '../components/ProductCard';

interface CategoryPageProps {
  onNavigate: (page: string) => void;
}

export function CategoryPage({ onNavigate }: CategoryPageProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'دسته‌بندی‌ها', href: '/categories' },
    { label: 'ابزار خیاطی', href: '/categories/sewing-tools' },
  ];

  const products = [
    {
      id: 1,
      name: 'سوزن خیاطی شماره ۱۲ - بسته ۲۰ عددی',
      price: '۱۲۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ2OTc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 84,
      inStock: true,
    },
    {
      id: 2,
      name: 'قیچی برش پارچه حرفه‌ای ۱۰ اینچ',
      price: '۳۵۰,۰۰۰ تومان',
      originalPrice: '۴۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdG9vbHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 142,
      discount: '۲۲٪ تخفیف',
      inStock: true,
    },
    {
      id: 3,
      name: 'نخ پلی‌استر رنگی - بسته ۵۰ قرقره',
      price: '۸۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG9vbHMlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NjQ3NTU5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 67,
      inStock: true,
    },
    {
      id: 4,
      name: 'دکمه فلزی طلایی - بسته ۱۰۰ عددی',
      price: '۲۲۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2NDc1NTkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 52,
      inStock: true,
    },
    {
      id: 5,
      name: 'زیپ فلزی ۵۰ سانتی - رنگ‌های متنوع',
      price: '۱۸۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1753947686751-c77068e043ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 93,
      inStock: true,
    },
    {
      id: 6,
      name: 'خط‌کش الگو سازی حرفه‌ای',
      price: '۴۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NDcyNDIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 38,
      inStock: true,
    },
    {
      id: 7,
      name: 'انگشتانه چرمی حرفه‌ای',
      price: '۸۵,۰۰۰ تومان',
      originalPrice: '۱۲۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1614792403436-ba5b3e747604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ2OTc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 71,
      discount: '۲۹٪ تخفیف',
      inStock: true,
    },
    {
      id: 8,
      name: 'نوار متری خیاطی ۲ متری',
      price: '۶۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwdG9vbHMlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NDc1NTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 124,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header onNavigate={onNavigate} cartCount={3} />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 order-2 sm:order-1">
              <SortDropdown />
              {/* Filter Button - Mobile Only */}
              <div className="lg:hidden">
                <FilterButton onClick={() => setIsFilterOpen(true)} />
              </div>
            </div>
            <div className="text-right order-1 sm:order-2">
              <h1 className="text-2xl md:text-3xl text-foreground mb-2">ابزار خیاطی</h1>
              <p className="text-muted-foreground">۲۴۸ محصول</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Products Grid - LEFT side in RTL */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} onNavigate={onNavigate} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
                <button className="px-3 md:px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors text-sm md:text-base">
                  بعدی
                </button>
                <button className="px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm md:text-base">
                  ۱
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors text-sm md:text-base">
                  ۲
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors text-sm md:text-base">
                  ۳
                </button>
                <button className="px-3 md:px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors text-sm md:text-base">
                  قبلی
                </button>
              </div>
            </div>

            {/* Filter Sidebar - RIGHT side in RTL, Hidden on mobile */}
            <div className="order-1 lg:order-2 hidden lg:block">
              <FilterSidebar />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      <FilterSidebar 
        isMobile={true}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
