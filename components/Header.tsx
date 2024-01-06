import Image from "next/image";
import Link from "next/link";

import { Locale } from "@/lib/i18n-config";
import { getHeaderOptions } from "@/lib/menuOprtions";

import logo from "../public/img/logo1.svg";
import SimpleDivideNav from "./SimpleDivideNav";

interface HeaderProps {
  lang: Locale;
}

const Header = ({ lang }: HeaderProps) => (
  <header className="flex items-center justify-around w-full h-24">
    <Link href="/">
      <Image src={logo} alt="Lmgb logo" height={80} width={80} />
    </Link>
    <nav>
      <SimpleDivideNav options={getHeaderOptions(lang)} />
    </nav>
  </header>
);

export default Header;
