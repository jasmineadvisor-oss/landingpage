import React, { useEffect, useRef, useState } from 'react';
import { Shield, MapPin, TrendingUp } from 'lucide-react';

const WhyEB5Guide: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            EB-5 Rất Khác Biệt & bạn cần những hướng dẫn chính xác
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chương trình EB-5 không giống bất kỳ chương trình nhập cư nào khác, với những phức tạp đặc thù đòi hỏi sự hướng dẫn của chuyên gia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <TrendingUp className="h-12 w-12 text-blue-600 mb-6 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Đầu tư EB-5 yêu cầu chịu sự rủi ro
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              USCIS yêu cầu khoản đầu tư của bạn cần chịu sự rủi ro, việc đánh giá các rủi ro tiềm ẩn và các biện pháp giảm thiểu rủi ro giúp khoản đầu tư của bạn được an toàn. Đồng hành cùng hơn 500 nhà đầu tư EB-5 Việt Nam, chúng tôi có bộ tiêu chuẩn đánh giá một dự án EB-5 an toàn, giúp bảo vệ vốn đầu tư của bạn.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <MapPin className="h-12 w-12 text-green-600 mb-6 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              USCIS thường xuyên thay đổi chính sách xét duyệt
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              USCIS phê duyệt đơn I-526E và I-829 theo những tiêu chuẩn nhất định, cơ quan này vẫn thường xuyên thay đổi chính sách phê duyệt liên quan tới nguồn tiền, chuyển tiền và việc sử dụng tiền EB-5 trong dự án. Làm việc với các hãng luật hàng đầu, thường xuyên hỗ trợ cộng đồng EB-5 Việt Nam, cho phép chúng tôi nắm bắt nhanh chóng xu hướng xét duyệt từ USCIS, giúp có những tư vấn phù hợp nhất cho khách hàng.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Shield className="h-12 w-12 text-red-600 mb-6 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Am hiểu tình hình di trú giúp bạn chuẩn bị tốt cho kế hoạch nhập cư
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              Nắm bắt được các tác động của chính sách nhập cư tới quá trình xử lý hồ sơ, giúp bạn có được kế hoạch chuẩn bị tốt nhất cho việc nhập cư. Cùng kinh nghiệm nhiều năm, trải qua nhiều biến động của chính sách nhập cư và chương trình EB-5, Loyalpass hỗ trợ các khách hàng có sự chuẩn bị và lộ trình nhập cư một cách chính xác, hiệu quả và bình tâm.
            </p>
          </div>
        </div>

        <div
          className={`bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg transition-all duration-700 transform hover:scale-102 hover:shadow-lg ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <div className="flex">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bạn đã sẵn sàng cho EB-5 vào 2026?</h4>
              <p className="text-gray-700 mb-4 text-justify">
                "BẢO VỆ KHOẢN ĐẦU TƯ EB-5 CỦA BẠN: Luật Bất Hồi Tố (RIA) mang đến sự bảo vệ quan trọng cho các nhà đầu tư, nhưng sẽ hết hiệu lực vào ngày 30/09/2026. Đừng bỏ lỡ cơ hội này! Đảm bảo suất đầu tư của bạn ngay bây giờ để tránh các yêu cầu khắt khe hơn và thời gian xử lý lâu hơn"
              </p>
              <button
                onClick={() => window.location.href = 'tel:0989526263'}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEB5Guide;