import React from 'react'

import { CardProps } from '../../interfaces/interfaces';



const Card: React.FC<CardProps> = (props) => {
    if (props.type === 'default') {
        const { avatar, title, description, about, className } = props;
        return (
            <div className={`relative flex flex-col items-center gap-3 py-10 w-[323px] h-[240px] sm:w-[380px] sm:h-[268px] text-center border-2 border-vio-soft bg-violet-50 rounded-3xl z-10 ${className}`}>
                <img
                    alt='avatar'
                    src={avatar}
                    className='absolute left-1/2 -top-[43px] sm:-top-[30px] transform -translate-x-1/2 w-[86px] h-[86px] object-cover rounded-[10px] bg-violet-200'
                />
                <div className='flex flex-col items-center gap-7 mt-7 w-[300px] text-center'>
                    <div className='flex flex-col items-center gap-1'>
                        <h1 className='leading-6 font-bold text-lg text-vio-deep'>{title}</h1>
                        <span className='leading-6 sm:leading-5 text-sm'>{description}</span>
                    </div>
                    <span className='leading-6 text-base'>{about}</span>
                </div>
            </div>
        )
    } else {
        const { logo, title, description, switch: Switch, isOn, className } = props;
        const isOnClassName = isOn ? 'border border-transparent ring-[1.5px] ring-vio-soft' : 'border-frost-soft'
        return (
            <div className={`flex items-center justify-between w-[323px] sm:w-[280px] h-20 border border-1 rounded-xl p-5 bg-white z-10 ${isOnClassName} ${className}`}>
                <div className='flex items-center gap-2'>
                    <img
                        alt={`${title}-logo`}
                        src={logo}
                        className='w-12 h-12 object-cover rounded-xl bg-violet-200'
                    />
                    <div>
                        <h3 className='text-base font-medium leading-4 text-vio-deep'>{title}</h3>
                        <span className='text-xs font-normal text-gray-950/90 leading-5'>{description}</span>
                    </div>
                </div>
                {Switch}
            </div>
        )
    }
}

export default Card