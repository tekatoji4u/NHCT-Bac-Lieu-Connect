import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Menu,
  ChevronRight,
  Sparkles,
  Smartphone,
  TrendingUp,
  Map,
  HelpCircle
} from 'lucide-react';

export const FeatureOverview: React.FC = () => {
  const { data, setIsSidebarOpen } = useApp();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#004b87] via-[#0060aa] to-[#0080c8] text-white p-6 sm:p-8 shadow-lg">
        {/* Soft Background Accents */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 -top-12 w-48 h-48 rounded-full bg-sky-300/10 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-sky-100 text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
            <span>Cổng Tương Tác Quầy Giao Dịch Số Thông Minh</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3 text-balance">
            Chào mừng Quý khách đến với VietinBank Bạc Liêu
          </h1>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mb-6 font-normal">
            Hệ thống quầy giao dịch tích hợp các dịch vụ trực quan: tra cứu thông tin nhanh, hướng dẫn mở tài khoản cá nhân & doanh nghiệp, tính lãi suất tiền gửi, du lịch và giao thương địa phương.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
                <span className="truncate">Trụ sở Chi nhánh</span>
              </div>
              <p className="text-sky-100/80 text-[11px] line-clamp-2">
                {data.bankInfo.address}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Giờ làm việc</span>
              </div>
              <p className="text-sky-100/80 text-[11px]">
                {data.bankInfo.workingHours.weekdays}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Hotline Quầy</span>
              </div>
              <p className="text-sky-100/80 text-[11px]">
                Tư vấn: <span className="font-semibold text-white">{data.bankInfo.advisor.phone}</span>
              </p>
            </div>
          </div>

          {/* Button to Open Sidebar Menu */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white text-[#004b87] font-semibold text-sm shadow-md hover:bg-sky-50 active:scale-98 transition-all"
            >
              <Menu className="w-4 h-4 text-[#004b87]" />
              <span>Mở Danh Mục 16 Tính Năng</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Guide & Highlight Cards for Counter Customers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#004b87] dark:text-sky-400 flex items-center justify-center mb-3">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
            Ngân Hàng Số Hiện Đại
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Trải nghiệm VietinBank iPay Mobile cho cá nhân & eFast One cho doanh nghiệp. Hướng dẫn cài đặt, đăng ký FacePay và mở tài khoản số đẹp nhanh chóng.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
            Công Cụ Tài Chính Thông Minh
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Tra cứu lãi suất tiết kiệm, lập kế hoạch trả nợ vay theo kỳ hạn, xem danh mục hồ sơ vay vốn sản xuất kinh doanh và các sản phẩm nổi bật.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
            <Map className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
            Mạng Lưới & Kết Nối Địa Phương
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Tra cứu địa điểm ATM / RATM, phòng giao dịch chi nhánh Bạc Liêu, bản đồ giao thương doanh nghiệp và cẩm nang du lịch ẩm thực địa phương.
          </p>
        </div>
      </div>

      {/* Slogan Banner */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 rounded-2xl p-4 sm:p-5 border border-sky-100/80 dark:border-slate-800 text-center">
        <p className="text-xs sm:text-sm font-medium text-[#004b87] dark:text-sky-300">
          VietinBank Bạc Liêu — Nâng giá trị cuộc sống, đồng hành cùng sự thịnh vượng của Quý khách
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          Vui lòng bấm vào biểu tượng menu <Menu className="inline w-3 h-3 text-[#004b87] dark:text-sky-400 -mt-0.5" /> ở góc trên bên trái để lựa chọn tính năng phục vụ
        </p>
      </div>
    </div>
  );
};
