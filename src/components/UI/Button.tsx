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
            'bg-violet-500/90 text-white text-xs hover:bg-violet-600 active:bg-violet-700' :
            type === 'default' ?
                `hover:bg-violet-500/90 active:bg-violet-600  hover:text-white text-xs border-[1px] hover:border-violet-500/90 active:border-violet-600 ${active ? 'bg-violet-500/90 border-violet-500/90 text-white' : 'text-gray-500/90'}` :
                type === 'secondary' ?
                    `ring-1 ring-violet-500/90 text-violet-500/90 hover:bg-violet-500/90 hover:text-white active:bg-violet-600 text-xs ${active ? 'bg-violet-500/90 text-white' : ''}` :
                    'hover:bg-gray-100 active:bg-gray-200 text-xs';

    return (
        <button
            className={`${typeClassName} ${className} flex items-center justify-center h-[38px] p-[15px] font-bold rounded-xl transition duration-100 ease-in`}
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