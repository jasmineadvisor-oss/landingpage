import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    inquiry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Liên hệ tư vấn
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
            Liên hệ cho chúng tôi nếu bạn muốn tìm hiểu thêm về những dịch vụ chúng tôi cung cấp hoặc nếu bạn đã sẵn sàng bắt đầu ngay!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                  placeholder="Nhập họ của bạn"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none hover:border-gray-400"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Vui lòng cho chúng tôi biết nhu cầu của bạn <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="inquiry"
                    value="learn-more"
                    checked={formData.inquiry === 'learn-more'}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-justify">
                    Tôi biết chương trình EB-5 yêu cầu khoản đầu tư 800.000 đô la và tôi muốn tìm hiểu thêm.
                  </span>
                </label>

                <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="inquiry"
                    value="find-project"
                    checked={formData.inquiry === 'find-project'}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-justify">
                    Tôi biết chương trình EB-5 và đang tìm kiếm dự án phù hợp.
                  </span>
                </label>

                <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="inquiry"
                    value="consultation"
                    checked={formData.inquiry === 'consultation'}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-justify">
                    Tôi cần tư vấn các vấn đề liên quan tới EB-5.
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Liên hệ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
