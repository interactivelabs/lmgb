import { Locale } from "./i18n-config";

export const getHeaderOptions = (locale: Locale) => [
  {
    href: `/${locale}/about`,
    text: locale === "en" ? "About" : "Conóceme",
    id: "header_optios_1",
  },
];
