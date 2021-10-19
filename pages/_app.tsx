import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import SiteContextProvider from '../lib/SiteContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteContextProvider>
      <Component {...pageProps} />
    </SiteContextProvider>
  );
}
export default MyApp;
