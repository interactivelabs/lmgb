import LinkText from "@/components/LinkText";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface HomeProps {
  params: { lang: Locale };
}

export default async function Home({ params }: HomeProps) {
  const { lang } = params;
  const { home, langs, joins } = await getDictionary(lang);
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="mt-3 text-2xl">
          {lang === "en" ? (
            <span>
              Hi, <b>Luis</b> here
            </span>
          ) : (
            <span>
              Hola, soy <b>Luis</b>
            </span>
          )}
        </p>
        <p className="mt-3 text-2xl">
          <span>{home["intro-work"]}</span>{" "}
          <LinkText
            href="https://www.linkedin.com/in/luismgonzalezb/"
            target="_blank"
            underline
          >
            Airbnb,
          </LinkText>{" "}
          <span>
            <span>{home["intro-enjoy"]}</span>{" "}
          </span>{" "}
          <LinkText href="/en" underline>
            {langs.en}
          </LinkText>{" "}
          {joins.and}{" "}
          <LinkText href="/es" underline>
            {langs.es}
          </LinkText>
        </p>
      </div>
    </main>
  );
}
