import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { getHeaderOptions } from '../lib/linkOptions';
import { SiteContext } from '../lib/SiteContext';
import SimpleDivideNav from './SimpleDivideNav';

const Header = () => {
  const { lang } = useContext(SiteContext);
  const HEADER_OPTIONS = getHeaderOptions(lang);
  return (
    <header className="flex items-center justify-around w-full h-24">
      <Link href="/">
        <a>
          <Image src="/img/logo1.svg" alt="Lmgb logo" height={80} width={80} />
        </a>
      </Link>
      <nav>
        <SimpleDivideNav options={HEADER_OPTIONS} />
      </nav>
    </header>
  );
};

export default Header;
