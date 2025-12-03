import { useState } from 'react';
import { ClipboardList, Eye, Package } from 'lucide-react';
import { EmptyState } from '../../components/EmptyState';

export function OrdersManagement() {
  const [showEmpty, setShowEmpty] = useState(true);

  // Mock orders data
  const orders = showEmpty
    ? []
    : [
        {
          id: '۱۰۲۳۴۵',
          customer: 'علی احمدی',
          amount: '۲,۴۵۰,۰۰۰',
          status: 'در حال پردازش',
          date: '۱۴۰۳/۰۹/۱۳',
          items: 3,
        },
        {
          id: '۱۰۲۳۴۴',
          customer: 'زهرا محمدی',
          amount: '۸۵۰,۰۰۰',
          status: 'تحویل شده',
          date: '۱۴۰۳/۰۹/۱۲',
          items: 1,
        },
        {
          id: '۱۰۲۳۴۳',
          customer: 'رضا کریمی',
          amount: '۱,۲۵۰,۰۰۰',
          status: 'در حال ارسال',
          date: '۱۴۰۳/۰۹/۱۲',
          items: 2,
        },
        {
          id: '۱۰۲۳۴۲',
          customer: 'فاطمه رضایی',
          amount: '۳۵۰,۰۰۰',
          status: 'تحویل شده',
          date: '۱۴۰۳/۰۹/۱۱',
          items: 1,
        },
      ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تحویل شده':
        return 'bg-green-100 text-green-700';
      case 'در حال ارسال':
        return 'bg-blue-100 text-blue-700';
      case 'در حال پردازش':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8" dir="rtl">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl text-foreground">مدیریت سفارشات</h1>
        <button
          onClick={() => setShowEmpty(!showEmpty)}
          className="w-full sm:w-auto px-4 py-3 bg-white border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm min-h-[44px]"
        >
          {showEmpty ? 'نمایش با محتوا' : 'نمایش حالت خالی'}
        </button>
      </div>

      {/* Content */}
      {orders.length > 0 ? (
        <>
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
                      تعداد محصولات
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      مبلغ (تومان)
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      تاریخ
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      مشتری
                    </th>
                    <th className="text-right py-4 px-4 text-sm text-muted-foreground">
                      شماره سفارش
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <button className="flex items-center gap-2 text-primary hover:underline text-sm">
                          <Eye className="w-4 h-4" />
                          <span>مشاهده</span>
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-foreground">{order.items} محصول</td>
                      <td className="py-4 px-4 text-foreground">{order.amount}</td>
                      <td className="py-4 px-4 text-foreground">{order.date}</td>
                      <td className="py-4 px-4 text-foreground">{order.customer}</td>
                      <td className="py-4 px-4 text-foreground">#{order.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    #{order.id}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-right">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{order.customer}</span>
                    <span className="text-sm text-muted-foreground">مشتری:</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{order.date}</span>
                    <span className="text-sm text-muted-foreground">تاریخ:</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{order.items} محصول</span>
                    <span className="text-sm text-muted-foreground">تعداد:</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-lg text-foreground">{order.amount} تومان</span>
                    <span className="text-sm text-muted-foreground">مبلغ کل:</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors min-h-[44px]">
                  <Eye className="w-4 h-4" />
                  <span>مشاهده جزئیات</span>
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white border border-border rounded-lg">
          <EmptyState
            icon={ClipboardList}
            title="سفارشی ثبت نشده"
            message="هنوز سفارشی از طریق سایت ثبت نشده است"
          />

          {/* Info Box - Responsive */}
          <div className="px-4 md:px-8 pb-4 md:pb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 text-right">
              <div className="flex items-start gap-3 justify-end">
                <div>
                  <h3 className="text-foreground mb-2 text-sm md:text-base">راهنمای شروع:</h3>
                  <ul className="text-xs md:text-sm text-muted-foreground space-y-2">
                    <li>• اطمینان حاصل کنید که محصولات در فروشگاه موجود هستند</li>
                    <li>• لینک فروشگاه را با مشتریان خود به اشتراک بگذارید</li>
                    <li>• درگاه پرداخت را فعال کرده‌اید</li>
                    <li>• اطلاعات تماس و آدرس را در تنظیمات تکمیل کنید</li>
                  </ul>
                </div>
                <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
