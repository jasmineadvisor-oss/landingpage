import React, { useEffect, useRef, useState } from 'react';
import { FileText, Search, Shield, Users, CheckCircle2, Clock } from 'lucide-react';

const HowWePrepare: React.FC = () => {
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
  const preparations = [
    {
      icon: Search,
      title: "Thẩm định toàn diện",
      description: "Chúng tôi tiến hành phân tích dự án kỹ lưỡng, kiểm tra lý lịch nhà phát triển và nghiên cứu thị trường để xác định các cơ hội đầu tư an toàn nhất.",
      features: ["Phân tích tài chính đảm bảo an toàn cho khoản đầu tư", "Đánh giá tuân thủ pháp lý đảm bảo an toàn thẻ xanh vĩnh viễn", "Nghiên cứu thị trường đánh giá tính khả thi của dự án", "Đánh giá rủi ro và các biện pháp hạn chế rủi ro"]
    },
    {
      icon: FileText,
      title: "Quy trình chuẩn bị hồ sơ kỹ lưỡng",
      description: "Đội ngũ của chúng tôi chuẩn bị các bộ hồ sơ với tiêu chí đầy đủ, đảm bảo tuân thủ mọi tiêu chuẩn khắt khe, và đáp ứng các xu hướng xét duyệt của USCIS.",
      features: ["Chuẩn bị kỹ trong từng chi tiết hồ sơ nguồn vốn", "Xem xét kỹ lưỡng tính pháp lý, thống nhất của từng tài liệu", "Hồ sơ nguồn vốn được trình bày khoa học, mạch lạc", "Xem xét kỹ lưỡng hồ sơ của bạn qua nhiều bước, đảm bảo đáp ứng mọi yêu cầu của USCIS"]
    },
    {
      icon: Shield,
      title: "Chiến lược giảm thiểu rủi ro",
      description: "Chúng tôi xác định những thách thức tiềm ẩn trước khi chúng trở thành vấn đề, thực hiện các biện pháp bảo vệ trong suốt hành trình EB-5 của bạn.",
      features: ["Đánh giá kỹ lưỡng tính phù hợp của từng khách hàng với chương trình EB-5", "Cập nhật liên tục sự thay đổi trong chính sách xét duyệt nhập cư của chính phủ Hoa Kỳ", "Giám sát tuân thủ đảm bảo dự án tuân thủ mọi quy định của USCIS", "Giám sát dự án theo dõi sát sao tiến độ và hiệu quả của dự án đầu tư"]
    },
    {
      icon: Users,
      title: "Đội ngũ hỗ trợ tận tâm đồng hành cùng khách hàng",
      description: "Tại Loyalpass, chúng tôi hiểu rằng mỗi hồ sơ EB-5 là một hành trình cá nhân quan trọng. Vì vậy chúng tôi cung cấp dịch vụ trọn gói, minh bạch và cam kết đồng hành cùng khách hàng từ bước chuẩn bị đến khi hoàn tất.",
      features: ["Mỗi khách hàng sẽ có đội ngũ phụ trách chuyên biệt", "Hồ sơ của khách hàng được theo dõi kỹ lưỡng, cập nhật tiến độ định kỳ", "Giám sát của luật sư - mọi quyết định và các bước thực hiện đều có tư vấn pháp lý chuyên sâu", "Hỗ trợ 24/7 - đội ngũ sẵn sàng giải đáp và xử lý khẩn cấp bất kỳ lúc nào"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-on-scroll' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Loyalpass chuẩn bị cho khách hàng thành công như thế nào?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thành công trong EB-5 đến từ sự chuẩn bị tỉ mỉ, hướng dẫn chuyên môn và sự tận tâm. Loyalpass giúp khách hàng tiết kiệm thời gian, công sức và tối ưu hóa cơ hội đạt được thẻ xanh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {preparations.map((prep, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 ease-out group flex flex-col h-full cursor-pointer ${
                isVisible ? `animate-on-scroll animate-delay-${Math.min(index, 3)}00` : 'opacity-0'
              }`}
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
              }}
            >
              <div className="flex items-start space-x-5 mb-6">
                <div className="bg-blue-600 rounded-xl p-3.5 group-hover:bg-blue-700 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-md">
                  <prep.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-300">{prep.title}</h3>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 leading-relaxed text-base text-justify">{prep.description}</p>

                <div className="mt-auto space-y-3.5 pt-4 border-t border-gray-100">
                  {prep.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start text-gray-700 group/item hover:translate-x-1 transition-transform duration-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 mt-1 flex-shrink-0 group-hover/item:text-green-600 group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-sm leading-relaxed text-justify">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWePrepare;