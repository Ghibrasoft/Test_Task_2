import React from 'react';

interface ISwitchProps {
    isOn: boolean;
    disabled?: boolean;
    handleToggle?: () => void;
}
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
            className={`relative inline-block w-11 border-4  rounded-full align-middle select-none transition duration-150 ease-in
      ${isOn ? 'bg-violet-500/90 border-violet-500/90' : 'bg-white border-gray-400'}
      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
            onClick={handleClick}
        >
            <span
                className={`block w-3 h-3 m-1 transform  rounded-full shadow-lg transition-transform duration-150 ease-in
        ${isOn ? 'translate-x-4 bg-white' : 'bg-gray-400'}`}
            ></span>
        </div>
    );
};

export default Switch
