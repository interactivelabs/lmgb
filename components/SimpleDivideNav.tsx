import { HTMLAttributeAnchorTarget } from "react";

import LinkText from "./LinkText";

interface SimpleDivideNavOption {
  id: string;
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

interface SimpleDivideNavProps {
  options: SimpleDivideNavOption[];
}

const SimpleDivideNav = ({ options }: SimpleDivideNavProps) => (
  <ul className={`grid grid-flow-col auto-cols-auto divide-x divide-black`}>
    {options.map((option) => (
      <li className="text-center px-4" key={option.id}>
        <LinkText href={option.href} target={option.target}>
          {option.text}
        </LinkText>
      </li>
    ))}
  </ul>
);

export default SimpleDivideNav;
