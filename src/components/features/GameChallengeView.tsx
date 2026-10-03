import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  Play,
  ExternalLink,
  QrCode,
  RotateCw,
  Gift,
  Trophy,
  Sparkles,
  Maximize2,
  Copy,
  Check,
  X,
  Flame,
  ArrowRight,
  MonitorPlay,
  Smartphone,
  ChevronRight
} from 'lucide-react';

interface GameItem {
  id: string;
  title: string;
  description: string;
  url: string;
  tag: string;
  category?: string;
  color?: string;
}

export const GameChallengeView: React.FC = () => {
  const { data } = useApp();
  const [activeTab, setActiveTab] = useState<'online-games' | 'lucky-wheel'>('online-games');

  // Online Games
  const games: GameItem[] = data.games || [
    {
      id: 'nhct-bac-lieu-flappy',
      title: 'NHCT Bạc Liêu Flappy',
      description: 'Trò chơi bay lượn vượt chướng ngại vật Flappy vui nhộn mang dấu ấn VietinBank Bạc Liêu (Ngân hàng Công thương Bạc Liêu). Thử tài khéo léo và phản xạ!',
      url: 'https://nhct-bac-lieu-flappy.vercel.app/',
      tag: 'VietinBank Bạc Liêu',
      category: 'Arcade / Flappy',
      color: 'from-sky-600 via-blue-600 to-[#004b87]'
    },
    {
      id: 'pixel-past',
      title: 'Pixel Past',
      description: 'Trò chơi phiêu lưu đồ họa pixel cổ điển (Retro Pixel Art) đầy hấp dẫn, giải trí thư giãn nhẹ nhàng tại quầy giao dịch.',
      url: 'https://pixel-past.vercel.app/',
      tag: 'Retro Pixel',
      category: 'Adventure / Retro',
      color: 'from-purple-600 via-indigo-600 to-slate-900'
    }
  ];

  const [activeGame, setActiveGame] = useState<GameItem | null>(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [qrGame, setQrGame] = useState<GameItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Lucky Wheel state
  const [spinning, setSpinning] = useState(false);
  const [reward, setReward] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const prizes = [
    'Tặng Áo mưa VietinBank cao cấp',
    'Cộng +0.2% Lãi suất tiết kiệm',
    'Voucher Mua sắm 50.000 VNĐ',
    'Tặng Tài khoản số đẹp miễn phí',
    'Tặng Nón bảo hiểm VietinBank',
    'Miễn phí thẻ ghi nợ phi vật lý'
  ];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setReward(null);

    const randomRotations = 5 + Math.floor(Math.random() * 5);
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const degreePerPrize = 360 / prizes.length;
    const finalDegree = rotation + randomRotations * 360 + prizeIndex * degreePerPrize;

    setRotation(finalDegree);

    setTimeout(() => {
      setSpinning(false);
      setReward(prizes[prizeIndex]);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 3500);
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Title & Navigation */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1">
          <Gamepad2 className="w-4 h-4" />
          <span>Tính năng 03</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Thử Thách Game Giải Trí Tại Quầy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Thư giãn trong lúc chờ giao dịch với các tựa game tương tác đặc sắc của VietinBank Bạc Liêu hoặc thử tài may mắn nhận quà tặng tại quầy!
        </p>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mt-4">
          <button
            type="button"
            onClick={() => {
              setActiveTab('online-games');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'online-games'
                ? 'bg-[#004b87] text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <MonitorPlay className="w-4 h-4" />
            <span>Game Trực Tuyến ({games.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('lucky-wheel')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'lucky-wheel'
                ? 'bg-[#004b87] text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>Vòng Quay May Mắn</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ONLINE GAMES */}
      {activeTab === 'online-games' && (
        <div className="space-y-6">
          {/* Active Inline Game Player */}
          {activeGame ? (
            <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-base text-white">{activeGame.title}</h2>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                        {activeGame.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {activeGame.category || 'Game Tương Tác'} • Đang chơi trực tiếp
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIframeKey((k) => k + 1)}
                    title="Chơi lại / Làm mới"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setQrGame(activeGame)}
                    title="Chơi trên điện thoại"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <QrCode className="w-4 h-4 text-sky-400" />
                    <span className="hidden sm:inline">Quét QR di động</span>
                  </button>

                  <a
                    href={activeGame.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Mở tab mới</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveGame(null)}
                    title="Đóng game"
                    className="p-2 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe Frame */}
              <div className="relative w-full aspect-video sm:h-[580px] bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <iframe
                  key={iframeKey}
                  src={activeGame.url}
                  title={activeGame.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>

              {/* Game Control Hints */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-[11px] text-sky-300">
                    Mẹo chơi
                  </span>
                  <span>Chạm màn hình cảm ứng hoặc nhấn phím Cách (Space) để điều khiển.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGame(null)}
                  className="text-sky-400 hover:text-sky-300 text-xs font-medium flex items-center gap-1"
                >
                  <span>Chọn trò chơi khác</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Game Selection Grid */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {games.map((g) => (
                  <div
                    key={g.id}
                    className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top banner / Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#004b87] dark:text-sky-300 text-xs font-bold border border-sky-100 dark:border-sky-800">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          <span>{g.tag}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {g.category || 'Mini Game'}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-[#004b87] dark:group-hover:text-sky-400 transition-colors">
                        {g.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {g.description}
                      </p>

                      {/* Direct URL badge */}
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between mb-6 truncate">
                        <span className="truncate">{g.url}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyLink(g.url)}
                          className="text-sky-700 dark:text-sky-400 hover:text-sky-800 text-[10px] font-medium shrink-0 ml-2"
                        >
                          {copied ? 'Đã chép' : 'Sao chép'}
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveGame(g);
                          setIframeKey((k) => k + 1);
                        }}
                        className="sm:col-span-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#004b87] hover:bg-[#003662] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Chơi ngay tại quầy</span>
                      </button>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setQrGame(g)}
                          title="Quét mã QR chơi trên điện thoại cá nhân"
                          className="flex-1 min-h-[44px] px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1 transition-colors"
                        >
                          <QrCode className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                          <span className="text-[11px]">Mã QR</span>
                        </button>

                        <a
                          href={g.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Mở tab mới toàn màn hình"
                          className="p-2.5 min-h-[44px] rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Informative Tip */}
              <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900 rounded-2xl p-4 text-xs text-sky-900 dark:text-sky-300 flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>
                  Quý khách có thể bấm <strong>"Mã QR"</strong> để dùng camera điện thoại cá nhân quét và tiếp tục giải trí trong lúc ngồi chờ số thứ tự tại sảnh giao dịch!
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LUCKY WHEEL */}
      {activeTab === 'lucky-wheel' && (
        <div className="space-y-6">
          <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Vòng Quay May Mắn Tại Quầy</span>
            </div>

            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              {/* Pointer */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-rose-600 drop-shadow-sm" />

              {/* Rotating Wheel */}
              <div
                className="w-full h-full rounded-full border-4 border-[#004b87] dark:border-sky-500 shadow-xl overflow-hidden relative transition-all duration-[3500ms] ease-out flex items-center justify-center bg-linear-to-tr from-sky-100 via-white to-sky-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#004b87] text-white flex items-center justify-center font-bold text-xs shadow-md z-10">
                    VIETIN
                  </div>
                </div>

                {/* Slices representation */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 opacity-90 text-[10px] font-bold text-slate-700 dark:text-slate-200 select-none">
                  {prizes.map((p, i) => (
                    <div
                      key={i}
                      className={`p-2 flex items-center justify-center text-center ${
                        i % 2 === 0
                          ? 'bg-sky-100/50 dark:bg-sky-950/60'
                          : 'bg-amber-100/40 dark:bg-amber-950/40'
                      }`}
                    >
                      <span className="line-clamp-2">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSpin}
              disabled={spinning}
              className="min-h-[48px] px-8 py-3 rounded-2xl bg-[#004b87] hover:bg-[#003662] disabled:opacity-60 text-white font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <RotateCw className={`w-4 h-4 ${spinning ? 'animate-spin' : ''}`} />
              <span>{spinning ? 'Đang quay...' : 'Quay Vòng May Mắn Ngay'}</span>
            </button>

            {reward && (
              <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-2xl p-4 text-emerald-900 dark:text-emerald-200 animate-in zoom-in-95 space-y-1">
                <div className="flex items-center justify-center gap-1.5 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                  <Gift className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Chúc mừng Quý khách đã trúng:</span>
                </div>
                <p className="text-base font-extrabold text-emerald-950 dark:text-emerald-100 font-mono">
                  {reward}
                </p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 pt-1">
                  Vui lòng đưa màn hình cho giao dịch viên quầy VietinBank Bạc Liêu để nhận quà/kích hoạt ưu đãi!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* QR Code Modal for Phone Play */}
      {qrGame && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setQrGame(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800 text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#004b87] dark:text-sky-400" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Chơi trên Điện Thoại
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQrGame(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">
                {qrGame.title}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Mở camera trên điện thoại của Quý khách và hướng vào mã QR bên dưới
              </p>
            </div>

            <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl border border-slate-200 shadow-inner flex items-center justify-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  qrGame.url
                )}`}
                alt={`QR ${qrGame.title}`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-[11px] font-mono text-slate-600 dark:text-slate-300 break-all border border-slate-200/80 dark:border-slate-700">
              {qrGame.url}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleCopyLink(qrGame.url)}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Đã sao chép' : 'Chép link'}</span>
              </button>

              <a
                href={qrGame.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#004b87] hover:bg-[#003662] text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mở ngay</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
