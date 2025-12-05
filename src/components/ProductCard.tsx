import { ShoppingCart, Star, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { QuantitySelector } from './QuantitySelector';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: string;
  inStock?: boolean;
  onNavigate?: (page: string) => void;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discount,
  inStock = true,
  onNavigate,
}: ProductCardProps) {
  const [showQuantityDialog, setShowQuantityDialog] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuantityDialog(true);
  };

  const handleConfirmAdd = () => {
    // Here you can add the product to cart with the selected quantity
    console.log(`Adding ${quantity} of ${name} to cart`);
    setShowQuantityDialog(false);
    onNavigate?.('cart');
  };

  return (
    <>
    <div 
      onClick={() => onNavigate?.('product-detail')}
      className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 cursor-pointer"
      dir="rtl"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {discount && (
          <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-accent text-accent-foreground px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
            {discount}
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-foreground px-3 md:px-4 py-2 rounded-lg text-sm md:text-base">ناموجود</span>
          </div>
        )}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-2 md:bottom-3 right-2 md:right-3 bg-white p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white"
          aria-label="افزودن به سبد خرید"
        >
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
        <h3 className="text-foreground line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] text-sm md:text-base text-right">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 justify-end">
          <span className="text-xs md:text-sm text-muted-foreground">({reviewCount})</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${
                  i < rating
                    ? 'fill-accent text-accent'
                    : 'fill-none text-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2" dir="rtl">
          <div className="text-right w-full sm:w-auto order-2 sm:order-2">
            <div className="text-lg md:text-xl text-accent">{price}</div>
            {originalPrice && (
              <div className="text-xs md:text-sm text-muted-foreground line-through">
                {originalPrice}
              </div>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs md:text-sm whitespace-nowrap order-1 sm:order-1"
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>

    {/* Quantity Selection Dialog */}
    {showQuantityDialog && (
      <>
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowQuantityDialog(false)}
        />
        <div 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-80 max-w-[90vw] p-6"
          dir="rtl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-foreground">انتخاب تعداد</h3>
            <button
              onClick={() => setShowQuantityDialog(false)}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
              aria-label="بستن"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">{name}</p>
            <div className="flex items-center gap-3 justify-end">
              <span className="text-foreground">تعداد:</span>
              <QuantitySelector 
                initialValue={quantity}
                onChange={(value) => setQuantity(value)}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowQuantityDialog(false)}
              className="flex-1 px-4 py-2 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              انصراف
            </button>
            <button
              onClick={handleConfirmAdd}
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>افزودن به سبد ({quantity})</span>
            </button>
          </div>
        </div>
      </>
    )}
    </>
  );
}
