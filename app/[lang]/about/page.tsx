import Image from "next/image";

import LangLinks from "@/components/LangLinks";
import LinkText from "@/components/LinkText";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, type Locale } from "@/lib/i18n-config";

import desk from "../../../public/img/desk.jpg";
import fall from "../../../public/img/fall.jpg";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface AboutProps {
  params: { lang: Locale };
}

export default async function About({ params }: AboutProps) {
  const { lang } = params;
  const { about } = await getDictionary(lang);
  return (
    <>
      <div className="md:w-1/2 lg:w-1/2">
        <h1 className="mt-3 text-2xl">{about.title}</h1>
        <p className="mt-4">
          {about.from}{" "}
          <LinkText href="https://zacatecas.tecnm.mx" target="_blank" underline>
            Instituto Tecnológico de Zacatecas
          </LinkText>{" "}
          {about.degree}
        </p>
        <p className="mt-4">
          {about.goal} ({about.linkedin}
          <LinkText
            href="https://www.linkedin.com/in/luismgonzalezb/"
            underline
            target="_blank"
          >
            LinkedIn
          </LinkText>
          )
        </p>
        <div className="mt-4 flex justify-center">
          <Image src={desk} alt="Picture of my current desk at home" loading="eager" />
        </div>
        <p className="mt-4">
          {about.logo}{" "}
          <LinkText
            href="https://el.media.mit.edu/logo-foundation/index.html"
            target="_blank"
            underline
          >
            Logo.
          </LinkText>{" "}
          {about["other-langs"]}
        </p>
        <p className="mt-4">
          {about.gaming}{" "}
          <LinkText
            href="https://www.ea.com/games/apex-legends"
            target="_blank"
            underline
          >
            Apex Legends
          </LinkText>{" "}
          {about["gaming-2"]}{" "}
          <LinkText
            href="https://www.supergiantgames.com/games/hades/"
            target="_blank"
            underline
          >
            Hades,
          </LinkText>{" "}
          <LinkText
            href="https://www.ageofempires.com/"
            target="_blank"
            underline
          >
            Age of Empires.
          </LinkText>
        </p>
        <p className="mt-4">{about.music}</p>
        <div className="mt-4">
          <div className="w-full md:w-1/2 pr-4 float-left">
            <Image src={fall} alt="Picture of me and my girl walking" />
          </div>
          <p>{about.family}</p>
          <p className="mt-4">{about.help}</p>
          <p className="mt-4 font-bold">{about.thanks}</p>
        </div>
      </div>
      <LangLinks lang={lang} page="/about" />
    </>
  );
}
