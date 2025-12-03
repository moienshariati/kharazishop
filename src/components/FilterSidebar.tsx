import { useState } from 'react';
import { X, SlidersHorizontal } from 'lucide-react';

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterSidebar({ onFilterChange, isMobile = false, isOpen = true, onClose }: FilterSidebarProps) {
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { id: 'needles', label: 'سوزن' },
    { id: 'threads', label: 'نخ' },
    { id: 'buttons', label: 'دکمه' },
    { id: 'fabric', label: 'پارچه' },
    { id: 'scissors', label: 'قیچی و ابزار برش' },
    { id: 'zippers', label: 'زیپ' },
    { id: 'accessories', label: 'یراق و لوازم جانبی دوخت' },
  ];

  const brands = [
    { id: 'dmc', label: 'DMC' },
    { id: 'coats', label: 'Coats' },
    { id: 'janome', label: 'ژانومه' },
    { id: 'singer', label: 'سینگر' },
    { id: 'german', label: 'آلمانی' },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBrandToggle = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleClearFilters = () => {
    setPriceMin('');
    setPriceMax('');
    setSelectedCategories([]);
    setSelectedBrands([]);
    setInStockOnly(false);
  };

  const handleApplyFilters = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  const content = (
    <div className={`bg-white ${isMobile ? 'h-full' : 'border border-border rounded-lg sticky top-24'} p-6`} dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-foreground">فیلتر محصولات</h3>
        <button
          onClick={handleClearFilters}
          className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
        >
          <span>حذف فیلترها</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Price Range Filter */}
        <div className="space-y-3">
          <h4 className="text-foreground text-right">محدوده قیمت (تومان)</h4>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="تا"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              className="px-3 py-2 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="از"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              className="px-3 py-2 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-3 pt-6 border-t border-border">
          <h4 className="text-foreground text-right">زیردسته‌ها</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end"
              >
                <span className="text-sm text-foreground">{category.label}</span>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="space-y-3 pt-6 border-t border-border">
          <h4 className="text-foreground text-right">برند</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end"
              >
                <span className="text-sm text-foreground">{brand.label}</span>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandToggle(brand.id)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Availability Filter */}
        <div className="space-y-3 pt-6 border-t border-border">
          <h4 className="text-foreground text-right">موجودی</h4>
          <label className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end">
            <span className="text-sm text-foreground">فقط کالاهای موجود</span>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
            />
          </label>
        </div>

        {/* Apply Button */}
        <button 
          onClick={handleApplyFilters}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );

  // Mobile: Render as drawer
  if (isMobile) {
    if (!isOpen) return null;
    
    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
        
        {/* Drawer - Opens from RIGHT */}
        <div 
          className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
          dir="rtl"
        >
          {/* Close button */}
          <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="بستن فیلتر"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <h3 className="text-lg text-foreground">فیلتر محصولات</h3>
          </div>
          
          <div className="p-6">
            {/* Filter content without the header (already in sticky top) */}
            <div className="space-y-6">
              {/* Price Range Filter */}
              <div className="space-y-3">
                <h4 className="text-foreground text-right">محدوده قیمت (تومان)</h4>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="تا"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="px-3 py-2 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="از"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="px-3 py-2 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-foreground text-right">زیردسته‌ها</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end"
                    >
                      <span className="text-sm text-foreground">{category.label}</span>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-foreground text-right">برند</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end"
                    >
                      <span className="text-sm text-foreground">{brand.label}</span>
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() => handleBrandToggle(brand.id)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-foreground text-right">موجودی</h4>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg justify-end">
                  <span className="text-sm text-foreground">فقط کالاهای موجود</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                </label>
              </div>

              {/* Clear and Apply Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={handleApplyFilters}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  اعمال فیلتر
                </button>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
                >
                  حذف فیلترها
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop: Render as sidebar
  return content;
}

// Filter Button Component for Mobile
export function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors bg-white"
    >
      <span className="text-foreground">فیلتر</span>
      <SlidersHorizontal className="w-5 h-5 text-foreground" />
    </button>
  );
}
