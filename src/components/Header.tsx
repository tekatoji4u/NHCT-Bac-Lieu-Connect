import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Clock, Lock, Unlock, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenAdminModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdminModal }) => {
  const { data, isAdmin, logoutAdmin, isSidebarOpen, setIsSidebarOpen, setActiveFeature, theme, toggleTheme } = useApp();
  const [showHoursTooltip, setShowHoursTooltip] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Zone: Hamburger for Mobile + VietinBank Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] -ml-1 p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Toggle navigation taskbar"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-sky-700 dark:text-sky-400" />
            ) : (
              <Menu className="w-6 h-6 text-sky-700 dark:text-sky-400" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveFeature('overview')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <img
              src={data.bankInfo.logoUrl}
              alt="VietinBank Logo"
              referrerPolicy="no-referrer"
              className="h-8 sm:h-9 object-contain drop-shadow-2xs transition-transform group-hover:scale-102"
              onError={(e) => {
                // styled text fallback if network fails
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="hidden xs:block border-l border-slate-200 dark:border-slate-700 pl-3">
              <span className="block text-sm sm:text-base font-bold tracking-tight text-[#004b87] dark:text-sky-400 leading-tight">
                VIETINBANK BẠC LIÊU
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-none mt-0.5">
                Cổng Tương Tác Quầy Giao Dịch
              </span>
            </div>
          </button>
        </div>

        {/* Center Zone: Quick Contact Badge (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowHoursTooltip(!showHoursTooltip)}
              onMouseEnter={() => setShowHoursTooltip(true)}
              onMouseLeave={() => setShowHoursTooltip(false)}
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Giờ mở cửa</span>
            </button>

            {showHoursTooltip && (
              <div className="absolute top-full left-0 mt-1.5 w-72 p-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl shadow-xl z-50 text-xs border border-slate-700 animate-in fade-in slide-in-from-top-1">
                <p className="font-semibold text-amber-300 mb-1">Thời gian phục vụ tại quầy:</p>
                <p className="text-slate-200">{data.bankInfo.workingHours.weekdays}</p>
                <p className="text-rose-300 mt-1">{data.bankInfo.workingHours.weekend}</p>
              </div>
            )}
          </div>

          <a
            href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1.5 bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 px-2.5 py-1.5 rounded-lg font-medium hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Tư vấn viên: {data.bankInfo.advisor.name} ({data.bankInfo.advisor.phone})</span>
          </a>
        </div>

        {/* Right Zone: Theme Toggle, Hotline & Admin Access */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Global Dark Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="min-h-[44px] px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all border text-slate-700 dark:text-slate-200 bg-slate-100/90 hover:bg-slate-200/90 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200/90 dark:border-slate-700 shadow-2xs active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500"
            title={
              theme === 'dark'
                ? 'Chuyển sang Chế độ Sáng (Ban ngày)'
                : 'Chuyển sang Chế độ Tối (Ánh sáng quầy giao dịch)'
            }
            aria-label="Chuyển đổi giao diện sáng tối quầy giao dịch"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-300" />
                <span className="hidden sm:inline font-semibold text-amber-300">Sáng</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#004b87]" />
                <span className="hidden sm:inline font-semibold text-slate-700">Tối</span>
              </>
            )}
          </button>

          <a
            href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200/80 dark:border-sky-800 active:scale-95"
            title="Gọi tư vấn viên"
          >
            <Phone className="w-5 h-5" />
          </a>

          {isAdmin ? (
            <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-700/80 rounded-xl px-2.5 py-1">
              <span className="hidden sm:inline text-xs font-semibold text-emerald-800 dark:text-emerald-300">Admin</span>
              <button
                type="button"
                onClick={onOpenAdminModal}
                className="text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-200 underline px-1 py-1"
              >
                Sửa dữ liệu
              </button>
              <button
                type="button"
                onClick={logoutAdmin}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 transition-colors"
                title="Đăng xuất Admin"
              >
                <Unlock className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenAdminModal}
              className="min-h-[44px] px-3 sm:px-3.5 py-2 text-xs font-medium rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#004b87] dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5 border border-slate-200/80 dark:border-slate-700"
              title="Phân quyền Admin cập nhật dữ liệu"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline">Quản trị</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
