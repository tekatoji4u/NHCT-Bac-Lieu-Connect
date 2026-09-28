import React from 'react';
import { useApp } from '../../context/AppContext';
import { FEATURES_LIST } from '../SidebarTaskbar';
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  ShieldCheck,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const FeatureOverview: React.FC = () => {
  const { data, setActiveFeature } = useApp();

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
            Hệ thống quầy giao dịch tích hợp 16 chức năng trực quan: tra cứu thông tin nhanh, hướng dẫn mở tài khoản cá nhân & doanh nghiệp, tính lãi suất tiền gửi, du lịch và giao thương địa phương.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
                <span className="truncate">Trụ sở Chi nhánh</span>
              </div>
              <p className="text-sky-100/80 text-[11px] line-clamp-2">
                {data.bankInfo.address}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Giờ làm việc</span>
              </div>
              <p className="text-sky-100/80 text-[11px]">
                {data.bankInfo.workingHours.weekdays}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Hotline Quầy</span>
              </div>
              <p className="text-sky-100/80 text-[11px]">
                Tư vấn: <span className="font-semibold text-white">{data.bankInfo.advisor.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 16 Features Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Danh Mục 16 Tính Năng Quầy Giao Dịch
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Chạm hoặc bấm vào từng tính năng để xem chi tiết hướng dẫn và công cụ tra cứu
            </p>
          </div>
          <span className="text-xs font-semibold text-[#004b87] dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-800">
            16 / 16 Chức năng
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {FEATURES_LIST.map((feat) => {
            const Icon = feat.icon;
            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => setActiveFeature(feat.id)}
                className="group relative bg-white dark:bg-slate-900 hover:bg-sky-50/40 dark:hover:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-200 text-left flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-slate-800 text-[#004b87] dark:text-sky-400 font-bold font-mono text-xs flex items-center justify-center group-hover:bg-[#004b87] group-hover:text-white transition-colors">
                      {feat.index}
                    </div>
                    {feat.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border border-rose-100 dark:border-rose-900">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-[#004b87] dark:text-sky-400 shrink-0" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#004b87] dark:group-hover:text-sky-400 transition-colors line-clamp-1">
                      {feat.shortLabel}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {feat.label}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-sky-700 dark:text-sky-400 group-hover:text-[#004b87] dark:group-hover:text-sky-300">
                  <span>Vào chức năng</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
