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
            'bg-vio-soft text-light-frost-pale text-xs hover:bg-vio active:bg-vio' :
            type === 'default' ?
                `hover:bg-vio-soft active:bg-vio hover:text-light-frost-pale text-xs border-[1px] border-frost-soft hover:border-vio-soft active:border-vio ${active ? 'bg-vio-soft border-vio-soft text-light-frost-pale' : 'text-vio-dark'}` :
                type === 'secondary' ?
                    `ring-1 ring-vio-soft text-vio-soft hover:bg-vio-soft hover:text-light-frost-pale active:bg-vio text-xs ${active ? 'bg-vio-soft text-light-frost-pale' : ''}` :
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