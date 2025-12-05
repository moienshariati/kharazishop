import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.max(min, Math.min(max, value));
    setQuantity(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className="flex items-center gap-3" dir="rtl">
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="w-10 h-10 flex items-center justify-center bg-muted border border-border rounded-lg hover:bg-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="افزایش تعداد"
      >
        <Plus className="w-4 h-4 text-foreground" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-16 h-10 text-center bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        dir="ltr"
      />

      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="w-10 h-10 flex items-center justify-center bg-muted border border-border rounded-lg hover:bg-border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="کاهش تعداد"
      >
        <Minus className="w-4 h-4 text-foreground" />
      </button>
    </div>
  );
}
