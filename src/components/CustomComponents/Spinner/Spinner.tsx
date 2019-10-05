import React from 'react'
import './spinner.scss';

export const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
        </div>
    )
}
