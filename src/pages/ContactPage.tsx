import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, Phone, Mail, Clock, Send, Instagram, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const breadcrumbItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'تماس با ما', href: '/contact' },
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'آدرس',
      content: 'تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۲',
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'تلفن',
      content: '۰۲۱-۱۲۳۴۵۶۷۸',
      color: 'accent',
    },
    {
      icon: Mail,
      title: 'ایمیل',
      content: 'info@kharazi.ir',
      color: 'primary',
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      content: 'شنبه تا پنجشنبه: ۹ صبح تا ۶ عصر',
      color: 'accent',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'نام و نام خانوادگی الزامی است';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'فرمت ایمیل صحیح نیست';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'شماره تماس الزامی است';
    } else if (!/^[\d۰-۹]+$/.test(formData.phone)) {
      newErrors.phone = 'شماره تماس باید فقط شامل اعداد باشد';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'موضوع الزامی است';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'پیام الزامی است';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'پیام باید حداقل ۱۰ کاراکتر باشد';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header onNavigate={onNavigate} cartCount={0} />

      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Page Header */}
        <section className="bg-gradient-to-b from-secondary/10 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl text-foreground mb-4">
                تماس با ما
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                ما همیشه آماده پاسخگویی به سوالات شما هستیم
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
                {/* RIGHT COLUMN: Contact Information */}
                <div className="order-2 lg:order-1 space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl text-foreground mb-6 text-right">
                      اطلاعات تماس
                    </h2>
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div
                          key={index}
                          className="bg-white border border-border rounded-xl p-6 text-right hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-4 justify-end">
                            <div className="flex-1">
                              <h3 className="text-lg text-foreground mb-2">
                                {info.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {info.content}
                              </p>
                            </div>
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                              info.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                            }`}>
                              <info.icon className={`w-6 h-6 ${
                                info.color === 'primary' ? 'text-primary' : 'text-accent'
                              }`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white border border-border rounded-xl p-6">
                    <h3 className="text-xl text-foreground mb-4 text-right">
                      ما را در شبکه‌های اجتماعی دنبال کنید
                    </h3>
                    <div className="flex gap-4 justify-end">
                      <a
                        href="#"
                        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="اینستاگرام"
                      >
                        <Instagram className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="تلگرام"
                      >
                        <Send className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="واتساپ"
                      >
                        <MessageCircle className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-white border border-border rounded-xl overflow-hidden">
                    <h3 className="text-xl text-foreground p-6 text-right border-b border-border">
                      موقعیت ما
                    </h3>
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-center p-4">
                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">نقشه موقعیت</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LEFT COLUMN: Contact Form */}
                <div className="order-1 lg:order-2">
                  <div className="bg-white border border-border rounded-xl p-6 md:p-8 sticky top-24">
                    <h2 className="text-2xl md:text-3xl text-foreground mb-6 text-right">
                      ارسال پیام
                    </h2>

                    {/* Success Message */}
                    {isSubmitted && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-right">
                        <p className="text-green-700">
                          پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-foreground mb-2 text-right"
                        >
                          نام و نام خانوادگی <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="نام کامل خود را وارد کنید"
                          className={`w-full px-4 py-3 bg-background border ${
                            errors.fullName ? 'border-destructive' : 'border-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right`}
                        />
                        {errors.fullName && (
                          <p className="text-destructive text-sm mt-1 text-right">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-foreground mb-2 text-right"
                        >
                          ایمیل <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          className={`w-full px-4 py-3 bg-background border ${
                            errors.email ? 'border-destructive' : 'border-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right`}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1 text-right">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-foreground mb-2 text-right"
                        >
                          شماره تماس <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          className={`w-full px-4 py-3 bg-background border ${
                            errors.phone ? 'border-destructive' : 'border-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right`}
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm mt-1 text-right">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-foreground mb-2 text-right"
                        >
                          موضوع <span className="text-destructive">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-background border ${
                            errors.subject ? 'border-destructive' : 'border-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right`}
                        >
                          <option value="">موضوع را انتخاب کنید</option>
                          <option value="product">سوال درباره محصولات</option>
                          <option value="order">پیگیری سفارش</option>
                          <option value="complaint">شکایت</option>
                          <option value="suggestion">پیشنهاد</option>
                          <option value="other">سایر موارد</option>
                        </select>
                        {errors.subject && (
                          <p className="text-destructive text-sm mt-1 text-right">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-foreground mb-2 text-right"
                        >
                          پیام <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="پیام خود را اینجا بنویسید..."
                          rows={6}
                          className={`w-full px-4 py-3 bg-background border ${
                            errors.message ? 'border-destructive' : 'border-border'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-right resize-none`}
                        />
                        {errors.message && (
                          <p className="text-destructive text-sm mt-1 text-right">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-md hover:shadow-lg"
                      >
                        <span>ارسال پیام</span>
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
