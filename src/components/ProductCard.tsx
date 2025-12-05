import { ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  return (
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
          onClick={(e) => {
            e.stopPropagation();
            onNavigate?.('cart');
          }}
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
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.('cart');
            }}
            className="w-full sm:w-auto px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs md:text-sm whitespace-nowrap order-1 sm:order-1"
          >
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}
