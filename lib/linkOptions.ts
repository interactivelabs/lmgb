import { Lang } from './SiteContext';

export const getHeaderOptions = (lang: Lang) => [
  {
    href: '/about',
    text: lang === Lang.EN ? 'About' : 'Conóceme',
    id: 'header_optios_1',
  },
  {
    href: '/office',
    text: lang === Lang.EN ? 'Office Hours' : 'Asesorías',
    id: 'header_optios_2',
  },
];

export const getFooterOptions = () => [
  {
    href: 'mailto:luismgonzalezb@gmail.com',
    text: 'luismgonzalezb@gmail.com',
    id: 'footer_optios_1',
  },
  {
    href: 'https://www.linkedin.com/in/luismgonzalezb/',
    target: '_blank',
    text: 'LinkedIn',
    id: 'footer_optios_2',
  },
  {
    href: 'https://www.youtube.com/channel/UCJhitTFGzsZJdSflM63T3mA',
    target: '_blank',
    text: 'Youtube',
    id: 'footer_optios_3',
  },
];
