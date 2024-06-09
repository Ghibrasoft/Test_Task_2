import React from 'react'


interface IDefaultCardProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "default";
    avatar: string;
    title: string;
    description: string;
    about: string;
    className?: string;
}
interface ISmallCardProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "small";
    logo: string;
    title: string;
    description: string;
    switch: React.ReactNode;
    isOn: boolean;
    className?: string;
}

type CardProps = IDefaultCardProps | ISmallCardProps;

const Card: React.FC<CardProps> = (props) => {
    if (props.type === 'default') {
        const { avatar, title, description, about, className } = props;
        return (
            <div className={`relative flex flex-col items-center gap-3 py-10 w-[380px] h-[268px] text-center ring-2 ring-violet-500/90 rounded-3xl ${className}`}>
                <img
                    alt='avatar'
                    src={avatar}
                    className='absolute left-1/2 -top-[15%] transform -translate-x-1/2 w-[86px] h-[86px] object-cover rounded-[10px] bg-violet-200'
                />
                <div className='flex flex-col items-center gap-4 mt-5 w-[300px] text-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <h1 className='leading-6 font-bold text-lg'>{title}</h1>
                        <span className='leading-5 text-sm'>{description}</span>
                    </div>
                    <span className='leading-6 text-base'>{about}</span>
                </div>
            </div>
        )
    } else {
        const { logo, title, description, switch: Switch, isOn, className } = props;
        const isOnClassName = isOn ? 'ring-2 ring-violet-500/90' : 'ring-gray-200'
        return (
            <div className={`flex items-center justify-between w-[280px] h-20 ring-1 rounded-xl p-5 ${isOnClassName} ${className}`}>
                <div className='flex items-center gap-2'>
                    <img
                        alt={`${title}-logo`}
                        src={logo}
                        className='w-12 h-12 object-cover rounded-xl bg-violet-200'
                    />
                    <div>
                        <h3 className='text-base font-medium leading-4'>{title}</h3>
                        <span className='text-xs font-normal text-gray-950/90 leading-5'>{description}</span>
                    </div>
                </div>
                {Switch}
            </div>
        )
    }
}

export default Card