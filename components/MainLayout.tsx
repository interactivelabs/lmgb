import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <div className="bg-noisy-v2 flex flex-col items-center justify-center min-h-screen border-16 border-white border-solid">
    <Head>
      <title>Luis Gonzalez - Software Engineer Evangelist</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
