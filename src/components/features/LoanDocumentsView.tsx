import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, ZoomIn, X, Phone, CheckCircle, Download } from 'lucide-react';

export const LoanDocumentsView: React.FC = () => {
  const { data } = useApp();
  const loanDocs = data.loanDocuments || [];
  const [selectedDoc, setSelectedDoc] = useState(loanDocs[0] || null);
  const [zoomImage, setZoomImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <FileText className="w-4 h-4" />
          <span>Tính năng 11</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Danh Mục Hồ Sơ Vay Vốn
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Giúp Quý khách hàng biết trước các loại hồ sơ cần chuẩn bị khi có nhu cầu vay vốn ngắn hạn phục vụ sản xuất kinh doanh, mua sắm tài sản trước khi đến làm thủ tục tại VietinBank.
        </p>
      </div>

      {/* 4 Category Filter Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {loanDocs.map((item, idx) => {
          const isSelected = selectedDoc?.id === item.id;
          return (
            <button
              key={item.id || idx}
              type="button"
              onClick={() => setSelectedDoc(item)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between min-h-[90px] ${
                isSelected
                  ? 'bg-sky-50 border-sky-400 text-[#004b87] shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {item.group}
              </span>
              <span className="font-bold text-xs sm:text-sm leading-snug line-clamp-2 mt-1">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Document Poster Showcase */}
      {selectedDoc && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden max-w-4xl mx-auto">
          {/* Header */}
          <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-sky-700 block">
                {selectedDoc.group}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {selectedDoc.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setZoomImage({ url: selectedDoc.imageUrl, title: selectedDoc.title })}
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Xem kích thước lớn</span>
            </button>
          </div>

          {/* Poster Image (Preserve original aspect ratio, no cropping) */}
          <div className="bg-slate-100/70 p-4 sm:p-6 flex items-center justify-center">
            <img
              src={selectedDoc.imageUrl}
              alt={selectedDoc.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full max-h-[800px] object-contain rounded-xl shadow-xs cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setZoomImage({ url: selectedDoc.imageUrl, title: selectedDoc.title })}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Advisory Contact Bar */}
          <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-slate-600 text-center sm:text-left">
              Cần hỗ trợ hướng dẫn chuẩn bị hồ sơ hoặc thẩm định trước? Quý khách liên hệ Chuyên viên:
            </p>
            <a
              href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-semibold flex items-center gap-2 shadow-xs transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Tư vấn hồ sơ ({data.bankInfo.advisor.phone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
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
