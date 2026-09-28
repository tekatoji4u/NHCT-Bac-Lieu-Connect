import React from 'react';
import { useApp } from '../../context/AppContext';
import { Map, Globe2, ExternalLink, CheckCircle2, Phone, ArrowUpRight } from 'lucide-react';

export const QueryAddress2026View: React.FC = () => {
  const { data, showFeedbackModal } = useApp();
  const info = data.lookups.address2026;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Map className="w-4 h-4" />
          <span>Tính năng 13</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Truy Vấn Tên Khóm / Ấp Mới Từ Tháng 7/2026 (Bạc Liêu)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Công cụ hỗ trợ khách hàng tra cứu chính xác tên khóm, ấp, tổ dân phố sau đề án sắp xếp đơn vị hành chính tỉnh Bạc Liêu.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-50 text-[#004b87] flex items-center justify-center">
          <Map className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            {info.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Hệ thống cung cấp giao diện tra cứu tự động từ địa chỉ cũ sang địa chỉ khóm/ấp mới chuẩn hóa từ tháng 7/2026, giúp quý khách hoàn thiện hồ sơ ngân hàng nhanh chóng và chính xác.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={info.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <span>Mở Trang Web Truy Vấn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => showFeedbackModal()}
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Đánh giá kết quả tra cứu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const QueryNational2025View: React.FC = () => {
  const { data, showFeedbackModal } = useApp();
  const info = data.lookups.national2025;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>Tính năng 14</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Truy Vấn Địa Danh Toàn Quốc Sau Sáp Nhập Từ Tháng 07/2025
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Tra cứu mã vùng, địa danh hành chính cấp tỉnh, huyện, xã trên toàn quốc sau sáp nhập chính thức từ tháng 07/2025.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {info.imageUrl && (
            <div className="w-full sm:w-1/2 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <img
                src={info.imageUrl}
                alt="Tra cứu địa danh toàn quốc"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="w-full sm:w-1/2 space-y-4 text-center sm:text-left">
            <div>
              <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider block">
                Cơ sở dữ liệu hành chính quốc gia
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">
                {info.title}
              </h2>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Trang web tra cứu trực tuyến các thay đổi địa giới hành chính toàn quốc, giúp Quý khách ghi đúng thông tin trên chứng từ giao dịch, hợp đồng tín dụng và định danh CCCD.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Mở Trang Tra Cứu Toàn Quốc</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => showFeedbackModal()}
                className="min-h-[44px] px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Phản hồi & Kết thúc hỗ trợ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
