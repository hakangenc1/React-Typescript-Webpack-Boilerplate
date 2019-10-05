import React from 'react';
import './input.scss';

interface Props {
    name: string,
    type: string,
    onChange: any,
    value: any,
    placeholder?: string
}

export const Input: React.FC<Props> = ({ name, type, onChange, value, placeholder }) => {
    return (
        <input className="custom-input"
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    )
}
