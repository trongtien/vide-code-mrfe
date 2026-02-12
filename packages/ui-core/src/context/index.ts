import { createContext, useContext, type ReactNode } from 'react';

export interface AppContextValue {
  appName: string;
  version: string;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
}

export interface AppContextProviderProps {
  children: ReactNode;
  value: AppContextValue;
}

export function AppContextProvider({ children, value }: AppContextProviderProps) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
