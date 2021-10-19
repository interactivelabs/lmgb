import React, { useContext } from 'react';
import MainLayout from '../components/MainLayout';
import IndexEn from '../components/pages/index_en';
import IndexEs from '../components/pages/index_es';
import { Lang, SiteContext } from '../lib/SiteContext';

const Home = () => {
  const { lang } = useContext(SiteContext);
  return (
    <MainLayout>{lang === Lang.EN ? <IndexEn /> : <IndexEs />}</MainLayout>
  );
};

export default Home;
