import React from 'react';

import { IButtonProps } from '../../interfaces/interfaces';


const Button: React.FC<IButtonProps> = ({
    type = 'primary',
    children,
    className,
    disabled = false,
    role,
    tabIndex,
    active = false,
    onClick
}) => {
    const typeClassName =
        type === 'primary' ?
            'bg-vio-soft text-light-frost-pale hover:bg-vio active:bg-vio' :
            type === 'default' ?
                `hover:bg-vio-soft active:bg-vio hover:text-light-frost-pale border-[1px] border-frost-soft hover:border-vio-soft active:border-vio ${active ? 'bg-vio-soft border-vio-soft text-light-frost-pale' : 'text-vio-dark'}` :
                type === 'secondary' ?
                    `ring-1 ring-vio-soft text-vio-soft hover:bg-vio-soft hover:text-light-frost-pale active:bg-vio ${active ? 'bg-vio-soft text-light-frost-pale' : ''}` :
                    `text-vio-deep border-b-2 border-b-transparent hover:border-b-vio-soft rounded-none ${active ? 'font-bold text-vio-soft border-b-2 border-b-vio-soft' : 'text-vio-deep/50'}`;

    return (
        <button
            className={`${typeClassName} ${className} flex items-center justify-center h-[38px] px-3 py-1 sm:p-[15px] text-sm sm:text-xs font-bold rounded-none sm:rounded-xl transition-all duration-100 ease-in`}
            onClick={onClick}
            disabled={disabled}
            role={role}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    )
}

export default Button