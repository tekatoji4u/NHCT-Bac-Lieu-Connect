import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Store, MapPin, Phone, Map, Search, Filter, ExternalLink } from 'lucide-react';

export const TradeMapView: React.FC = () => {
  const { data } = useApp();

  const provinces = data.provinces || [];
  const industries = data.industries || [];
  const merchants = data.merchants || [];

  const [selectedProvince, setSelectedProvince] = useState<string>('Bạc Liêu (Cà Mau)');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [provinceSearch, setProvinceSearch] = useState<string>('');
  const [keywordSearch, setKeywordSearch] = useState<string>('');

  // Filter provinces by quick search input
  const filteredProvinces = useMemo(() => {
    if (!provinceSearch.trim()) return provinces;
    return provinces.filter((p) =>
      p.toLowerCase().includes(provinceSearch.toLowerCase())
    );
  }, [provinces, provinceSearch]);

  // Filter merchants based on selections
  const filteredMerchants = useMemo(() => {
    return merchants.filter((item) => {
      const matchProvince = selectedProvince ? item.province === selectedProvince : true;
      const matchIndustry = selectedIndustry ? item.industry === selectedIndustry : true;
      const matchKeyword = keywordSearch.trim()
        ? item.name.toLowerCase().includes(keywordSearch.toLowerCase()) ||
          item.address.toLowerCase().includes(keywordSearch.toLowerCase()) ||
          item.phone.includes(keywordSearch)
        : true;
      return matchProvince && matchIndustry && matchKeyword;
    });
  }, [merchants, selectedProvince, selectedIndustry, keywordSearch]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Store className="w-4 h-4" />
          <span>Tính năng 10</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Bản Đồ Giao Thương
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Tìm kiếm cơ sở kinh doanh uy tín theo ngành nghề và địa phương liên kết đối tác VietinBank.
        </p>
      </div>

      {/* Two-step filter container as specified in requirement */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bước 1: Chọn Tỉnh/Thành */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Bước 1: Chọn Tỉnh / Thành</span>
              <span className="text-[11px] font-normal text-slate-400">
                ({filteredProvinces.length} địa phương)
              </span>
            </label>

            <div className="space-y-1.5">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Gõ để tìm nhanh tỉnh thành..."
                  value={provinceSearch}
                  onChange={(e) => setProvinceSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value="">-- Tất cả tỉnh thành --</option>
                {filteredProvinces.map((prov, i) => (
                  <option key={i} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bước 2: Chọn Ngành nghề */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Bước 2: Chọn Ngành nghề cần tư vấn</span>
              <span className="text-[11px] font-normal text-slate-400">
                (13 ngành nghề)
              </span>
            </label>

            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2.5 text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              <option value="">-- Tất cả ngành nghề --</option>
              {industries.map((ind, i) => (
                <option key={i} value={ind}>
                  {ind}
                </option>
              ))}
            </select>

            <div className="mt-2 relative">
              <input
                type="text"
                placeholder="Hoặc tìm theo tên cửa hàng, đường phố..."
                value={keywordSearch}
                onChange={(e) => setKeywordSearch(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        {/* Selected Summary */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Đang lọc:</span>
            <span className="bg-sky-50 text-[#004b87] font-medium px-2 py-0.5 rounded-md">
              {selectedProvince || 'Tất cả địa bàn'}
            </span>
            {selectedIndustry && (
              <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                {selectedIndustry}
              </span>
            )}
          </div>
          <span className="font-semibold text-sky-700">
            Tìm thấy {filteredMerchants.length} cơ sở đối tác
          </span>
        </div>
      </div>

      {/* Merchants Results */}
      <div className="space-y-4">
        {filteredMerchants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMerchants.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="w-full h-40 bg-slate-100 rounded-xl overflow-hidden mb-3 relative">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
                      {item.industry}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 line-clamp-2 mb-2">
                    {item.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed">{item.address}</span>
                    </div>

                    {item.phone && (
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <a
                          href={`tel:${item.phone}`}
                          className="font-mono text-sky-700 hover:underline"
                        >
                          {item.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Google Maps link with Map Icon as specified */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${item.phone}`}
                    className="min-h-[38px] px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Gọi điện</span>
                  </a>

                  {item.mapsUrl && (
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[38px] px-3.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <Map className="w-3.5 h-3.5" />
                      <span>Bản đồ Google Maps</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            Chưa có thông tin cơ sở kinh doanh cho lựa chọn này. Vui lòng chọn địa phương hoặc ngành nghề khác!
          </div>
        )}
      </div>
    </div>
  );
};
