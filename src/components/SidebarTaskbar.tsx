import React, { useState } from 'react';
import { useApp, AppFeatureId } from '../context/AppContext';
import {
  HelpCircle,
  Smartphone,
  Gamepad2,
  Calculator,
  CalendarDays,
  Sparkles,
  MapPin,
  Layers,
  Compass,
  Store,
  FileText,
  Tv,
  Map,
  Globe2,
  Building2,
  CreditCard,
  ChevronRight,
  Search,
  Home
} from 'lucide-react';

export interface FeatureMenuItem {
  id: AppFeatureId;
  index: number;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  badge?: string;
  category: 'support' | 'digital' | 'financial' | 'guide' | 'network';
}

export const FEATURES_LIST: FeatureMenuItem[] = [
  {
    id: 'faq',
    index: 1,
    label: 'Giải đáp thắc mắc khách hàng',
    shortLabel: 'Giải đáp thắc mắc',
    icon: HelpCircle,
    category: 'support'
  },
  {
    id: 'download-ipay',
    index: 2,
    label: 'Tải App VietinBank iPay',
    shortLabel: 'Tải iPay Mobile',
    icon: Smartphone,
    category: 'digital',
    badge: 'Hot'
  },
  {
    id: 'game',
    index: 3,
    label: 'Thử thách Game quầy',
    shortLabel: 'Thử thách Game',
    icon: Gamepad2,
    category: 'support',
    badge: 'Quà'
  },
  {
    id: 'interest-calc',
    index: 4,
    label: 'Tính lãi tiền gửi',
    shortLabel: 'Tính lãi tiền gửi',
    icon: Calculator,
    category: 'financial'
  },
  {
    id: 'loan-schedule',
    index: 5,
    label: 'Lịch trả nợ khoản vay',
    shortLabel: 'Lịch trả nợ vay',
    icon: CalendarDays,
    category: 'financial'
  },
  {
    id: 'featured-products',
    index: 6,
    label: 'Sản phẩm dịch vụ nổi bật',
    shortLabel: 'SP-DV nổi bật',
    icon: Sparkles,
    category: 'financial'
  },
  {
    id: 'branch-points',
    index: 7,
    label: 'Điểm giao dịch',
    shortLabel: 'Điểm giao dịch',
    icon: MapPin,
    category: 'network'
  },
  {
    id: 'digital-banking',
    index: 8,
    label: 'Dịch vụ Ngân hàng điện tử (iPay, eFast)',
    shortLabel: 'Ngân hàng số',
    icon: Layers,
    category: 'digital',
    badge: 'eFast/iPay'
  },
  {
    id: 'local-tourism',
    index: 9,
    label: 'Giới thiệu du lịch địa phương',
    shortLabel: 'Du lịch địa phương',
    icon: Compass,
    category: 'guide'
  },
  {
    id: 'trade-map',
    index: 10,
    label: 'Bản đồ giao thương',
    shortLabel: 'Bản đồ giao thương',
    icon: Store,
    category: 'guide'
  },
  {
    id: 'loan-docs',
    index: 11,
    label: 'Danh mục hồ sơ vay',
    shortLabel: 'Hồ sơ vay vốn',
    icon: FileText,
    category: 'financial'
  },
  {
    id: 'vietin-tv',
    index: 12,
    label: 'Vietin TV',
    shortLabel: 'Vietin TV',
    icon: Tv,
    category: 'digital'
  },
  {
    id: 'query-address-2026',
    index: 13,
    label: 'Truy vấn địa chỉ mới 2026',
    shortLabel: 'Địa chỉ mới 2026',
    icon: Map,
    category: 'guide'
  },
  {
    id: 'query-national-2025',
    index: 14,
    label: 'Truy vấn địa danh toàn quốc',
    shortLabel: 'Địa danh toàn quốc',
    icon: Globe2,
    category: 'guide'
  },
  {
    id: 'branch-list',
    index: 15,
    label: 'Danh sách phòng giao dịch của chi nhánh',
    shortLabel: 'Danh sách PGD',
    icon: Building2,
    category: 'network'
  },
  {
    id: 'atm-network',
    index: 16,
    label: 'Danh sách địa điểm ATM của Chi nhánh',
    shortLabel: 'Địa điểm ATM / RATM',
    icon: CreditCard,
    category: 'network'
  }
];

export const SidebarTaskbar: React.FC = () => {
  const { activeFeature, setActiveFeature, isSidebarOpen, setIsSidebarOpen } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFeatures = FEATURES_LIST.filter(
    (item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.index.toString() === searchTerm.trim()
  );

  const handleSelect = (id: AppFeatureId) => {
    setActiveFeature(id);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Taskbar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 sm:w-80 bg-white dark:bg-slate-900 border-r border-slate-200/90 dark:border-slate-800 flex flex-col shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Search & Overview Top Button */}
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/90 space-y-2">
          <button
            type="button"
            onClick={() => handleSelect('overview')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
              activeFeature === 'overview'
                ? 'bg-[#004b87] text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/70 border border-slate-200/80 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Home className="w-4 h-4 text-sky-400" />
              <span>Trang chủ / Tất cả chức năng</span>
            </div>
            <span className="text-[10px] opacity-75 font-mono">16 mục</span>
          </button>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm nhanh tính năng (1 - 16)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Feature List (1 to 16) */}
        <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-1 divide-y divide-slate-100/50 dark:divide-slate-800/40">
          {filteredFeatures.map((item) => {
            const Icon = item.icon;
            const isActive = activeFeature === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full min-h-[46px] flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all group ${
                  isActive
                    ? 'bg-sky-50 dark:bg-sky-950/60 text-[#004b87] dark:text-sky-300 font-semibold border-l-4 border-[#004b87] dark:border-l-sky-400 pl-2.5 shadow-2xs'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-1">
                  <div
                    className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#004b87] dark:bg-sky-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/60 group-hover:text-sky-800 dark:group-hover:text-sky-200'
                    }`}
                  >
                    {item.index}
                  </div>
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#004b87] dark:text-sky-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400'
                    }`}
                  />
                  <span className="text-xs sm:text-[13px] leading-tight line-clamp-2">
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                        item.badge === 'Hot'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-transform ${
                      isActive ? 'text-[#004b87] dark:text-sky-400 translate-x-0.5' : ''
                    }`}
                  />
                </div>
              </button>
            );
          })}

          {filteredFeatures.length === 0 && (
            <div className="p-4 text-center text-xs text-slate-400 dark:text-slate-500">
              Không tìm thấy tính năng nào phù hợp
            </div>
          )}
        </nav>

        {/* Footer Taskbar info */}
        <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-600 dark:text-slate-300">Quầy phục vụ sẵn sàng</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">v2.6 Bạc Liêu</span>
        </div>
      </aside>
    </>
  );
};
