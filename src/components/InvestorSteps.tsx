import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const InvestorSteps: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      step: "01",
      title: "Tư vấn ban đầu",
      description: "Tư vấn miễn phí để đánh giá đủ điều kiện và thảo luận về mục tiêu nhập cư của bạn.",
      timeline: "Ngày 1"
    },
    {
      step: "02", 
      title: "Hồ sơ chứng minh nguồn gốc vốn",
      description: "Thu thập và chuẩn bị tài liệu toàn diện chứng minh nguồn gốc hợp pháp của vốn đầu tư.",
      timeline: "Tuần 1-4"
    },
    {
      step: "03",
      title: "Lựa chọn dự án và đăng ký suất",
      description: "Chọn từ danh mục các dự án EB-5 đã được chúng tôi thẩm định kỹ lưỡng, ưu tiên an toàn Thẻ Xanh và bảo toàn vốn đầu tư.",
      timeline: "Tuần 2-6"
    },
    {
      step: "04",
      title: "Đầu tư",
      description: "Hoàn thành ký hồ sơ dự án và chuyển tiền vào tài khoản ký quỹ của dự án đã chọn.",
      timeline: "Tuần 6-8"
    },
    {
      step: "05",
      title: "Nộp đơn I-526E",
      description: "Hoàn thiện hồ sơ, Nộp đơn I-526E vào Sở Di trú và Nhập tịch Hoa Kỳ (USCIS).",
      timeline: "Tuần 8-10"
    },
    {
      step: "06",
      title: "Chấp thuận đơn I-526E",
      description: "USCIS xem xét và phê duyệt đơn I-526E của bạn. Thời gian phê duyệt ưu tiên dành cho dự án Rural.",
      timeline: "6-12 tháng"
    },
    {
      step: "07",
      title: "Phỏng vấn và Thẻ xanh có điều kiện",
      description: "Hồ sơ được chuyển qua NVC và lên lịch phỏng vấn tại Lãnh Sự Quán. Nhận thẻ xanh có điều kiện có hiệu lực trong hai năm.",
      timeline: "Tháng 18-24"
    },
    {
      step: "08",
      title: "Nộp đơn I-829- Xoá bỏ điều kiện",
      description: "Nộp đơn I-829 để xóa các điều kiện và nhận thẻ xanh vĩnh viễn.",
      timeline: "Tháng 21-24"
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && stepRefs.current[index]) {
          observer.unobserve(stepRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section id="process" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Quy trình thực hiện hồ sơ EB-5
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quy trình đã được chứng minh của chúng tôi đảm bảo mọi chi tiết đều được xử lý đúng cách, từ tư vấn ban đầu đến khi thẻ xanh vĩnh viễn được chấp thuận.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`relative transform transition-all duration-700 ${
                visibleSteps[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-blue-600">
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {stepItem.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight pr-2">{stepItem.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2.5 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap self-start">
                        {stepItem.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed break-words text-justify">{stepItem.description}</p>
                  </div>

                  <div className="text-green-600 hidden sm:block flex-shrink-0">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-3 sm:my-4">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="relative bg-blue-600 text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/img6.jpg"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">Tổng thời gian: 6-24 tháng để có thẻ xanh</h3>
              <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-5 sm:mb-6 leading-relaxed">
                Với sự chuẩn bị đúng đắn và hướng dẫn chuyên môn, hầu hết khách hàng của chúng tôi đạt được thẻ xanh trong vòng 6 đến 24 tháng.
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
              >
                Bắt đầu Lộ trình của bạn ngay hôm nay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSteps;