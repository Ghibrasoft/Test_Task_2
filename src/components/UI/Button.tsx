import React from 'react';

interface IButtonProps {
    type?: "primary" | "default" | "secondary" | "ghost";
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    role?: string;
    tabIndex?: number;
    active?: boolean;
    onClick?: () => void;

}
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
            'bg-violet-500/90 text-white text-sm hover:bg-violet-600 active:bg-violet-700 rounded-xl py-2 px-4' :
            type === 'default' ?
                'bg-violet-300/20 hover:bg-violet-300/30 active:bg-violet-300/10 text-white text-sm rounded-xl py-2 px-4' :
                type === 'secondary' ?
                    `ring-1 ring-violet-500/90 text-violet-500/90 hover:bg-violet-500/90 hover:text-white active:bg-violet-600 text-sm rounded-xl py-2 px-4 ${active ? 'bg-violet-500/90 text-white' : ''}` :
                    'hover:bg-gray-100 active:bg-gray-200 text-sm rounded-xl py-2 px-4';

    return (
        <button
            className={`${typeClassName} ${className} transition duration-100 ease-in`}
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