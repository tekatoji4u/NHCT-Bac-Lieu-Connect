import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultContentData from '../data/contentData.json';

export type AppFeatureId =
  | 'overview'
  | 'faq'
  | 'download-ipay'
  | 'game'
  | 'interest-calc'
  | 'loan-schedule'
  | 'featured-products'
  | 'branch-points'
  | 'digital-banking'
  | 'local-tourism'
  | 'trade-map'
  | 'loan-docs'
  | 'vietin-tv'
  | 'query-address-2026'
  | 'query-national-2025'
  | 'branch-list'
  | 'atm-network';

export interface AppContentData {
  bankInfo: typeof defaultContentData.bankInfo;
  branches: typeof defaultContentData.branches;
  atms: typeof defaultContentData.atms;
  featuredProducts: typeof defaultContentData.featuredProducts;
  ipayGuides: typeof defaultContentData.ipayGuides;
  efastGuides: typeof defaultContentData.efastGuides;
  loanDocuments: typeof defaultContentData.loanDocuments;
  vietinTv: typeof defaultContentData.vietinTv;
  lookups: typeof defaultContentData.lookups;
  provinces: string[];
  industries: string[];
  merchants: typeof defaultContentData.merchants;
  localTourism: typeof defaultContentData.localTourism;
  faqs: typeof defaultContentData.faqs;
  depositRates: typeof defaultContentData.depositRates;
  games?: Array<{
    id: string;
    title: string;
    description: string;
    url: string;
    tag: string;
    category?: string;
    color?: string;
  }>;
}

interface AppContextType {
  data: AppContentData;
  activeFeature: AppFeatureId;
  setActiveFeature: (id: AppFeatureId) => void;
  isAdmin: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
  updateData: (newData: Partial<AppContentData>) => void;
  resetDataToDefault: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  showFeedbackModal: (options?: { onBackToMenu?: () => void }) => void;
  closeFeedbackModal: () => void;
  feedbackModalState: {
    isOpen: boolean;
    step: 'ask' | 'not-ok' | 'goodbye';
  };
  setFeedbackModalStep: (step: 'ask' | 'not-ok' | 'goodbye') => void;
  showProductInterestModal: (productTitle: string) => void;
  closeProductInterestModal: () => void;
  productInterestTitle: string | null;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'vietinbank_baclieu_data_store_v1';
const ADMIN_PASSCODE = 'admin123'; // Standard admin authentication

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AppContentData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultContentData, ...JSON.parse(stored) };
      }
    } catch {
      // fallback to default
    }
    return defaultContentData as unknown as AppContentData;
  });

  const [activeFeature, setActiveFeature] = useState<AppFeatureId>('overview');
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem('vietinbank_admin_auth') === 'true';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Feedback modal for counter interactions
  const [feedbackModalState, setFeedbackModalState] = useState<{
    isOpen: boolean;
    step: 'ask' | 'not-ok' | 'goodbye';
  }>({
    isOpen: false,
    step: 'ask'
  });

  // Product interest notice modal
  const [productInterestTitle, setProductInterestTitle] = useState<string | null>(null);

  // Global dark theme for counter visibility
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('vietinbank_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('vietinbank_theme', theme);
    } catch (e) {
      console.warn('Could not save theme preference', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [data]);

  const loginAdmin = (passcode: string): boolean => {
    if (passcode.trim() === ADMIN_PASSCODE || passcode.trim() === 'vietinbank@2026') {
      setIsAdmin(true);
      sessionStorage.setItem('vietinbank_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('vietinbank_admin_auth');
  };

  const updateData = (newData: Partial<AppContentData>) => {
    setData((prev) => ({
      ...prev,
      ...newData
    }));
  };

  const resetDataToDefault = () => {
    setData(defaultContentData as unknown as AppContentData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const showFeedbackModal = () => {
    setFeedbackModalState({
      isOpen: true,
      step: 'ask'
    });
  };

  const closeFeedbackModal = () => {
    setFeedbackModalState({
      isOpen: false,
      step: 'ask'
    });
  };

  const setFeedbackModalStep = (step: 'ask' | 'not-ok' | 'goodbye') => {
    setFeedbackModalState((prev) => ({
      ...prev,
      step
    }));
  };

  const showProductInterestModal = (productTitle: string) => {
    setProductInterestTitle(productTitle);
  };

  const closeProductInterestModal = () => {
    setProductInterestTitle(null);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        activeFeature,
        setActiveFeature,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        updateData,
        resetDataToDefault,
        isSidebarOpen,
        setIsSidebarOpen,
        showFeedbackModal,
        closeFeedbackModal,
        feedbackModalState,
        setFeedbackModalStep,
        showProductInterestModal,
        closeProductInterestModal,
        productInterestTitle,
        theme,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
