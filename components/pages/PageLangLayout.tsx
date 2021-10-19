import { ReactNode, useCallback, useContext } from 'react';
import { Lang, SiteContext } from '../../lib/SiteContext';
import TextButton from '../TextButton';

interface PageLangLayoutProps {
  children: ReactNode;
}

const PageLangLayout = ({ children }: PageLangLayoutProps) => {
  const { lang, setLang } = useContext(SiteContext);
  const setEn = useCallback(() => setLang(Lang.EN), []);
  const setEs = useCallback(() => setLang(Lang.ES), []);
  return (
    <main className="flex flex-col w-full flex-1">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4">
        {children}
      </div>
      <div className="text-center pt-8">
        <TextButton onClick={setEn} underline>
          {lang === Lang.EN ? 'english' : 'inglés'}
        </TextButton>{' '}
        /{' '}
        <TextButton onClick={setEs} underline>
          {lang === Lang.EN ? 'spanish' : 'español'}
        </TextButton>
      </div>
    </main>
  );
};

export default PageLangLayout;
