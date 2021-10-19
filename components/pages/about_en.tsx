import { useCallback, useContext } from "react";
import { Lang, SiteContext } from "../../lib/SiteContext";
import LinkText from "../LinkText";
import TextButton from "../TextButton";

const AboutEn = () => {
  const { setLang } = useContext(SiteContext);
  const setEn = useCallback(() => setLang(Lang.EN), []);
  const setEs = useCallback(() => setLang(Lang.ES), []);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="mt-3 text-2xl">ABOUT</p>
        <TextButton onClick={setEn} underline>
          english
        </TextButton>{" "}
        /{" "}
        <TextButton onClick={setEs} underline>
          spanish
        </TextButton>
      </div>
    </main>
  );
};

export default AboutEn;
