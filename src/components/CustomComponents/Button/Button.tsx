import React from 'react'
import './button.scss';

interface ButtonProps {
    text: string;
    type?: string;
    onClick?: any;
}

export const Button: React.FC<ButtonProps> = React.memo(({ text, type, onClick }) => {
    return (
        <div className={`btn ${type ? type : 'default'}`} onClick={onClick}>
            {text}
        </div>
    )
});
