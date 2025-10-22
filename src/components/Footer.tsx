import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img src="/loyalpass copy copy.png" alt="Loyalpass" className="h-12 w-auto mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where there's a will, there's a way. Người bạn đồng hành đáng tin cậy trong lĩnh vực đầu tư định cư  EB-5 hơn 10+ năm kinh nghiệm.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>098 952 62 63</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@eb5loyalpass.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <span>Phục vụ khách hạng Việt Nam trên toàn cầu<br />Văn phòng chính tại TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>
          </div>



          <div>
            <h4 className="text-lg font-semibold mb-6">Thông báo quan trọng</h4>
            <div className="bg-red-900 border border-red-700 rounded-lg p-4 mb-6">
              <p className="text-red-200 text-sm">
                Chính sách bảo lưu RIA sẽ hết hiệu lực vào 30/09/2026. Đừng bỏ lỡ mốc thời gian quan trọng này.
              </p>
            </div>
            <a 
              href="https://eb5loyalpass.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Truy cập website chính
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2025 Loyalpass. Bảo lưu mọi quyền
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition-colors">Miễn trừ trách nhiệm</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;