import { createContext, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

export enum Lang {
  EN,
  ES,
}

export interface SiteState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const getLang = (): Lang => parseInt(Cookies.get('lang') || '0', 10);
export const setCookieLang = (lang: Lang) =>
  Cookies.set('lang', lang.toString(), { sameSite: 'strict' });

export const SiteContext = createContext<SiteState>({
  lang: Lang.EN,
  setLang: setCookieLang,
});

interface SiteContextProviderProps {
  children: ReactNode;
}

const SiteContextProvider = ({ children }: SiteContextProviderProps) => {
  const [lang, setLocalLang] = useState<Lang>(getLang());
  const setLang = (lang: Lang) => {
    setLocalLang(lang);
    setCookieLang(lang);
  };
  return (
    <SiteContext.Provider value={{ lang, setLang }}>
      {children}
    </SiteContext.Provider>
  );
};

export default SiteContextProvider;
