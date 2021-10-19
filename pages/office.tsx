import React, { useContext } from "react";
import MainLayout from "../components/MainLayout";
import OfficeEn from "../components/pages/office_en";
import OfficeEs from "../components/pages/office_es";
import { Lang, SiteContext } from "../lib/SiteContext";

const Office = () => {
  const { lang } = useContext(SiteContext);
  return (
    <MainLayout>{lang === Lang.EN ? <OfficeEn /> : <OfficeEs />}</MainLayout>
  );
};

export default Office;
