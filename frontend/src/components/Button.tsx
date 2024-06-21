// Button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', className = '', children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-background-blue-dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
