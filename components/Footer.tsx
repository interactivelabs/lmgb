import { getFooterOptions } from "@/lib/footerOptions";

import SimpleDivideNav from "./SimpleDivideNav";

const Footer = () => (
  <footer className="flex items-center justify-center w-full h-24 divide-x">
    <SimpleDivideNav options={getFooterOptions()} />
  </footer>
);

export default Footer;
