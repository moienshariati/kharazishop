import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('جدیدترین');

  const sortOptions = [
    { id: 'newest', label: 'جدیدترین' },
    { id: 'price-low', label: 'قیمت: کم به زیاد' },
    { id: 'price-high', label: 'قیمت: زیاد به کم' },
    { id: 'bestseller', label: 'پرفروش‌ترین' },
    { id: 'popular', label: 'محبوب‌ترین' },
  ];

  const handleSelect = (label: string) => {
    setSelectedSort(label);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors"
      >
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span className="text-foreground">{selectedSort}</span>
        <span className="text-muted-foreground">مرتب‌سازی:</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-20 overflow-hidden">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.label)}
                className={`w-full px-4 py-3 text-right hover:bg-muted transition-colors ${
                  selectedSort === option.label
                    ? 'bg-primary/5 text-primary'
                    : 'text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
