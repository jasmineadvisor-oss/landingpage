import React from 'react';
import { Phone, Mail, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/loyalpass copy.png" alt="LoyalPass" className="h-10 w-auto" />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Quyền lợi</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Về chúng tôi</a>
            <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">Quy trình</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Câu chuyện thành công</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>098 952 62 63</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@eb5loyalpass.com</span>
              </div>
            </div>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Đặt lịch tư vấn
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;