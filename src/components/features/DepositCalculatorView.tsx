import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Calculator, Coins, TrendingUp, CheckCircle, Percent } from 'lucide-react';

export const DepositCalculatorView: React.FC = () => {
  const { data } = useApp();
  const rates = data.depositRates || [];

  const [depositAmount, setDepositAmount] = useState<number>(100000000); // 100 million
  const [selectedTermMonths, setSelectedTermMonths] = useState<number>(12); // 12 months
  const [interestType, setInterestType] = useState<'end' | 'monthly' | 'beginning'>('end');

  // Find annual interest rate
  const currentRateObj = rates.find((r) => r.months === selectedTermMonths) || rates[5];
  const annualRate = currentRateObj?.rate || 4.7;

  // Calculation
  const calculation = useMemo(() => {
    const P = depositAmount;
    const r = annualRate / 100;
    const months = selectedTermMonths;

    let totalInterest = 0;

    if (months === 0) {
      // Demand deposit (estimated 30 days)
      totalInterest = Math.round((P * (annualRate / 100) * 30) / 365);
    } else if (interestType === 'end') {
      // Trả lãi cuối kỳ: P * r * (months/12)
      totalInterest = Math.round((P * r * months) / 12);
    } else if (interestType === 'monthly') {
      // Trả lãi hàng tháng (discount ~0.1 - 0.2%)
      const monthlyRate = r * 0.98;
      totalInterest = Math.round((P * monthlyRate * months) / 12);
    } else {
      // Trả lãi trước (đầu kỳ)
      const upfrontRate = r * 0.95;
      totalInterest = Math.round((P * upfrontRate * months) / 12);
    }

    const totalPayout = P + (interestType === 'beginning' ? 0 : totalInterest);
    const monthlyInterest = months > 0 ? Math.round(totalInterest / months) : totalInterest;

    return {
      totalInterest,
      totalPayout,
      monthlyInterest
    };
  }, [depositAmount, selectedTermMonths, interestType, annualRate]);

  const quickAmounts = [
    { label: '20 triệu', value: 20000000 },
    { label: '50 triệu', value: 50000000 },
    { label: '100 triệu', value: 100000000 },
    { label: '200 triệu', value: 200000000 },
    { label: '500 triệu', value: 500000000 },
    { label: '1 tỷ', value: 1000000000 }
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <Calculator className="w-4 h-4" />
          <span>Tính năng 04</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Công Cụ Tính Lãi Tiền Gửi Tiết Kiệm
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Dự tính nhanh số tiền sinh lời linh hoạt theo kỳ hạn và hình thức trả lãi tại VietinBank.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Parameters (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xs space-y-5">
          {/* Amount input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Số tiền gửi (VNĐ)
            </label>
            <div className="relative">
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Math.max(0, Number(e.target.value)))}
                step={5000000}
                className="w-full px-4 py-3 text-lg sm:text-xl font-bold font-mono rounded-xl border border-slate-300 text-[#004b87] bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                VNĐ
              </span>
            </div>

            {/* Quick buttons */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickAmounts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDepositAmount(q.value)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    depositAmount === q.value
                      ? 'bg-sky-50 border-sky-300 text-sky-800 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Term selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Kỳ hạn gửi tiết kiệm
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {rates.map((r, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedTermMonths(r.months)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    selectedTermMonths === r.months
                      ? 'bg-[#004b87] text-white border-[#004b87] shadow-xs'
                      : 'border-slate-200 hover:border-sky-300 bg-white text-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{r.term}</div>
                  <div
                    className={`text-[11px] font-mono mt-0.5 ${
                      selectedTermMonths === r.months ? 'text-sky-200' : 'text-emerald-600'
                    }`}
                  >
                    {r.rate}%/năm
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interest payout method */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Hình thức nhận lãi
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setInterestType('end')}
                className={`py-2 px-3 rounded-xl border font-medium text-center transition-colors ${
                  interestType === 'end'
                    ? 'bg-sky-50 border-sky-400 text-[#004b87] font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Cuối kỳ
              </button>
              <button
                type="button"
                onClick={() => setInterestType('monthly')}
                className={`py-2 px-3 rounded-xl border font-medium text-center transition-colors ${
                  interestType === 'monthly'
                    ? 'bg-sky-50 border-sky-400 text-[#004b87] font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Hàng tháng
              </button>
              <button
                type="button"
                onClick={() => setInterestType('beginning')}
                className={`py-2 px-3 rounded-xl border font-medium text-center transition-colors ${
                  interestType === 'beginning'
                    ? 'bg-sky-50 border-sky-400 text-[#004b87] font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Đầu kỳ
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Results Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-linear-to-br from-[#004b87] to-[#0066b3] text-white rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-xs text-sky-200 font-medium">Kết quả tính dự kiến</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono text-white">
                Lãi suất: {annualRate}%/năm
              </span>
            </div>

            <div>
              <span className="text-xs text-sky-100 block mb-1">Tổng tiền lãi nhận được:</span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300">
                {calculation.totalInterest.toLocaleString('vi-VN')} <span className="text-sm font-sans">VNĐ</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/15 space-y-2 text-xs">
              <div className="flex items-center justify-between text-sky-100">
                <span>Số tiền gốc ban đầu:</span>
                <span className="font-mono font-semibold text-white">
                  {depositAmount.toLocaleString('vi-VN')} VNĐ
                </span>
              </div>

              <div className="flex items-center justify-between text-sky-100">
                <span>Tiền lãi bình quân/tháng:</span>
                <span className="font-mono font-semibold text-white">
                  {calculation.monthlyInterest.toLocaleString('vi-VN')} VNĐ
                </span>
              </div>

              <div className="flex items-center justify-between text-sky-100 pt-2 border-t border-white/10">
                <span className="font-bold text-white">Tổng gốc & lãi khi đáo hạn:</span>
                <span className="font-mono font-bold text-amber-300 text-sm sm:text-base">
                  {calculation.totalPayout.toLocaleString('vi-VN')} VNĐ
                </span>
              </div>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-sky-50/70 border border-sky-200/70 rounded-2xl p-4 text-xs text-sky-900 space-y-1">
            <p className="font-semibold text-sky-950">Lưu ý tại quầy giao dịch:</p>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Kết quả mang tính chất tham khảo. Lãi suất thực tế có thể thay đổi theo từng chương trình khuyến mãi và gói cộng lãi suất VIP (V-Plus / V-Advance) tại thời điểm mở sổ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
