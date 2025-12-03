import { useState } from 'react';
import { Plus, Edit, Trash2, FolderTree } from 'lucide-react';
import { EmptyState } from '../../components/EmptyState';

export function CategoriesManagement() {
  const [showEmpty, setShowEmpty] = useState(true);

  // Mock categories data - toggle between empty and populated
  const categories = showEmpty
    ? []
    : [
        {
          id: 1,
          name: 'سوزن',
          slug: 'needles',
          productCount: 245,
          icon: '📌',
        },
        {
          id: 2,
          name: 'نخ',
          slug: 'threads',
          productCount: 328,
          icon: '🧵',
        },
        {
          id: 3,
          name: 'دکمه',
          slug: 'buttons',
          productCount: 192,
          icon: '🔘',
        },
        {
          id: 4,
          name: 'پارچه',
          slug: 'fabric',
          productCount: 456,
          icon: '🎨',
        },
        {
          id: 5,
          name: 'قیچی و ابزار برش',
          slug: 'scissors',
          productCount: 134,
          icon: '✂️',
        },
        {
          id: 6,
          name: 'زیپ',
          slug: 'zippers',
          productCount: 178,
          icon: '🔗',
        },
        {
          id: 7,
          name: 'یراق و لوازم جانبی دوخت',
          slug: 'accessories',
          productCount: 267,
          icon: '⚙️',
        },
      ];

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8" dir="rtl">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl text-foreground">مدیریت دسته‌بندی‌ها</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => alert('افزودن دسته‌بندی جدید')}
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <Plus className="w-5 h-5" />
            <span>افزودن دسته‌بندی جدید</span>
          </button>
          <button
            onClick={() => setShowEmpty(!showEmpty)}
            className="px-4 py-3 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm min-h-[44px]"
          >
            {showEmpty ? 'نمایش با محتوا' : 'نمایش حالت خالی'}
          </button>
        </div>
      </div>

      {/* Content - Responsive Grid */}
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-border rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right flex-1">
                  <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-lg md:text-xl text-foreground mb-1">{category.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{category.slug}</p>
                </div>
              </div>

              {/* Category Stats */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-primary">{category.productCount}</span>
                  <span className="text-sm text-muted-foreground">تعداد محصولات:</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-border rounded-lg">
          <EmptyState
            icon={FolderTree}
            title="هنوز دسته‌بندی اضافه نشده"
            message="برای شروع، دسته‌بندی جدید اضافه کنید"
            actionLabel="افزودن دسته‌بندی جدید"
            onAction={() => alert('افزودن دسته‌بندی جدید')}
          />
        </div>
      )}
    </main>
  );
}
