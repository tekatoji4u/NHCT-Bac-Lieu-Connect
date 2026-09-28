import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Play, Heart, ZoomIn, X, Users, Briefcase, Building } from 'lucide-react';

export const FeaturedProductsView: React.FC = () => {
  const { data, showProductInterestModal } = useApp();
  const [selectedGroup, setSelectedGroup] = useState<'individual' | 'household' | 'enterprise'>('individual');
  const [zoomImage, setZoomImage] = useState<{ url: string; title: string } | null>(null);

  const products = data.featuredProducts[selectedGroup] || [];

  return (
    <div className="space-y-6">
      {/* Title & Description */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Tính năng 06</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Sản Phẩm Dịch Vụ Nổi Bật
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Khám phá các sản phẩm, dịch vụ và chương trình ưu đãi dành cho khách hàng tại VietinBank Bạc Liêu.
        </p>
      </div>

      {/* 3 Group Tabs */}
      <div className="flex flex-wrap p-1.5 bg-slate-100 rounded-2xl gap-1">
        <button
          type="button"
          onClick={() => setSelectedGroup('individual')}
          className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
            selectedGroup === 'individual'
              ? 'bg-white text-[#004b87] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>1. Khách hàng cá nhân</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedGroup('household')}
          className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
            selectedGroup === 'household'
              ? 'bg-white text-[#004b87] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>2. Hộ kinh doanh</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedGroup('enterprise')}
          className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
            selectedGroup === 'enterprise'
              ? 'bg-white text-[#004b87] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>3. Khách hàng doanh nghiệp</span>
        </button>
      </div>

      {/* Product List in Vertical Cards */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {products.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            {/* Header info */}
            <div className="p-4 sm:px-6 sm:pt-6 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-sky-50 text-[#004b87] font-bold font-mono text-xs flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  {item.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setZoomImage({ url: item.imageUrl, title: item.title })}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-500 hover:text-sky-700 hover:bg-slate-100 rounded-xl"
                title="Phóng to xem chi tiết poster"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Poster image (Full content, untouched aspect ratio) */}
            <div className="relative bg-slate-100/60 p-2 sm:p-4 flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full max-h-[750px] object-contain rounded-xl shadow-xs cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => setZoomImage({ url: item.imageUrl, title: item.title })}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Action Bar */}
            <div className="p-4 sm:px-6 bg-slate-50/70 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => showProductInterestModal(item.title)}
                className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
                <span>Tôi quan tâm</span>
              </button>

              {item.youtubeUrl && (
                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Xem video</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between">
              <span className="font-semibold text-xs sm:text-sm truncate pr-2">
                {zoomImage.title}
              </span>
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="p-1 rounded-lg text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[85vh] bg-slate-100 flex items-center justify-center">
              <img
                src={zoomImage.url}
                alt={zoomImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
