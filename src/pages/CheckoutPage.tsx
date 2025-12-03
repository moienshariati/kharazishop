import { useState } from 'react';
import { Check, CreditCard, MapPin, Package, Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';

type CheckoutStep = 'shipping' | 'payment' | 'review';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    postalCode: '',
    paymentMethod: 'online',
  });

  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'سبد خرید', href: '/cart' },
    { label: 'تکمیل سفارش', href: '/checkout' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const steps = [
    { id: 'shipping', label: 'اطلاعات ارسال', icon: MapPin },
    { id: 'payment', label: 'روش پرداخت', icon: CreditCard },
    { id: 'review', label: 'بررسی سفارش', icon: Package },
  ];

  const cartItems = [
    { name: 'ست کامل ابزار خرازی حرفه‌ای', price: 2450000, quantity: 1 },
    { name: 'چاقوی برش چرم استیل ژاپنی', price: 350000, quantity: 2 },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} cartCount={3} />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <h1 className="text-3xl text-foreground text-right mb-8">تکمیل سفارش</h1>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted =
                  (currentStep === 'payment' && step.id === 'shipping') ||
                  (currentStep === 'review' &&
                    (step.id === 'shipping' || step.id === 'payment'));

                return (
                  <div key={step.id} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? 'bg-green-500 text-white'
                            : isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <StepIcon className="w-6 h-6" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 w-24 ${
                          isCompleted ? 'bg-green-500' : 'bg-border'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-8">
            {/* Form Content - RIGHT */}
            <div className="order-2 lg:order-2">
              <div className="bg-white border border-border rounded-lg p-8">
                {/* Shipping Information */}
                {currentStep === 'shipping' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl text-foreground text-right mb-6">
                      اطلاعات ارسال
                    </h2>

                    <div className="space-y-4">
                      <div className="text-right">
                        <label className="block text-foreground mb-2">
                          نام و نام خانوادگی
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="نام و نام خانوادگی خود را وارد کنید"
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="text-right">
                        <label className="block text-foreground mb-2">شماره تماس</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="text-right">
                        <label className="block text-foreground mb-2">آدرس کامل</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="آدرس کامل خود را به همراه پلاک و واحد وارد کنید"
                          rows={4}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <div className="text-right">
                        <label className="block text-foreground mb-2">کد پستی</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="کد پستی ۱۰ رقمی"
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentStep('payment')}
                      className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      ادامه به انتخاب روش پرداخت
                    </button>
                  </div>
                )}

                {/* Payment Method */}
                {currentStep === 'payment' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl text-foreground text-right mb-6">
                      روش پرداخت
                    </h2>

                    <div className="space-y-4">
                      <label className="flex items-center gap-4 p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer justify-end">
                        <div className="text-right flex-1">
                          <div className="text-foreground mb-1">پرداخت آنلاین</div>
                          <div className="text-sm text-muted-foreground">
                            پرداخت امن از طریق درگاه بانکی
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={formData.paymentMethod === 'online'}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-primary cursor-pointer"
                        />
                      </label>

                      <div className="flex items-center gap-3 justify-center p-6 bg-muted rounded-lg">
                        <span className="text-sm text-muted-foreground">
                          پرداخت از طریق:
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="px-4 py-2 bg-white rounded border border-border text-sm">
                            زرین‌پال
                          </div>
                          <div className="px-4 py-2 bg-white rounded border border-border text-sm">
                            پی‌دات‌آی‌آر
                          </div>
                        </div>
                      </div>

                      {/* Security Badges */}
                      <div className="flex items-center gap-3 justify-center pt-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span>پرداخت امن</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="w-5 h-5 text-green-500" />
                          <span>رمزنگاری SSL</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setCurrentStep('review')}
                        className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        ادامه
                      </button>
                      <button
                        onClick={() => setCurrentStep('shipping')}
                        className="flex-1 px-6 py-4 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      >
                        بازگشت
                      </button>
                    </div>
                  </div>
                )}

                {/* Order Review */}
                {currentStep === 'review' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl text-foreground text-right mb-6">
                      بررسی سفارش
                    </h2>

                    {/* Shipping Info Review */}
                    <div className="p-4 bg-muted rounded-lg text-right space-y-2">
                      <h3 className="text-foreground mb-3">اطلاعات ارسال</h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground">نام:</span> {formData.fullName || 'علی احمدی'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground">شماره تماس:</span>{' '}
                        {formData.phone || '۰۹۱۲۳۴۵۶۷۸۹'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground">آدرس:</span>{' '}
                        {formData.address || 'تهران، خیابان ولیعصر، پلاک ۱۲۳'}
                      </p>
                      <button
                        onClick={() => setCurrentStep('shipping')}
                        className="text-primary text-sm hover:underline"
                      >
                        ویرایش اطلاعات
                      </button>
                    </div>

                    {/* Items Review */}
                    <div className="space-y-3">
                      <h3 className="text-foreground text-right">محصولات سفارش</h3>
                      {cartItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-muted rounded-lg"
                        >
                          <span className="text-foreground">
                            {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {item.name} × {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => onNavigate('order-confirmation')}
                        className="flex-1 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        ثبت و پرداخت
                      </button>
                      <button
                        onClick={() => setCurrentStep('payment')}
                        className="flex-1 px-6 py-4 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                      >
                        بازگشت
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary - LEFT */}
            <div className="order-1 lg:order-1">
              <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
                <h3 className="text-lg text-foreground text-right mb-6">
                  خلاصه سفارش
                </h3>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm pb-3 border-b border-border"
                    >
                      <span className="text-foreground">
                        {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                      </span>
                      <span className="text-muted-foreground">
                        {item.name} × {item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">
                      {subtotal.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-muted-foreground">جمع کل:</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">
                      {shipping.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-muted-foreground">هزینه ارسال:</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xl text-accent">
                      {total.toLocaleString('fa-IR')} تومان
                    </span>
                    <span className="text-foreground">مبلغ نهایی:</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
