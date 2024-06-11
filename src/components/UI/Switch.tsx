import React from 'react';

import { ISwitchProps } from '../../interfaces/interfaces';


const Switch: React.FC<ISwitchProps> = ({
    isOn,
    disabled = false,
    handleToggle
}) => {
    const handleClick = () => {
        if (!disabled && handleToggle) {
            handleToggle();
        }
    }
    return (
        <div
            className={`relative inline-block w-[27px] h-[18px] border-[3px]  rounded-full align-middle select-none transition duration-150 ease-in
      ${isOn ? 'bg-vio-soft border-vio-soft' : 'bg-light-frost-pale border-gray-400'}
      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
            onClick={handleClick}
        >
            <span
                className={`block w-[8px] h-[8px] m-1 transform -translate-y-[1.3px] rounded-full transition-transform duration-150 ease-in
        ${isOn ? 'translate-x-2 bg-light-frost-pale' : '-translate-x-[1px] bg-gray-400'}`}
            ></span>
        </div>
    );
};

export default Switch
