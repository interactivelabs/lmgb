import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Link from 'next/link';

interface LinkTextProps {
  children: ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  underline?: boolean;
}

const LinkText = ({ children, href, target, underline }: LinkTextProps) => (
  <Link href={href}>
    <a
      className={`transition-colors duration-200 hover:text-gray-900 ${
        underline ? 'underline' : ''
      }`}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : ''}
    >
      {children}
    </a>
  </Link>
);

export default LinkText;
