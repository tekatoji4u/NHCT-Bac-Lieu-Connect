import React from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, Phone, Clock, CreditCard, ExternalLink, Map, Building2 } from 'lucide-react';

export const BranchPointsView: React.FC = () => {
  const { data } = useApp();
  const branches = data.branches || [];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <MapPin className="w-4 h-4" />
          <span>Tính năng 07 & 15</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Mạng Lưới Chi Nhánh & Phòng Giao Dịch VietinBank Bạc Liêu
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Danh sách 06 điểm giao dịch trực thuộc Chi nhánh Bạc Liêu với chỉ đường Google Maps và điện thoại trực tiếp.
        </p>
      </div>

      {/* Working hours banner */}
      <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-sky-900">
        <div className="flex items-center gap-2.5">
          <Clock className="w-5 h-5 text-sky-600 shrink-0" />
          <div>
            <span className="font-bold">Thời gian giao dịch: </span>
            <span>{data.bankInfo.workingHours.weekdays}</span>
          </div>
        </div>
        <span className="bg-white/80 text-rose-700 font-semibold px-2.5 py-1 rounded-lg border border-sky-100">
          {data.bankInfo.workingHours.weekend}
        </span>
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {branches.map((b, idx) => (
          <div
            key={b.id || idx}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="w-full h-44 bg-slate-100 relative">
                <img
                  src={b.imageUrl}
                  alt={b.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute top-2.5 left-2.5 bg-[#004b87] text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                  {idx + 1}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2.5">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-2">
                  {b.name}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{b.address}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <a
                      href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                      className="font-mono text-sky-700 hover:underline font-medium"
                    >
                      {b.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps link with map icon as requested */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                className="min-h-[38px] px-3 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gọi PGD</span>
              </a>

              {b.mapsUrl && (
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] px-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BranchListView: React.FC = () => {
  return <BranchPointsView />;
};

export const AtmNetworkView: React.FC = () => {
  const { data } = useApp();
  const atms = data.atms || [];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <CreditCard className="w-4 h-4" />
          <span>Tính năng 16</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Danh Sách Mạng Lưới Điểm ATM / RATM Chi Nhánh
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Cấu phần mạng lưới 11 máy ATM và RATM (Nộp & rút tiền mặt tự động 24/7) thuộc VietinBank Bạc Liêu.
        </p>
      </div>

      {/* ATM Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {atms.map((atm, idx) => (
          <div
            key={atm.id || idx}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="w-full h-44 bg-slate-100 relative">
                <img
                  src={atm.imageUrl}
                  alt={atm.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {atm.type}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-sky-50 text-[#004b87] font-bold font-mono text-[11px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 line-clamp-2">
                    {atm.name}
                  </h3>
                </div>

                <div className="flex items-start gap-1.5 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed line-clamp-2">{atm.address}</span>
                </div>
              </div>
            </div>

            {/* Google Maps link with map icon */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-emerald-700 font-medium">
                Hoạt động 24/7
              </span>

              {atm.mapsUrl && (
                <a
                  href={atm.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] px-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
