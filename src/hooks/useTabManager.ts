// hooks/useTabManager.ts
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface UseTabManagerOptions {
  defaultTab: string;
  paramName?: string;
  onTabChange?: (tabId: string) => void;
}

export function useTabManager({ 
  defaultTab, 
  paramName = 'tab', 
  onTabChange 
}: UseTabManagerOptions) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Read tab from URL on initial load
    const urlTab = searchParams.get(paramName);
    if (urlTab && urlTab !== activeTab) {
      setActiveTab(urlTab);
      onTabChange?.(urlTab);
    }
  }, []);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);

    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, tabId);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams, paramName, onTabChange]);

  return {
    activeTab,
    setActiveTab: handleTabChange,
    isActive: (tabId: string) => activeTab === tabId
  };
}