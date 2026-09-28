import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { SidebarTaskbar } from './components/SidebarTaskbar';
import { Modals } from './components/Modals';

// Feature Views
import { FeatureOverview } from './components/features/FeatureOverview';
import { FaqView, DownloadIpayView, GameChallengeView } from './components/features/CustomerInteractionViews';
import { DepositCalculatorView } from './components/features/DepositCalculatorView';
import { LoanScheduleView } from './components/features/LoanScheduleView';
import { FeaturedProductsView } from './components/features/FeaturedProductsView';
import { DigitalBankingView } from './components/features/DigitalBankingView';
import { LocalTourismView } from './components/features/LocalTourismView';
import { TradeMapView } from './components/features/TradeMapView';
import { LoanDocumentsView } from './components/features/LoanDocumentsView';
import { VietinTvView } from './components/features/VietinTvView';
import { QueryAddress2026View, QueryNational2025View } from './components/features/QueryAddressViews';
import { BranchPointsView, BranchListView, AtmNetworkView } from './components/features/BranchViews';

const MainContent: React.FC = () => {
  const { activeFeature } = useApp();
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Render the selected feature component
  const renderFeatureView = () => {
    switch (activeFeature) {
      case 'faq':
        return <FaqView />;
      case 'download-ipay':
        return <DownloadIpayView />;
      case 'game':
        return <GameChallengeView />;
      case 'interest-calc':
        return <DepositCalculatorView />;
      case 'loan-schedule':
        return <LoanScheduleView />;
      case 'featured-products':
        return <FeaturedProductsView />;
      case 'branch-points':
        return <BranchPointsView />;
      case 'digital-banking':
        return <DigitalBankingView />;
      case 'local-tourism':
        return <LocalTourismView />;
      case 'trade-map':
        return <TradeMapView />;
      case 'loan-docs':
        return <LoanDocumentsView />;
      case 'vietin-tv':
        return <VietinTvView />;
      case 'query-address-2026':
        return <QueryAddress2026View />;
      case 'query-national-2025':
        return <QueryNational2025View />;
      case 'branch-list':
        return <BranchListView />;
      case 'atm-network':
        return <AtmNetworkView />;
      case 'overview':
      default:
        return <FeatureOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-[#004b87] selection:text-white transition-colors duration-200">
      {/* Top Header */}
      <Header onOpenAdminModal={() => setIsAdminModalOpen(true)} />

      {/* Main Body with Left Taskbar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Taskbar */}
        <SidebarTaskbar />

        {/* Content Canvas (Offset on desktop for Left Sidebar) */}
        <main className="flex-1 lg:pl-80 p-3.5 sm:p-6 lg:p-8 min-w-0">
          <div className="max-w-5xl mx-auto">
            {renderFeatureView()}
          </div>
        </main>
      </div>

      {/* Modals & Dialogs (Admin Auth & Editor, Feedback Flow, Product Interest) */}
      <Modals
        isAdminModalOpen={isAdminModalOpen}
        onCloseAdminModal={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
