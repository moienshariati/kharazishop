import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { EmptyState } from '../components/EmptyState';

interface SearchResultsPageProps {
  onNavigate: (page: string) => void;
}

export function SearchResultsPage({ onNavigate }: SearchResultsPageProps) {
  const [searchQuery, setSearchQuery] = useState('چکش آهنگری قدیمی');
  const [showResults, setShowResults] = useState(false);

  // Sample products for when results exist
  const products = [
    {
      id: 1,
      name: 'ست کامل ابزار خرازی حرفه‌ای',
      price: '۲,۴۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?w=400',
      rating: 5,
      reviewCount: 124,
      inStock: true,
    },
    {
      id: 2,
      name: 'چاقوی برش چرم استیل ژاپنی',
      price: '۳۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=400',
      rating: 5,
      reviewCount: 89,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={3} />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-foreground text-right mb-6">نتایج جستجو</h1>

            {/* Search Bar */}
            <div className="flex gap-4 mb-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-border rounded-lg hover:bg-muted transition-colors">
                <SlidersHorizontal className="w-5 h-5 text-foreground" />
                <span className="text-foreground">فیلترها</span>
              </button>
              <div className="flex-1 relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجوی محصول..."
                  className="w-full pr-12 pl-4 py-3 bg-white border-2 border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Toggle Demo Button */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setShowResults(!showResults)}
                className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground hover:bg-border transition-colors"
              >
                {showResults ? 'نمایش حالت خالی' : 'نمایش با نتایج'}
              </button>
              <p className="text-muted-foreground text-right">
                جستجو برای: <span className="text-foreground">"{searchQuery}"</span>
              </p>
            </div>
          </div>

          {/* Results */}
          {showResults ? (
            <div>
              <p className="text-muted-foreground text-right mb-6">
                {products.length} محصول یافت شد
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} onNavigate={onNavigate} />
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-border rounded-lg">
              <EmptyState
                icon={Search}
                title="محصولی یافت نشد"
                message="متأسفانه محصولی با این جستجو پیدا نشد. لطفاً دوباره امتحان کنید."
                actionLabel="بازگشت به صفحه اصلی"
                actionVariant="outline"
                onAction={() => (window.location.href = '/')}
              />

              {/* Search Suggestions */}
              <div className="px-8 pb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-right">
                  <h3 className="text-foreground mb-3">پیشنهادات جستجو:</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• از کلمات کلیدی عمومی‌تر استفاده کنید</li>
                    <li>• املای کلمات را بررسی کنید</li>
                    <li>• از فیلترهای دسته‌بندی استفاده کنید</li>
                    <li>• به دنبال نام برند یا مدل خاص بگردید</li>
                  </ul>

                  <div className="mt-6 pt-4 border-t border-blue-200">
                    <p className="text-sm text-muted-foreground mb-3">
                      جستجوهای پرطرفدار:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm text-foreground hover:bg-blue-100 transition-colors">
                        ماشین دوخت
                      </button>
                      <button className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm text-foreground hover:bg-blue-100 transition-colors">
                        ابزار چرم
                      </button>
                      <button className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm text-foreground hover:bg-blue-100 transition-colors">
                        چاقو برش
                      </button>
                      <button className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm text-foreground hover:bg-blue-100 transition-colors">
                        انبردست
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
