import React, { useContext } from "react";
import MainLayout from "../components/MainLayout";
import AboutEn from "../components/pages/about_en";
import AboutEs from "../components/pages/about_es";
import { Lang, SiteContext } from "../lib/SiteContext";

const About = () => {
  const { lang } = useContext(SiteContext);
  return (
    <MainLayout>{lang === Lang.EN ? <AboutEn /> : <AboutEs />}</MainLayout>
  );
};

export default About;
