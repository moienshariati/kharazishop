import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function ProductsManagement() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categories: [] as string[],
  });

  const products = [
    {
      id: 1,
      name: 'ست سوزن و نخ ۵۰ عددی حرفه‌ای',
      category: 'سوزن و نخ',
      price: '۱۲۵,۰۰۰',
      stock: 124,
      status: 'موجود',
      image: 'https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?w=100',
    },
    {
      id: 2,
      name: 'قیچی خیاطی ۲۵ سانتی استیل',
      category: 'قیچی و ابزار برش',
      price: '۱۸۵,۰۰۰',
      stock: 48,
      status: 'موجود',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=100',
    },
    {
      id: 3,
      name: 'ماشین دوخت صنعتی ژانومه',
      category: 'ماشین‌آلات',
      price: '۱۸,۵۰۰,۰۰۰',
      stock: 3,
      status: 'کم موجود',
      image: 'https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?w=100',
    },
    {
      id: 4,
      name: 'دکمه فلزی طلایی بسته ۲۰ تایی',
      category: 'دکمه',
      price: '۶۵,۰۰۰',
      stock: 0,
      status: 'ناموجود',
      image: 'https://images.unsplash.com/photo-1753947686751-c77068e043ec?w=100',
    },
  ];

  const categories = [
    { id: 'needles', label: 'سوزن' },
    { id: 'threads', label: 'نخ' },
    { id: 'buttons', label: 'دکمه' },
    { id: 'fabric', label: 'پارچه' },
    { id: 'scissors', label: 'قیچی و ابزار برش' },
    { id: 'zippers', label: 'زیپ' },
    { id: 'accessories', label: 'یراق و لوازم جانبی دوخت' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'موجود':
        return 'bg-green-100 text-green-700';
      case 'کم موجود':
        return 'bg-yellow-100 text-yellow-700';
      case 'ناموجود':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8" dir="rtl">
      {!showAddForm ? (
        <>
          {/* Header - Responsive */}
          <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl text-foreground">مدیریت محصولات</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 px-4 md:px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center min-h-[44px]"
            >
              <Plus className="w-5 h-5" />
              <span>افزودن محصول جدید</span>
            </button>
          </div>

          {/* Search & Filter Bar - Responsive */}
          <div className="bg-white border border-border rounded-lg p-4 mb-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-muted rounded-lg hover:bg-border transition-colors min-h-[44px]">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">فیلتر</span>
              </button>
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="جستجوی محصول..."
                  className="w-full pr-10 pl-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      عملیات
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      وضعیت
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      موجودی
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      قیمت (تومان)
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      دسته‌بندی
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      نام محصول
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      تصویر
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-muted text-foreground rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-foreground">{product.stock}</td>
                      <td className="py-4 px-4 text-foreground">{product.price}</td>
                      <td className="py-4 px-4 text-muted-foreground text-sm">
                        {product.category}
                      </td>
                      <td className="py-4 px-4 text-foreground">{product.name}</td>
                      <td className="py-4 px-4">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg border border-border"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-border rounded-lg p-4">
                <div className="flex gap-4 mb-4">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-border flex-shrink-0"
                  />
                  <div className="flex-1 text-right">
                    <h3 className="text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-right">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{product.price} تومان</span>
                    <span className="text-sm text-muted-foreground">قیمت:</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{product.stock} عدد</span>
                    <span className="text-sm text-muted-foreground">موجودی:</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{product.category}</span>
                    <span className="text-sm text-muted-foreground">دسته‌بندی:</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-colors min-h-[44px]">
                    <Eye className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-foreground">مشاهده</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 hover:bg-primary/10 text-primary rounded-lg transition-colors min-h-[44px]">
                    <Edit className="w-4 h-4" />
                    <span className="text-sm">ویرایش</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 hover:bg-destructive/10 text-destructive rounded-lg transition-colors min-h-[44px]">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Add/Edit Product Form - Responsive
        <div className="max-w-3xl mr-auto">
          <div className="flex flex-col-reverse sm:flex-row-reverse items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl text-foreground">افزودن محصول جدید</h1>
            <button
              onClick={() => setShowAddForm(false)}
              className="w-full sm:w-auto px-4 md:px-6 py-2 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors min-h-[44px]"
            >
              انصراف
            </button>
          </div>

          <div className="bg-white border border-border rounded-lg p-4 md:p-6 lg:p-8">
            <form className="space-y-5 md:space-y-6">
              {/* Product Name */}
              <div className="text-right">
                <label className="block text-foreground mb-2">نام محصول</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="نام محصول را وارد کنید"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                />
              </div>

              {/* Description */}
              <div className="text-right">
                <label className="block text-foreground mb-2">توضیحات محصول</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="توضیحات کامل محصول را وارد کنید"
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Price & Stock - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-right">
                  <label className="block text-foreground mb-2">قیمت (تومان)</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="۰"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                  />
                </div>
                <div className="text-right">
                  <label className="block text-foreground mb-2">موجودی (عدد)</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="۰"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                  />
                </div>
              </div>

              {/* Categories - Responsive Grid */}
              <div className="text-right">
                <label className="block text-foreground mb-3">
                  دسته‌بندی‌های محصول
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-border transition-colors justify-end min-h-[44px]"
                    >
                      <span className="text-foreground">{category.label}</span>
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                        className="w-5 h-5 text-primary border-border rounded cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div className="text-right">
                <label className="block text-foreground mb-2">آپلود تصویر</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 md:p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <p className="text-sm md:text-base text-muted-foreground">
                    تصویر محصول را اینجا بکشید یا کلیک کنید
                  </p>
                </div>
              </div>

              {/* Submit Buttons - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="sm:flex-1 px-4 md:px-6 py-4 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors min-h-[44px]"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="sm:flex-1 px-4 md:px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
                >
                  ذخیره محصول
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
