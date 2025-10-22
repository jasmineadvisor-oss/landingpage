import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
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

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const testimonials = [
    {
      name: "Chị Trần N.T.N.",
      location: "Chấp thuận I-526E ngày 19/9/2025",
      image: "/ava.webp",
      rating: 5,
      text: "Bắt tay với gia đình chúng tôi từ tháng 11/2024, chỉ trong vòng 4 tháng  với một phong cách làm việc chuyên nghiệp, cẩn thận, kiên trì và phối hợp nhiệt tình của đội ngũ Loyalpass đã giúp cho gia đình tôi chuẩn bị được một bộ hồ sơ hoàn thiện có rất nhiều chi tiết trong đó có những phần tưởng khó mà thực hiện để chúng tôi được USCIS xác nhận hồ sơ vào ngày 05/03/2025. Chính nhờ sự chuẩn bị khoa học, hợp lý, chặt chẽ nên bộ hồ sơ của chúng tôi đã được USCIS chấp thuận chỉ trong một thời gian ngắn 6.5 tháng vào ngày 19/09/2025.\n\nGia đình chúng tôi chân thành cảm ơn sự nhiệt tình của Loyalpass, một công ty rất trẻ trong lĩnh vực tư vấn di trú định cư nhưng đã giúp niềm tin của chúng tôi được khẳng định vững chắc. Chúng tôi tin rằng Loyalpass với đội ngũ các bạn tư vấn chuyên nghiệp, nhiệt tình, cẩn trọng sẽ giúp cho Loyalpass ngày càng phát triển vững bền trong lĩnh vực tư vấn di trú.",
      year: "Dự án EB-5 ưu tiên - Rural TEA"
    },
    {
      name: "Anh Nguyen H.T.", 
      location: "Chấp thuận I-526E ngày 21/01/2025",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Là khách hàng của Cty Loyalpass gia đình chúng tôi  gồm năm thành viên từ tháng 02/2024 được sự hướng dẫn của quí Công ty Loyalpass , chúng tôi đã hoàn tất việc nộp hồ sơ và đến 20/01/2025 chúng tôi nhận được thư chấp thuận của USCIS . Thật sự đó là một thành công và tin vui cho sự hợp tác thật hiệu quả của Quí Công ty.\n\nQua quá trình làm việc, được sự đồng hành và hỗ trợ rất nhiệt tình , tích cực và chuyên nghiệp của đội ngũ anh chị em  Loyalpass gia đình chúng tôi thật sự yên tâm và hạnh phúc vì đã đạt được kết quả đến hôm nay. Mong rằng trong thời gian tới Cty Loyalpass không ngừng phát triển và thành công hơn nữa để giúp đỡ các nhà đầu tư Việt Nam có điều kiện định cư tại Mỹ.",
      year: "Dự án EB-5 ưu tiên - Rural TEA"
    },
    {
      name: "Anh Trương K. H & Chị Lê T. D. V.",
      location: "Chấp thuận I-526E ngày 06/08/2025",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Thân gửi Team Loyalpass,\n\nLời đầu tiên, gia đình anh chị xin gửi lời cảm ơn chân thành đến đội ngũ Loyalpass đã tận tâm hỗ trợ và đồng hành cùng gia đình anh chị trong suốt quá trình làm hồ sơ EB-5 cho con. Là một người có nhiều kinh nghiệm làm việc với doanh nghiệp Hoa Kỳ và hiểu biết về di trú, nhưng anh cũng hết sức bất ngờ về kết quả của hồ sơ EB-5 của bé NGỌC, chỉ mất 6 tháng từ lúc bắt đầu mở hồ sơ cho đến khi nhận được thẻ xanh 2 năm, nhanh hơn cả mong đợi của gia đình.\n\nĐể có được kết quả tuyệt vời đó, gia đình tin rằng, nhờ sự chuyên nghiệp, nhiệt tình và minh bạch của các anh/chị trong công ty Loyalpass cũng như đối tác di trú tại Hoa Kỳ, đã kịp thời giải đáp mọi thắc mắc, từng bước thực hiện đều được hướng dẫn cẩn thận. Gia đình đã thật sự cảm thấy yên tâm tin tưởng khi làm việc với cty tư vấn Loyalpass.\n\nMột lần nữa, xin bày tỏ lời cảm ơn chân thành đến công ty. Chúc Loyalpass ngày càng phát triển và tiếp tục là người bạn đồng hành đáng tin cậy cho nhiều gia đình Việt Nam trên con đường định cư và hướng đến tương lai tốt đẹp hơn.\n\nThân mến,",
      year: "Dự án EB-5 ưu tiên - Rural TEA"
    },
    {
      name: "Em Trương B.N.",
      location: "Được cấp Thẻ Xanh tháng 8/2025",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Kính gửi anh chị trong team Loyalpass\n\nEm xin gửi lời cảm ơn đến team Loyalpass đã đồng hành, hỗ trợ và luôn sát cánh cùng em và gia đình trong suốt hành trình làm hồ sơ EB-5.\n\nLà một du học sinh đang học tại Mỹ, ban đầu em và ba mẹ cũng khá lo lắng, bỡ ngỡ vì không biết bắt đầu từ đâu. Nhưng nhờ sự hướng dẫn tận tình, rõ ràng và rất chuyên nghiệp từ Loyalpass mọi thứ trở nên nhẹ nhàng và suôn sẻ hơn rất nhiều. Đặc biệt, việc nhận được thẻ xanh có điều kiện (2 năm) chỉ sau 6 tháng thật sự là một kết quả ngoài mong đợi đối với cả gia đình em.\n\nTrong suốt quá trình đó, em luôn cảm nhận được sự tận tâm, nhanh chóng và uy tín từ phía công ty – từ việc chuẩn bị giấy tờ, tư vấn đầu tư, đến những lúc giải đáp từng thắc mắc nhỏ của em và ba mẹ. Sự đồng hành của Loylpass không chỉ giúp em đạt được kết quả như mong muốn, mà còn mang lại cảm giác yên tâm và tin tưởng tuyệt đối cho gia đình em.\n\nHy vọng Loyalpass sẽ tiếp tục đồng hành cùng em và ba mẹ cho đến khi em nhận được thẻ xanh vĩnh viễn và hoàn tất việc nhận lại khoản đầu tư. Một lần nữa, em xin cảm ơn công ty đã luôn là chỗ dựa vững chắc trong hành trình quan trọng này của em.",
      year: "Dự án EB-5 ưu tiên - Rural TEA"
    },
    {
      name: "Gia đình [Benz Nancy Kevin and Annie]",
      location: "Được cấp Thẻ Xanh 10/10/2025",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Từ những ngày đầu tiên làm việc, Loyalpass đã mang đến cho gia đình chúng tôi những ấn tượng và ký ức thật đẹp - từ cách tư vấn rõ ràng, trung thực và chi tiết, đến sự tận tâm của đội ngũ trong từng bước chuẩn bị hồ sơ, giải thích quy trình và hỗ trợ thủ tục. Chúng tôi đặc biệt cảm kích vì thời gian xử lý hồ sơ nhanh chóng và minh bạch, cùng sự đồng hành sát sao trong suốt quá trình thực hiện chương trình đầu tư EB-5 theo đạo luật mới. Loyalpass đã giúp mọi bước đi trở nên nhẹ nhàng và an tâm - đúng nghĩa là “người bạn đồng hành đáng tin cậy” trên hành trình đến nước Mỹ.\n\nGiờ đây, gia đình chúng tôi đã ổn định cuộc sống tại Hoa Kỳ, trong một môi trường tuyệt vời về khí hậu, giáo dục và cơ hội phát triển cho con cái. Chúng tôi đã có rất nhiều chuyến đi đáng nhớ - từ những kỳ nghỉ hè, Spring Break, đến các hành trình khám phá từ bờ Đông sang bờ Tây, qua những thành phố như Boston, New York, Washington D.C. San Francisco, Los Angeles, Houston, Dallas, Austin... và nhiều nơi khác. Mỗi chuyến đi là một trang ký ức hạnh phúc, là minh chứng cho thành quả mà Loyalpass đã giúp chúng tôi đạt được - một giấc mơ Mỹ trọn vẹn và thật sự.",
      year: "Dự án EB-5 ưu tiên - Rural TEA"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Khách hàng nói về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hãy lắng nghe những chia sẻ từ khách hàng của chúng tôi và bắt đầu hành trình EB-5 của bạn ngay hôm nay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedCards.has(index);
            const isLongText = testimonial.text.length > 200;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out group cursor-pointer ${
                  isVisible ? `animate-on-scroll animate-delay-${(index % 2) * 100}` : 'opacity-0'
                }`}
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${starIndex * 50}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
                  <div
                    className="cursor-pointer"
                    onClick={() => isLongText && toggleExpand(index)}
                  >
                    <div
                      className={`text-gray-700 leading-relaxed mb-2 pl-6 transition-all duration-300 ${
                        !isExpanded && isLongText ? 'line-clamp-3' : ''
                      }`}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: !isExpanded && isLongText ? 3 : 'unset',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {testimonial.text.split('\n').map((paragraph, pIndex) => (
                        paragraph.trim() && (
                          <p key={pIndex} className="mb-3 last:mb-0 text-justify">
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                    {isLongText && (
                      <button
                        className="text-blue-600 text-sm font-semibold hover:text-blue-700 hover:gap-1 transition-all pl-6 inline-flex items-center gap-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                      >
                        {isExpanded ? 'Thu gọn' : 'Xem thêm...'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 group-hover:border-blue-200 pt-4 mt-4 transition-colors duration-300">
                  <span className="font-medium">{testimonial.project}</span>
                  <span className="font-medium">Approved {testimonial.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center ${
          isVisible ? 'animate-on-scroll animate-delay-300' : 'opacity-0'
        }`}>
          <div className="relative bg-blue-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="/img3.jpg"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Hãy trở thành câu chuyện thành công tiếp theo của chúng tôi</h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                "Hơn 500 gia đình đã tin tưởng chúng tôi trong hành trình EB-5. Hãy để chúng tôi giúp bạn trở thành câu chuyện thành công tiếp theo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold">
                  Đọc thêm các câu chuyện thành công
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold">
                  Đặt lịch tư vấn ngay hôm nay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;