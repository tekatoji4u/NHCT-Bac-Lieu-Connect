import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Layers,
  Smartphone,
  Building,
  Play,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  MessageSquareHeart,
  ZoomIn
} from 'lucide-react';

export const DigitalBankingView: React.FC = () => {
  const { data, showFeedbackModal } = useApp();
  const [subTab, setSubTab] = useState<'ipay' | 'efast'>('ipay');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const ipayList = data.ipayGuides || [];
  const efastList = data.efastGuides || [];

  const currentGuide =
    subTab === 'ipay'
      ? ipayList.find((g) => g.id === selectedGuideId)
      : efastList.find((g) => g.id === selectedGuideId);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>Tính năng 08</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Dịch Vụ Ngân Hàng Điện Tử
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Hướng dẫn chi tiết từng bước sử dụng VietinBank iPay Mobile (Cá nhân) & eFAST One (Doanh nghiệp).
        </p>
      </div>

      {/* Sub-tab Switcher: 8.1 iPay & 8.2 eFast */}
      {!selectedGuideId && (
        <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl gap-2 max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => setSubTab('ipay')}
            className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              subTab === 'ipay'
                ? 'bg-[#004b87] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>8.1 VietinBank iPay ({ipayList.length} card)</span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('efast')}
            className={`min-h-[44px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              subTab === 'efast'
                ? 'bg-[#004b87] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>8.2 VietinBank eFast ({efastList.length} card)</span>
          </button>
        </div>
      )}

      {/* GUIDE LIST VIEW (Cards to choose from) */}
      {!selectedGuideId ? (
        <div>
          <div className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-slate-800">
              {subTab === 'ipay'
                ? 'Các hướng dẫn dành cho VietinBank iPay'
                : 'Các hướng dẫn dành cho VietinBank eFast One (Mobile) – Mọi giải pháp tài chính cho Doanh nghiệp'}
            </h2>
            <p className="text-xs text-slate-500">
              Bấm vào card hướng dẫn để xem từng bước thao tác minh họa kèm video YouTube
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(subTab === 'ipay' ? ipayList : efastList).map((guide, idx) => (
              <div
                key={guide.id}
                onClick={() => setSelectedGuideId(guide.id)}
                className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-xl bg-sky-50 text-[#004b87] font-bold font-mono text-xs flex items-center justify-center group-hover:bg-[#004b87] group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                      {guide.steps?.length || 0} bước
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#004b87] transition-colors mb-2">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                  <span>Xem hướng dẫn chi tiết</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* STEP-BY-STEP DETAIL VIEW */
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Back button */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setSelectedGuideId(null)}
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại danh mục {subTab === 'ipay' ? 'iPay' : 'eFast'}</span>
            </button>

            {currentGuide?.youtubeUrl && (
              <a
                href={currentGuide.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs shadow-xs transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Xem trên YouTube</span>
              </a>
            )}
          </div>

          {/* Guide Header */}
          <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              {currentGuide?.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {currentGuide?.description}
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-6">
            {currentGuide?.steps?.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-[#004b87] text-white font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {st.step ?? idx + 1}
                  </span>
                  <div>
                    {'title' in st && (st as { title?: string }).title && (
                      <h4 className="font-bold text-sm text-slate-900 mb-1">
                        {(st as { title?: string }).title}
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {st.text}
                    </p>
                  </div>
                </div>

                {st.imageUrl && (
                  <div className="pt-2">
                    <img
                      src={st.imageUrl}
                      alt={`Bước ${st.step ?? idx + 1}`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full max-h-[500px] object-contain rounded-xl bg-slate-50 border border-slate-100 shadow-2xs"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Youtube Video Link & Feedback Trigger */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 text-center space-y-4 shadow-lg">
            <h3 className="font-bold text-base text-white">
              Quý khách đã xem xong hướng dẫn?
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Hãy cho chúng tôi biết Quý khách đã thao tác thành công hay cần chuyên viên hỗ trợ trực tiếp tại quầy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              {currentGuide?.youtubeUrl && (
                <a
                  href={currentGuide.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Mở Video Hướng dẫn YouTube</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => showFeedbackModal()}
                className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#00a0dc] hover:bg-[#008fc5] text-white font-semibold text-xs transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Xác nhận hoàn thành & Phản hồi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
