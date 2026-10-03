import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  HelpCircle,
  Smartphone,
  Search,
  ChevronDown,
  Phone,
  QrCode,
  ExternalLink
} from 'lucide-react';

/* FEATURE 1: Giải đáp thắc mắc khách hàng */
export const FaqView: React.FC = () => {
  const { data } = useApp();
  const faqs = data.faqs || [];
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Tính năng 01</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Giải Đáp Thắc Mắc Khách Hàng Tại Quầy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Các câu hỏi thường gặp về mở tài khoản, chuyển tiền, đăng ký FacePay sinh trắc học, thẻ ATM và thủ tục tín dụng.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nhập từ khóa thắc mắc (sinh trắc học, thẻ, lãi suất, eFAST)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 shadow-2xs"
        />
      </div>

      {/* FAQs List */}
      <div className="space-y-3 max-w-3xl">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full min-h-[50px] p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md shrink-0">
                    {faq.category}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-sky-700' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="p-8 text-center text-xs text-slate-400 bg-white rounded-2xl border border-slate-200">
            Không tìm thấy câu hỏi tương ứng. Vui lòng liên hệ trực tiếp chuyên viên tại quầy.
          </div>
        )}
      </div>

      {/* Direct Counter Advisor Banner */}
      <div className="bg-sky-50 border border-sky-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl">
        <div>
          <h3 className="font-bold text-sm text-slate-900 mb-0.5">
            Cần hỗ trợ trực tiếp tại quầy?
          </h3>
          <p className="text-xs text-slate-600">
            Chuyên viên tư vấn: <strong className="text-sky-950">{data.bankInfo.advisor.name}</strong> luôn sẵn sàng giải đáp mọi thủ tục.
          </p>
        </div>

        <a
          href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition-colors shrink-0"
        >
          <Phone className="w-4 h-4" />
          <span>Gọi tư vấn ({data.bankInfo.advisor.phone})</span>
        </a>
      </div>
    </div>
  );
};

/* FEATURE 2: Tải App VietinBank iPay */
export const DownloadIpayView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Smartphone className="w-4 h-4" />
          <span>Tính năng 02</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Tải Ứng Dụng Ngân Hàng Số VietinBank iPay Mobile
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Trải nghiệm hệ sinh thái tài chính và phong cách sống đỉnh cao với hơn 200+ tiện ích số hiện đại.
        </p>
      </div>

      {/* Download Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* iOS */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-6 text-center space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-3">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Dành cho iPhone (iOS)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Hỗ trợ iOS 13.0 trở lên, tải an toàn từ Apple App Store
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
            {/* Direct App Store QR Code representation */}
            <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://apps.apple.com/vn/app/vietinbank-ipay/id689443833"
                alt="QR Code iOS"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] text-slate-500 font-medium mt-2">
              Quét camera iPhone để tải ngay
            </span>
          </div>

          <a
            href="https://apps.apple.com/vn/app/vietinbank-ipay/id689443833"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <span>Mở Apple App Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Android */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-6 text-center space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-700 text-white flex items-center justify-center mb-3">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Dành cho Android (Samsung, Xiaomi, Oppo...)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tải an toàn chính thức từ Google Play Store
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
            <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex items-center justify-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://play.google.com/store/apps/details?id=com.vietinbank.ipay"
                alt="QR Code Android"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] text-slate-500 font-medium mt-2">
              Quét camera để cài đặt
            </span>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.vietinbank.ipay"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <span>Mở Google Play Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2">
        <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
          <div className="font-bold text-[#004b87] text-sm mb-1">0đ Phí Dịch Vụ</div>
          <p className="text-[11px] text-slate-600">Miễn phí mở tài khoản & chuyển tiền nhanh 24/7 liên ngân hàng trọn đời</p>
        </div>
        <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
          <div className="font-bold text-[#004b87] text-sm mb-1">FacePay Bảo Mật</div>
          <p className="text-[11px] text-slate-600">Xác thực sinh trắc học và căn cước gắn chip an toàn tuyệt đối</p>
        </div>
        <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-100">
          <div className="font-bold text-[#004b87] text-sm mb-1">Hệ Sinh Thái Toàn Diện</div>
          <p className="text-[11px] text-slate-600">Thanh toán hóa đơn, đặt vé máy bay, tàu hỏa, khách sạn và mua sắm VnShop</p>
        </div>
      </div>
    </div>
  );
};

/* FEATURE 3: Thử thách Game quầy */
export { GameChallengeView } from './GameChallengeView';

