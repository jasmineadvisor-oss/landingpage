import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
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
    <section ref={sectionRef} className="relative bg-cover bg-center bg-no-repeat pt-24 pb-16" style={{ backgroundImage: "url('/banner-web-eb5-1 copy copy.webp')" }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              <Clock className="h-4 w-4 mr-2" />
              Nộp hồ sơ để được bảo vệ quyền lợi toàn diện trước: 30 tháng 9, 2026
            </div>
            
            <h1 className={`text-5xl lg:text-5xl font-bold text-black mb-6 leading-snug lg:leading-snug transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Xây dựng<span className="text-blue-600"> TƯƠNG LAI</span><br />
              vững chắc tại<span className="text-blue-600"> HOA KỲ</span>
            </h1>
            
            <p className={`text-xl text-white mb-8 leading-relaxed bg-blue-600 p-6 rounded-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
              An tâm đầu tư EB-5 trước khi Luật Bất Hồi Tố hết hiệu lực. Với 10 năm kinh nghiệm và 500+ nhà đầu tư thành công, chúng tôi hiểu rõ cách bảo vệ quyền lợi của bạn. Hãy để chúng tôi giúp bạn định cư Hoa Kỳ một cách nhanh chóng và hiệu quả.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                Bắt đầu hành trình EB-5 của bạn
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
            
            <div className={`flex items-center space-x-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-gray-100">Thành tích đã được chứng minh</span>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-gray-100">Hơn 500 hồ sơ thành công</span>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nắm bắt cơ hội đầu tư ngay hôm nay</h3>
              <ul className="space-y-4">
                <li className={`flex items-start p-4 rounded-xl transition-all duration-500 hover:bg-red-50 hover:scale-[1.02] hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '500ms' }}>
                  <div className="bg-red-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Bảo vệ khoản đầu tư EB-5 của bạn. 30/09/2026 là cơ hội cuối cùng để bảo lưu quyền lợi nhà đầu tư (Grandfathering)</span>
                </li>
                <li className={`flex items-start p-4 rounded-xl transition-all duration-500 hover:bg-blue-50 hover:scale-[1.02] hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '600ms' }}>
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Nộp hồ sơ sớm - Ưu tiên xét duyệt, rút ngắn thời gian chờ đợi</span>
                </li>
                <li className={`flex items-start p-4 rounded-xl transition-all duration-500 hover:bg-green-50 hover:scale-[1.02] hover:shadow-md ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '700ms' }}>
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Số lượng dự án EB-5 chất lượng, đặc biệt là các dự án ưu tiên phê duyệt (Rural) đang trở nên khan hiếm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;