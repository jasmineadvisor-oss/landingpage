import React, { useEffect, useRef, useState } from 'react';
import { Zap, Users, TrendingUp as Trending, ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
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
  const benefits = [
    {
      icon: Zap,
      title: "EB-5 - Con đường nhanh nhất để định cư",
      description: "Bỏ qua các hàng chờ di trú truyền thống, trở thành thường trú nhân bằng con đường trực tiếp thông qua việc đầu tư chiến lược.",
      features: ["Không yêu cầu người bảo lãnh", "Thẻ xanh nhanh chóng chỉ từ 6-24 tháng"]
    },
    {
      icon: Users,
      title: "Lợi ích cho cả gia đình",
      description: "Thẻ xanh cho cả gia đình bao gồm vợ chồng và các con dưới 21 tuổi còn độc thân.",
      features: ["Trờ thành công dân Hoa Kỳ sau 5 năm nhập cư"]
    },
    {
      icon: Trending,
      title: "Cơ hội vượt trội",
      description: "Tiếp cận nền giáo dục, y tế đẳng cấp thế giới",
      features: ["Ưu đãi học phí dành riêng cho thường trú nhân Hoa Kỳ", "Mở ra các cơ hội kinh doanh và tự do sống ở bất cứ "]
    }
  ];

  return (
    <section ref={sectionRef} id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            EB-5 Cánh cửa tới Hoa Kỳ một cách nhanh chóng và hiệu quả
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chương trình EB-5 mang lại những lợi thế vượt trội cho các nhà đầu tư đang tìm kiếm thẻ thường trú nhân.
            Với hạn chót năm 2026 đang đến gần, đây là thời điểm để thực hiện.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer flex flex-col ${
                isVisible ? `animate-on-scroll animate-delay-${index}00` : 'opacity-0'
              }`}
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div className="bg-blue-600 rounded-xl p-3.5 w-fit mb-6 group-hover:bg-blue-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300 min-h-[4rem]">{benefit.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-left">{benefit.description}</p>

              <ul className="space-y-3 mb-6 flex-grow">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-700 group/item hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0 group-hover/item:text-blue-700 group-hover/item:translate-x-1 group-hover/item:scale-110 transition-all duration-300" />
                    <span className="text-sm leading-relaxed text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="text-blue-600 font-semibold group-hover:text-blue-700 transition-all duration-300 inline-flex items-center gap-2 mt-auto group-hover:gap-3">
                Tìm hiểu thêm
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;