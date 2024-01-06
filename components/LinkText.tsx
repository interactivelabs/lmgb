import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface LinkTextProps {
  children: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  underline?: boolean;
}

const LinkText = ({ children, href, target, underline }: LinkTextProps) => (
  <Link
    href={href}
    className={`transition-colors duration-200 hover:text-gray-900 ${
      underline ? "underline" : ""
    }`}
    target={target}
    rel={target === "_blank" ? "noreferrer" : ""}
  >
    {children}
  </Link>
);

export default LinkText;
