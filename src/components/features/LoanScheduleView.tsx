import React, { useState, useMemo } from 'react';
import { CalendarDays, DollarSign, Calculator, Download, ChevronDown } from 'lucide-react';

export const LoanScheduleView: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000000); // 500 million
  const [loanMonths, setLoanMonths] = useState<number>(36); // 36 months
  const [interestRateYear, setInterestRateYear] = useState<number>(7.5); // 7.5% / year
  const [method, setMethod] = useState<'reducing' | 'equal'>('reducing'); // Dư nợ giảm dần vs Gốc + Lãi đều
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const schedule = useMemo(() => {
    const P = loanAmount;
    const n = loanMonths;
    const r = interestRateYear / 100 / 12;

    const rows = [];
    let remainingBalance = P;
    let totalInterest = 0;

    if (method === 'reducing') {
      // Gốc đều hàng tháng, lãi trên dư nợ giảm dần
      const monthlyPrincipal = Math.round(P / n);

      for (let i = 1; i <= n; i++) {
        const opening = remainingBalance;
        const interest = Math.round(opening * r);
        const principal = i === n ? opening : monthlyPrincipal;
        const total = principal + interest;
        const closing = Math.max(0, opening - principal);

        totalInterest += interest;
        remainingBalance = closing;

        rows.push({
          period: i,
          opening,
          principal,
          interest,
          total,
          closing
        });
      }
    } else {
      // Gốc + Lãi chia đều (Niên kim)
      const monthlyPayment = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

      for (let i = 1; i <= n; i++) {
        const opening = remainingBalance;
        const interest = Math.round(opening * r);
        const principal = i === n ? opening : Math.min(opening, monthlyPayment - interest);
        const total = principal + interest;
        const closing = Math.max(0, opening - principal);

        totalInterest += interest;
        remainingBalance = closing;

        rows.push({
          period: i,
          opening,
          principal,
          interest,
          total,
          closing
        });
      }
    }

    return {
      rows,
      totalInterest,
      totalPayment: P + totalInterest,
      firstMonthPayment: rows[0]?.total || 0,
      lastMonthPayment: rows[rows.length - 1]?.total || 0
    };
  }, [loanAmount, loanMonths, interestRateYear, method]);

  const quickLoans = [
    { label: '200 tr', value: 200000000 },
    { label: '500 tr', value: 500000000 },
    { label: '1 tỷ', value: 1000000000 },
    { label: '2 tỷ', value: 2000000000 }
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
          <CalendarDays className="w-4 h-4" />
          <span>Tính năng 05</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          Dự Lập Lịch Trả Nợ Khoản Vay
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Lập kế hoạch tài chính trả nợ gốc và lãi theo từng kỳ cho khách hàng cá nhân & hộ kinh doanh.
        </p>
      </div>

      {/* Input Form & Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xs space-y-4">
          {/* Loan amount */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Số tiền vay dự kiến (VNĐ)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
              step={10000000}
              className="w-full px-4 py-2.5 text-base sm:text-lg font-bold font-mono rounded-xl border border-slate-300 text-[#004b87] bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickLoans.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLoanAmount(q.value)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    loanAmount === q.value
                      ? 'bg-sky-50 border-sky-300 text-sky-800 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Loan Term & Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Thời gian vay (Tháng)
              </label>
              <select
                value={loanMonths}
                onChange={(e) => setLoanMonths(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              >
                <option value={12}>12 tháng (1 năm)</option>
                <option value={24}>24 tháng (2 năm)</option>
                <option value={36}>36 tháng (3 năm)</option>
                <option value={60}>60 tháng (5 năm)</option>
                <option value={84}>84 tháng (7 năm)</option>
                <option value={120}>120 tháng (10 năm)</option>
                <option value={240}>240 tháng (20 năm)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Lãi suất (% / năm)
              </label>
              <input
                type="number"
                step={0.1}
                value={interestRateYear}
                onChange={(e) => setInterestRateYear(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm font-bold font-mono rounded-xl border border-slate-300 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Repayment Method */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phương thức trả nợ
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setMethod('reducing')}
                className={`py-2 px-3 rounded-xl border text-center transition-all ${
                  method === 'reducing'
                    ? 'bg-sky-50 border-sky-400 text-[#004b87] font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Gốc đều, lãi giảm dần (Khuyên dùng)
              </button>
              <button
                type="button"
                onClick={() => setMethod('equal')}
                className={`py-2 px-3 rounded-xl border text-center transition-all ${
                  method === 'equal'
                    ? 'bg-sky-50 border-sky-400 text-[#004b87] font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Gốc + Lãi chia đều hàng tháng (Niên kim)
              </button>
            </div>
          </div>
        </div>

        {/* Results Overview (5 cols) */}
        <div className="lg:col-span-5 bg-linear-to-br from-[#004b87] to-[#005e9e] text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs text-sky-200 font-medium mb-1">
              Ước tính kỳ trả nợ tháng đầu
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300">
              {schedule.firstMonthPayment.toLocaleString('vi-VN')} <span className="text-sm font-sans">VNĐ</span>
            </div>
            {method === 'reducing' && (
              <p className="text-[11px] text-sky-100/80 mt-1">
                Kỳ cuối giảm xuống còn:{' '}
                <span className="font-mono font-semibold text-white">
                  {schedule.lastMonthPayment.toLocaleString('vi-VN')} VNĐ
                </span>
              </p>
            )}
          </div>

          <div className="pt-3 border-t border-white/15 space-y-2 text-xs">
            <div className="flex items-center justify-between text-sky-100">
              <span>Tổng số tiền gốc vay:</span>
              <span className="font-mono font-semibold text-white">
                {loanAmount.toLocaleString('vi-VN')} VNĐ
              </span>
            </div>
            <div className="flex items-center justify-between text-sky-100">
              <span>Tổng tiền lãi trong {loanMonths} tháng:</span>
              <span className="font-mono font-semibold text-amber-300">
                {schedule.totalInterest.toLocaleString('vi-VN')} VNĐ
              </span>
            </div>
            <div className="flex items-center justify-between text-sky-100 pt-2 border-t border-white/10 font-bold">
              <span className="text-white">Tổng số tiền trả:</span>
              <span className="font-mono text-amber-300 text-sm">
                {schedule.totalPayment.toLocaleString('vi-VN')} VNĐ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-sm text-slate-800">
            Bảng Kê Chi Tiết Tiến Độ Trả Nợ ({schedule.rows.length} kỳ)
          </h2>
          <span className="text-xs text-slate-400">
            Đơn vị tính: VNĐ
          </span>
        </div>

        <div className="overflow-x-auto max-h-[420px]">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider sticky top-0 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Kỳ</th>
                <th className="py-2.5 px-3">Dư nợ đầu kỳ</th>
                <th className="py-2.5 px-3">Tiền gốc</th>
                <th className="py-2.5 px-3">Tiền lãi</th>
                <th className="py-2.5 px-3 text-[#004b87]">Tổng trả kỳ này</th>
                <th className="py-2.5 px-3">Dư nợ cuối kỳ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {(showFullSchedule ? schedule.rows : schedule.rows.slice(0, 12)).map((row) => (
                <tr key={row.period} className="hover:bg-sky-50/40">
                  <td className="py-2 px-3 font-sans font-bold text-slate-700">{row.period}</td>
                  <td className="py-2 px-3 text-slate-600">{row.opening.toLocaleString('vi-VN')}</td>
                  <td className="py-2 px-3 text-slate-800 font-medium">{row.principal.toLocaleString('vi-VN')}</td>
                  <td className="py-2 px-3 text-amber-700">{row.interest.toLocaleString('vi-VN')}</td>
                  <td className="py-2 px-3 font-bold text-[#004b87]">{row.total.toLocaleString('vi-VN')}</td>
                  <td className="py-2 px-3 text-slate-500">{row.closing.toLocaleString('vi-VN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {schedule.rows.length > 12 && (
          <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
            <button
              type="button"
              onClick={() => setShowFullSchedule(!showFullSchedule)}
              className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1"
            >
              <span>{showFullSchedule ? 'Thu gọn (12 kỳ đầu)' : `Xem toàn bộ ${schedule.rows.length} kỳ`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFullSchedule ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
