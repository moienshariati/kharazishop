import { useState } from 'react';
import { Header } from './components/Header';
import { HeroEnhanced } from './components/HeroEnhanced';
import { CategoryBanner } from './components/CategoryBanner';
import { ProductSection } from './components/ProductSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackgroundPattern } from './components/BackgroundPattern';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserAccountPage } from './pages/UserAccountPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/error/NotFoundPage';
import { ServerErrorPage } from './pages/error/ServerErrorPage';
import { PaymentFailedPage } from './pages/error/PaymentFailedPage';
import { NetworkErrorPage } from './pages/error/NetworkErrorPage';

type PageView = 
  | 'home' 
  | 'category' 
  | 'product-detail' 
  | 'cart' 
  | 'checkout' 
  | 'order-confirmation'
  | 'user-account'
  | 'admin-dashboard'
  | 'about'
  | 'contact'
  | 'error-404'
  | 'error-500'
  | 'error-payment'
  | 'error-network';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Demo navigation - you can change this to test different pages
  // Mock product data
  const bestSellers = [
    {
      id: 1,
      name: 'ست سوزن و نخ ۵۰ عددی حرفه‌ای',
      price: '۱۲۵,۰۰۰ تومان',
      originalPrice: '۱۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1707914703075-f3715997075b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBuZWVkbGVzJTIwdGhyZWFkfGVufDF8fHx8MTc2NDc1OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 124,
      discount: '۱۷٪ تخفیف',
      inStock: true,
    },
    {
      id: 2,
      name: 'قیچی خیاطی ۲۵ سانتی استیل',
      price: '۱۸۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBzY2lzc29ycyUyMGN1dHRpbmd8ZW58MXx8fHwxNzY0NzU5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 89,
      inStock: true,
    },
    {
      id: 3,
      name: 'ماشین دوخت صنعتی ژانومه',
      price: '۱۸,۵۰۰,۰۰۰ تومان',
      originalPrice: '۲۱,۰۰۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1678978334864-08a83604276e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBtYWNoaW5lJTIwY2xvc2V8ZW58MXx8fHwxNzY0NzU5OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 56,
      discount: '۱۲٪ تخفیف',
      inStock: true,
    },
    {
      id: 4,
      name: 'جعبه نظم‌دهنده خیاطی چوبی',
      price: '۳۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1760815011296-0e6af2b06f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBzdXBwbGllcyUyMG9yZ2FuaXplZHxlbnwxfHx8fDE3NjQ3NTk5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 203,
      inStock: true,
    },
  ];

  const newArrivals = [
    {
      id: 5,
      name: 'نخ DMC رنگی ۱۰۰ عددی',
      price: '۴۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1609803987666-4893656c7e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwdGhyZWFkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0NzU5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 45,
      inStock: true,
    },
    {
      id: 6,
      name: 'دکمه فلزی طلایی بسته ۲۰ تایی',
      price: '۶۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1566753627172-6b4ab24343c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1dHRvbnMlMjBjcmFmdHxlbnwxfHx8fDE3NjQ3NTk5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 32,
      inStock: true,
    },
    {
      id: 7,
      name: 'زیپ فلزی رنگی بسته ۵۰ تایی',
      price: '۲۲۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1727516684797-d042ca80cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBwZXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2NDc1NDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 12,
      inStock: true,
    },
    {
      id: 8,
      name: 'پارچه مخمل لوکس - یک متر',
      price: '۱۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1758546407134-42b017d5f011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzY0NzA2NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 67,
      inStock: true,
    },
  ];

  const specialOffers = [
    {
      id: 9,
      name: 'روبان ساتن رنگی - بسته ۳۰ رنگ',
      price: '۱۸۰,۰۰۰ تومان',
      originalPrice: '۲۵۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1535551393484-1a1907f51759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWJib24lMjByb2xscyUyMGNyYWZ0fGVufDF8fHx8MTc2NDc1OTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 38,
      discount: '۳۰٪ تخفیف',
      inStock: true,
    },
    {
      id: 10,
      name: 'سنجاق سینه مرواریدی بسته ۱۲ تایی',
      price: '۴۵,۰۰۰ تومان',
      originalPrice: '۶۵,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1710432103939-ba474632b9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBuZWVkbGVzJTIwcGluc3xlbnwxfHx8fDE3NjQ3NTk5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 91,
      discount: '۳۱٪ تخفیف',
      inStock: true,
    },
    {
      id: 11,
      name: 'گل سر تزئینی دخترانه - بسته ۲۰ عددی',
      price: '۱۲۰,۰۰۰ تومان',
      originalPrice: '۱۶۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1718049942873-58bd663206dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdHJpbSUyMHNld2luZ3xlbnwxfHx8fDE3NjQ3NTk5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      reviewCount: 24,
      discount: '۲۵٪ تخفیف',
      inStock: true,
    },
    {
      id: 12,
      name: 'خط‌کش الگو و متر خیاطی',
      price: '۷۵,۰۰۰ تومان',
      originalPrice: '۱۰۰,۰۰۰ تومان',
      image: 'https://images.unsplash.com/photo-1593059127036-6f447853774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwc2V3aW5nfGVufDF8fHx8MTc2NDc1OTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      reviewCount: 76,
      discount: '۲۵٪ تخفیف',
      inStock: true,
    },
  ];

  // Render different pages based on currentPage state
  if (currentPage === 'category') {
    return <CategoryPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'product-detail') {
    return <ProductDetailPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'cart') {
    return <CartPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'checkout') {
    return <CheckoutPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'order-confirmation') {
    return <OrderConfirmationPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'user-account') {
    return <UserAccountPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'admin-dashboard') {
    return <AdminDashboard onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'about') {
    return <AboutPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'error-404') {
    return <NotFoundPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'error-500') {
    return <ServerErrorPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'error-payment') {
    return <PaymentFailedPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'error-network') {
    return <NetworkErrorPage onNavigate={setCurrentPage} />;
  }

  // Default: Home page
  return (
    <div className="min-h-screen bg-background relative" dir="rtl">
      <BackgroundPattern />
      <ScrollProgress />
      <Header onNavigate={setCurrentPage} cartCount={3} />
      <main className="relative overflow-hidden z-10">
        <HeroEnhanced onNavigate={setCurrentPage} />
        <CategoryBanner onNavigate={setCurrentPage} />
        <ProductSection 
          title="محصولات پرفروش" 
          products={bestSellers} 
          onNavigate={setCurrentPage}
          variant="bestsellers"
        />
        <ProductSection 
          title="محصولات جدید" 
          products={newArrivals} 
          onNavigate={setCurrentPage}
          variant="new-arrivals"
        />
        <div id="special-offers">
          <ProductSection 
            title="تخفیف‌های امروز" 
            products={specialOffers} 
            onNavigate={setCurrentPage}
            variant="special-offers"
          />
        </div>
      </main>
      <FeaturesSection />
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
