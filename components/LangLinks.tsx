import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";

import LinkText from "./LinkText";

interface LangLinksProps {
  lang: Locale;
  page: string;
}

export default async function LangLinks({ lang, page }: LangLinksProps) {
  const { langs } = await getDictionary(lang);
  return (
    <div className="flex items-center justify-around w-full h-24">
      <div className="text-center pt-8">
        <LinkText href={`/en/${page}`} underline>
          {langs.en}
        </LinkText>{" "}
        /{" "}
        <LinkText href={`/es/${page}`} underline>
          {langs.es}
        </LinkText>
      </div>
    </div>
  );
}
