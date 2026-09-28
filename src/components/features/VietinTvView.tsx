import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Tv, Play, Video, Sparkles, CheckCircle2 } from 'lucide-react';

export const VietinTvView: React.FC = () => {
  const { data, showFeedbackModal } = useApp();
  const [activeTab, setActiveTab] = useState<'products' | 'entertainment'>('products');
  const [selectedVideo, setSelectedVideo] = useState<any>(data.vietinTv.products[0]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Tv className="w-4 h-4" />
          <span>Tính năng 12</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Vietin TV - Kênh Truyền Thông Quầy Giao Dịch
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Video hướng dẫn thao tác nghiệp vụ tài chính ngân hàng số và các video giới thiệu trải nghiệm phong cách sống VietinBank.
        </p>
      </div>

      {/* 2 Tabs as specified in PDF */}
      <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => {
            setActiveTab('products');
            setSelectedVideo(data.vietinTv.products[0]);
          }}
          className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'products'
              ? 'bg-[#004b87] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Các sản phẩm dịch vụ</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab('entertainment');
            setSelectedVideo(data.vietinTv.entertainment[0]);
          }}
          className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'entertainment'
              ? 'bg-[#004b87] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Video giải trí</span>
        </button>
      </div>

      {/* Main Video Player / Showcase */}
      {selectedVideo && (
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-slate-800 text-white">
          <div className="p-4 sm:p-6 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block">
                {activeTab === 'products' ? 'Hướng dẫn nghiệp vụ số' : 'Thước phim thương hiệu & Giải trí'}
              </span>
              <h2 className="text-base sm:text-xl font-bold text-white mt-0.5">
                {selectedVideo.title}
              </h2>
            </div>

            <a
              href={selectedVideo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors shrink-0"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Xem trực tiếp trên YouTube</span>
            </a>
          </div>

          {/* Thumbnail preview / Instructions */}
          <div className="p-4 sm:p-6 space-y-4 bg-slate-900">
            {selectedVideo.thumbnail && (
              <div className="relative rounded-2xl overflow-hidden bg-black/60 max-h-[450px] flex items-center justify-center">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[450px] object-contain opacity-90"
                />
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </a>
              </div>
            )}

            {/* Step-by-step summary if available */}
            {selectedVideo.steps && (
              <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-5 border border-slate-700/60 space-y-2">
                <h4 className="font-bold text-xs sm:text-sm text-sky-300">
                  Tóm tắt các bước thực hiện:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedVideo.steps.map((stepText: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{stepText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Playlist Grid */}
      <div className="space-y-3 max-w-4xl mx-auto">
        <h3 className="font-bold text-sm text-slate-800">
          Danh sách phát {activeTab === 'products' ? 'Sản phẩm dịch vụ' : 'Video giải trí'}:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(activeTab === 'products' ? data.vietinTv.products : data.vietinTv.entertainment).map(
            (item, index) => {
              const isPlaying = selectedVideo?.id === item.id;
              return (
                <div
                  key={item.id || index}
                  onClick={() => setSelectedVideo(item)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isPlaying
                      ? 'bg-sky-50 border-sky-400 text-[#004b87] shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isPlaying ? 'bg-[#004b87] text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <span className="font-medium text-xs line-clamp-2 leading-snug">
                      {item.title}
                    </span>
                  </div>

                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="min-h-[36px] min-w-[36px] flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-lg p-1.5 shrink-0"
                    title="Mở tab YouTube"
                  >
                    <Play className="w-4 h-4 fill-rose-600" />
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
