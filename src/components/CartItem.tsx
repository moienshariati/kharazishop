import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItemProps {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  onQuantityChange?: (id: number, quantity: number) => void;
  onRemove?: (id: number) => void;
}

export function CartItem({
  id,
  name,
  price,
  image,
  quantity: initialQuantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(id, newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(id, newQuantity);
  };

  const handleRemove = () => {
    onRemove?.(id);
  };

  // Parse price to calculate total (remove commas and convert)
  const priceNumber = parseInt(price.replace(/[,،]/g, '').replace(/[^\d]/g, ''));
  const total = (priceNumber * quantity).toLocaleString('fa-IR');

  return (
    <>
      {/* Desktop/Tablet Table Layout (768px+) */}
      <div className="hidden md:block bg-white border border-border rounded-lg p-4 hover:shadow-md transition-shadow" dir="rtl">
        <div className="grid grid-cols-[auto_auto_auto_1fr_auto] gap-4 items-center">
          {/* Product Info */}
          <div className="flex items-center gap-4">
            <div className="text-right flex-1">
              <h3 className="text-foreground">{name}</h3>
            </div>
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-20 h-20 object-cover rounded-lg border border-border flex-shrink-0"
            />
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-foreground">{price} تومان</div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 justify-center">
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-lg hover:bg-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="کاهش تعداد"
            >
              <Minus className="w-4 h-4 text-foreground" />
            </button>
            <span className="w-12 text-center text-foreground">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center bg-muted border border-border rounded-lg hover:bg-border transition-colors"
              aria-label="افزایش تعداد"
            >
              <Plus className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Total */}
          <div className="text-right">
            <div className="text-accent">{total} تومان</div>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Card Layout (below 768px) */}
      <div className="md:hidden bg-white border border-border rounded-lg p-4 relative" dir="rtl">
        {/* Remove Button - Top Right Corner */}
        <button
          onClick={handleRemove}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors z-10"
          aria-label="حذف محصول"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Row: Image + Product Info */}
        <div className="flex gap-3 mb-4 pr-8">
          {/* Product Image - Left Side */}
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-20 h-20 object-cover rounded-lg border border-border"
            />
          </div>

          {/* Product Info - Right Side */}
          <div className="flex-1 text-right">
            <h3 className="text-foreground leading-snug line-clamp-2">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">قیمت واحد: {price} تومان</p>
          </div>
        </div>

        {/* Bottom Section: Quantity + Total */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          {/* Quantity Controls - Right Side (RTL) */}
          <div className="flex items-center gap-2 border border-border rounded-lg p-1">
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className="w-11 h-11 flex items-center justify-center bg-muted rounded-md hover:bg-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              aria-label="کاهش تعداد"
            >
              <Minus className="w-5 h-5 text-foreground" />
            </button>
            <span className="w-12 text-center text-foreground">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="w-11 h-11 flex items-center justify-center bg-muted rounded-md hover:bg-border transition-colors active:scale-95"
              aria-label="افزایش تعداد"
            >
              <Plus className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Total Price - Left Side */}
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">جمع:</p>
            <p className="text-lg text-accent">{total} تومان</p>
          </div>
        </div>
      </div>
    </>
  );
}
