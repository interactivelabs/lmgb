import React, { useContext } from 'react';
import MainLayout from '../components/MainLayout';
import IndexEn from '../components/pages/index_en';
import IndexEs from '../components/pages/index_es';
import { Lang, SiteContext } from '../lib/SiteContext';

const Home = () => {
  const { lang } = useContext(SiteContext);
  return (
    <MainLayout>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="md:w-1/2 lg:w-1/3">
          {lang === Lang.EN ? <IndexEn /> : <IndexEs />}
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
