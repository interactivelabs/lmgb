import { ReactNode, useCallback, useContext } from "react";
import { Lang, SiteContext } from "../../lib/SiteContext";
import TextButton from "../TextButton";

interface PageLangLayoutProps {
  children: ReactNode;
}

const PageLangLayout = ({ children }: PageLangLayoutProps) => {
  const { setLang } = useContext(SiteContext);
  const setEn = useCallback(() => setLang(Lang.EN), []);
  const setEs = useCallback(() => setLang(Lang.ES), []);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <TextButton onClick={setEn} underline>
          ingles
        </TextButton>{" "}
        /{" "}
        <TextButton onClick={setEs} underline>
          español
        </TextButton>
      </div>
      {children}
    </main>
  );
};

export default PageLangLayout;
