import React from 'react'
import './button.scss';

interface IProps {
    text: string,
    type?: string
    onClick?: any
}

export const Button: React.FC<IProps> = React.memo(({ text, type, onClick }) => {
    return (
        <div className={`btn ${type ? type : 'default'}`} onClick={onClick}>
            {text}
        </div>
    )
});
