import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Phone,
  CheckCircle2,
  AlertCircle,
  HeartHandshake,
  Lock,
  Save,
  RotateCcw,
  Sparkles,
  Building2,
  Percent,
  FileEdit,
  ExternalLink
} from 'lucide-react';

interface ModalsProps {
  isAdminModalOpen: boolean;
  onCloseAdminModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ isAdminModalOpen, onCloseAdminModal }) => {
  const {
    data,
    updateData,
    resetDataToDefault,
    isAdmin,
    loginAdmin,
    logoutAdmin,
    setActiveFeature,
    feedbackModalState,
    closeFeedbackModal,
    setFeedbackModalStep,
    productInterestTitle,
    closeProductInterestModal
  } = useApp();

  // Admin form state
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [adminTab, setAdminTab] = useState<'info' | 'branches' | 'rates' | 'json'>('info');

  // Local editable copies for Admin
  const [editAdvisorName, setEditAdvisorName] = useState(data.bankInfo.advisor.name);
  const [editAdvisorPhone, setEditAdvisorPhone] = useState(data.bankInfo.advisor.phone);
  const [editBranchPhone, setEditBranchPhone] = useState(data.bankInfo.branchPhone);
  const [editAddress, setEditAddress] = useState(data.bankInfo.address);
  const [editJsonString, setEditJsonString] = useState(JSON.stringify(data, null, 2));
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passcode)) {
      setAuthError('');
      setPasscode('');
      setEditJsonString(JSON.stringify(data, null, 2));
    } else {
      setAuthError('Mã xác thực không đúng. Vui lòng thử lại!');
    }
  };

  const handleSaveInfo = () => {
    updateData({
      bankInfo: {
        ...data.bankInfo,
        advisor: {
          ...data.bankInfo.advisor,
          name: editAdvisorName,
          phone: editAdvisorPhone
        },
        branchPhone: editBranchPhone,
        address: editAddress
      }
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleSaveJson = () => {
    try {
      const parsed = JSON.parse(editJsonString);
      updateData(parsed);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch {
      alert('Định dạng JSON không hợp lệ, vui lòng kiểm tra lại!');
    }
  };

  return (
    <>
      {/* 1. PRODUCT INTEREST MODAL ("Tôi quan tâm") */}
      {productInterestTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-sky-100 dark:border-slate-800 transform transition-all text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-[#004b87] dark:text-sky-400">
              <Sparkles className="w-8 h-8 text-[#004b87] dark:text-sky-400" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Quan tâm sản phẩm/dịch vụ
            </h3>
            <p className="text-xs font-semibold text-[#004b87] dark:text-sky-300 mb-4 bg-sky-50 dark:bg-sky-950/60 py-1.5 px-3 rounded-lg inline-block max-w-full truncate border border-sky-100 dark:border-sky-800">
              {productInterestTitle}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Cảm ơn Quý khách đã quan tâm đến sản phẩm/dịch vụ của VietinBank Bạc Liêu.
              Để được tư vấn và hỗ trợ chi tiết, Quý khách vui lòng liên hệ chuyên viên tư vấn theo thông tin được cung cấp trên poster sản phẩm.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
                className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi tư vấn ({data.bankInfo.advisor.phone})</span>
              </a>
              <button
                type="button"
                onClick={closeProductInterestModal}
                className="min-h-[44px] px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. CUSTOMER FEEDBACK MODAL (Sau mỗi phần hướng dẫn iPay, eFast, Tra cứu) */}
      {feedbackModalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-center">
            {feedbackModalState.step === 'ask' && (
              <div>
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <CheckCircle2 className="w-7 h-7 text-[#004b87] dark:text-sky-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Đánh giá hướng dẫn
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                  Quý khách đã thực hiện theo các bước hướng dẫn ổn hay chưa?
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      closeFeedbackModal();
                      setActiveFeature('overview');
                    }}
                    className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã ổn (Về menu chính)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFeedbackModalStep('not-ok')}
                    className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-medium text-xs transition-colors"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Chưa ổn (Cần hỗ trợ)</span>
                  </button>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      closeFeedbackModal();
                      setActiveFeature('overview');
                    }}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 underline"
                  >
                    Quay lại menu chính
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeedbackModalStep('goodbye')}
                    className="text-sky-700 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 font-medium"
                  >
                    Kết thúc cuộc trò chuyện
                  </button>
                </div>
              </div>
            )}

            {feedbackModalState.step === 'not-ok' && (
              <div>
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Hỗ trợ trực tiếp từ Chuyên viên
                </h3>
                <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200 text-left mb-5 leading-relaxed">
                  “Cảm ơn Quý khách đã phản hồi. Quý khách có thể liên hệ Chuyên viên tư vấn{' '}
                  <strong className="font-semibold text-amber-950 dark:text-amber-100">{data.bankInfo.advisor.name}</strong> – số điện thoại:{' '}
                  <strong className="font-semibold text-amber-950 dark:text-amber-100">{data.bankInfo.advisor.phone}</strong> để hỗ trợ trực tiếp.
                  Em sẽ cố gắng cải thiện để phục vụ Quý khách tốt hơn!”
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <a
                    href={`tel:${data.bankInfo.advisor.phone.replace(/[^0-9]/g, '')}`}
                    className="flex-1 min-h-[44px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Gọi {data.bankInfo.advisor.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      closeFeedbackModal();
                      setActiveFeature('overview');
                    }}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs"
                  >
                    Quay lại menu chính
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setFeedbackModalStep('goodbye')}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 underline"
                >
                  Kết thúc cuộc trò chuyện
                </button>
              </div>
            )}

            {feedbackModalState.step === 'goodbye' && (
              <div>
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-[#004b87] dark:text-sky-400">
                  <HeartHandshake className="w-8 h-8 text-[#004b87] dark:text-sky-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Cảm ơn Quý khách!
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium leading-relaxed">
                  “Cảm ơn Quý khách đã sử dụng dịch vụ của VietinBank. Chúc Quý khách một ngày tốt lành!”
                </p>

                <button
                  type="button"
                  onClick={() => {
                    closeFeedbackModal();
                    setActiveFeature('overview');
                  }}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-medium text-xs transition-colors"
                >
                  Về trang chủ
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. ADMIN MANAGEMENT & DATA EDIT MODAL */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:px-6 bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-sm sm:text-base">
                  Bảng Quản Trị Hệ Thống Quầy - VietinBank Bạc Liêu
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseAdminModal}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-xs">
              {!isAdmin ? (
                /* Admin Login View */
                <form onSubmit={handleAdminLogin} className="max-w-sm mx-auto py-6 space-y-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">Xác thực quyền Quản trị viên</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Nhập mã bảo mật để cập nhật và điều chỉnh dữ liệu hệ thống mà không làm thay đổi cấu trúc.
                    </p>
                  </div>

                  <div>
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="Mã xác thực Admin..."
                      className="w-full text-center px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-mono tracking-widest"
                      autoFocus
                    />
                    {authError && <p className="text-rose-500 text-[11px] mt-1.5">{authError}</p>}
                    <p className="text-[10px] text-slate-400 mt-1.5">
                      Gợi ý mặc định: <span className="font-mono text-slate-600">admin123</span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-medium text-xs transition-colors shadow-xs"
                  >
                    Đăng nhập Quản trị
                  </button>
                </form>
              ) : (
                /* Admin Authenticated Editor */
                <div className="space-y-4">
                  {/* Status Banner */}
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đã xác thực quyền Quản trị viên</span>
                    </div>
                    <button
                      type="button"
                      onClick={logoutAdmin}
                      className="text-[11px] text-rose-600 hover:underline"
                    >
                      Đăng xuất
                    </button>
                  </div>

                  {saveSuccess && (
                    <div className="bg-sky-50 border border-sky-200 text-sky-800 p-2.5 rounded-xl text-center font-medium animate-in fade-in">
                      ✓ Đã lưu thay đổi vào cơ sở dữ liệu thành công!
                    </div>
                  )}

                  {/* Tabs */}
                  <div className="flex border-b border-slate-200 gap-2">
                    <button
                      type="button"
                      onClick={() => setAdminTab('info')}
                      className={`pb-2 px-3 font-medium transition-colors border-b-2 ${
                        adminTab === 'info'
                          ? 'border-[#004b87] text-[#004b87]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Thông tin Chi nhánh & Tư vấn
                    </button>
                    <button
                      type="button"
                      onClick={() => setAdminTab('json')}
                      className={`pb-2 px-3 font-medium transition-colors border-b-2 ${
                        adminTab === 'json'
                          ? 'border-[#004b87] text-[#004b87]'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Toàn bộ dữ liệu JSON (16 mục)
                    </button>
                  </div>

                  {adminTab === 'info' ? (
                    <div className="space-y-3.5 pt-2">
                      <div>
                        <label className="block text-slate-600 font-medium mb-1">
                          Tên chuyên viên tư vấn quầy:
                        </label>
                        <input
                          type="text"
                          value={editAdvisorName}
                          onChange={(e) => setEditAdvisorName(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 font-medium mb-1">
                          Số điện thoại chuyên viên tư vấn:
                        </label>
                        <input
                          type="text"
                          value={editAdvisorPhone}
                          onChange={(e) => setEditAdvisorPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 font-medium mb-1">
                          Số điện thoại Chi nhánh:
                        </label>
                        <input
                          type="text"
                          value={editBranchPhone}
                          onChange={(e) => setEditBranchPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 font-medium mb-1">
                          Địa chỉ trụ sở Chi nhánh Bạc Liêu:
                        </label>
                        <input
                          type="text"
                          value={editAddress}
                          onChange={(e) => setEditAddress(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={resetDataToDefault}
                          className="flex items-center gap-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Khôi phục mặc định</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSaveInfo}
                          className="flex items-center gap-1.5 px-4 py-2 bg-[#004b87] hover:bg-[#003662] text-white rounded-lg font-medium shadow-xs"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Lưu cập nhật</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 pt-2">
                      <p className="text-[11px] text-slate-500">
                        Chỉnh sửa trực tiếp file dữ liệu hệ thống (ATM, PGD, Sản phẩm nổi bật, Khách sạn, Nhà hàng, Giao thương). Cấu trúc luôn được kiểm tra an toàn trước khi lưu.
                      </p>
                      <textarea
                        value={editJsonString}
                        onChange={(e) => setEditJsonString(e.target.value)}
                        rows={12}
                        className="w-full p-3 font-mono text-[11px] border border-slate-200 rounded-xl bg-slate-900 text-emerald-400 focus:outline-hidden"
                      />
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={resetDataToDefault}
                          className="flex items-center gap-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Khôi phục gốc ban đầu</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSaveJson}
                          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-xs"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Áp dụng cấu hình JSON</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
