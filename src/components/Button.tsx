
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled }) => {
  return (
      <Link href={disabled ? '/' : text.toLowerCase() === 'apply as a freelancer' ? '/freelancerpage' : '/clientpage'}>
        <button
          className={`bg-green-500  text-lg text-white p-2 mt-5 rounded-full px-5 py-2 ${
            disabled ? 'cursor-not-allowed bg-gray-600' : 'hover:bg-green-600'
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
    </Link>
  );
};

export default Button;