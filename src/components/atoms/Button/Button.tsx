import React from 'react';
import './Button.scss';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    return (
        <button className="button" type={type}>
            {children}
        </button>
    );
};

export default Button;
