import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Map, Search, Utensils, Hotel, Sparkles, MapPin } from 'lucide-react';

interface TourismPlaceItem {
  name: string;
  address: string;
  imageUrl: string;
  mapsUrl: string;
}

export const LocalTourismView: React.FC = () => {
  const { data } = useApp();
  const provinces = data.provinces || [];
  const [selectedProvince, setSelectedProvince] = useState<string>('Bạc Liêu (Cà Mau)');
  const [provinceSearch, setProvinceSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'all' | 'dining' | 'hotels' | 'attractions'>('all');

  const filteredProvinces = provinces.filter((p) =>
    p.toLowerCase().includes(provinceSearch.toLowerCase())
  );

  const placesRecord = data.localTourism.places as Record<string, {
    dining: TourismPlaceItem[];
    hotels: TourismPlaceItem[];
    attractions: TourismPlaceItem[];
  }>;

  const tourismData =
    placesRecord[selectedProvince] ||
    placesRecord['Bạc Liêu (Cà Mau)'];

  const dining: TourismPlaceItem[] = tourismData?.dining || [];
  const hotels: TourismPlaceItem[] = tourismData?.hotels || [];
  const attractions: TourismPlaceItem[] = tourismData?.attractions || [];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>Tính năng 09</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Giới Thiệu Du Lịch Địa Phương
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Cẩm nang ẩm thực đặc sản, lưu trú khách sạn - resort và điểm tham quan văn hóa, vui chơi giải trí.
        </p>
      </div>

      {/* Dropdown Province Selector with Quick Search */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-3">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Chọn Tỉnh / Thành phố để xem địa điểm du lịch:
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Gõ để tìm nhanh 63 tỉnh thành..."
              value={provinceSearch}
              onChange={(e) => setProvinceSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            />
          </div>

          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
          >
            {filteredProvinces.map((prov, i) => (
              <option key={i} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'all'
                ? 'bg-[#004b87] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả ({dining.length + hotels.length + attractions.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dining')}
            className={`min-h-[38px] flex items-center gap-1.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'dining'
                ? 'bg-[#004b87] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Ăn uống & Đặc sản ({dining.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hotels')}
            className={`min-h-[38px] flex items-center gap-1.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'hotels'
                ? 'bg-[#004b87] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Hotel className="w-3.5 h-3.5" />
            <span>Khách sạn & Nhà nghỉ ({hotels.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('attractions')}
            className={`min-h-[38px] flex items-center gap-1.5 px-3 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'attractions'
                ? 'bg-[#004b87] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Địa điểm vui chơi ({attractions.length})</span>
          </button>
        </div>
      </div>

      {/* Render Places Grid */}
      <div className="space-y-6">
        {/* Dining */}
        {(activeTab === 'all' || activeTab === 'dining') && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
                <Utensils className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Địa điểm Ăn / Uống ({dining.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dining.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-3.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-36 bg-slate-100 rounded-xl overflow-hidden mb-3">
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
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.address}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-amber-700 font-medium">
                      Ẩm thực bản sắc
                    </span>
                    {item.mapsUrl && (
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[36px] px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <Map className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hotels */}
        {(activeTab === 'all' || activeTab === 'hotels') && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700">
                <Hotel className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Khách sạn / Resort / Nhà nghỉ ({hotels.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotels.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-3.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-36 bg-slate-100 rounded-xl overflow-hidden mb-3">
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
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.address}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-indigo-700 font-medium">
                      Nghỉ dưỡng & Lưu trú
                    </span>
                    {item.mapsUrl && (
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[36px] px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <Map className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Attractions */}
        {(activeTab === 'all' || activeTab === 'attractions') && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Địa điểm Vui chơi & Tham quan ({attractions.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {attractions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-3.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-36 bg-slate-100 rounded-xl overflow-hidden mb-3">
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
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.address}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-700 font-medium">
                      Danh lam thắng cảnh
                    </span>
                    {item.mapsUrl && (
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[36px] px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <Map className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
