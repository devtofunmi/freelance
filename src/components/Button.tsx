import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({  text }) => {
  return (
        <button
          className="bg-green-500  text-lg text-white p-2 mt-5 rounded-full px-6 md:px-5 py-2"
        >
          {text}
        </button>
  );
};

export default Button;