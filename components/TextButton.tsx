import { MouseEventHandler, ReactNode } from 'react';

interface TextButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  underline?: boolean;
}

const TextButton = ({ children, onClick, underline }: TextButtonProps) => (
  <button
    onClick={onClick}
    className={`transition-colors duration-200 hover:text-gray-900 ${
      underline ? 'underline' : ''
    }`}
  >
    {children}
  </button>
);

export default TextButton;
