import { getFooterOptions } from '../lib/linkOptions';
import SimpleDivideNav from './SimpleDivideNav';

const Footer = () => {
  const FOOTER_OPTIONS = getFooterOptions();
  return (
    <footer className="flex items-center justify-center w-full h-24 divide-x">
      <SimpleDivideNav options={FOOTER_OPTIONS} />
    </footer>
  );
};

export default Footer;
