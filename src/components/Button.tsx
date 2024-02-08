
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <button className={`bg-green-500 text-lg text-white p-2 mt-5 rounded-full px-5 py-2 ${disabled ? 'bg-gray-500 cursor-not-allowed' : ''}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;