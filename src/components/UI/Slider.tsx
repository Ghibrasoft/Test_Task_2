import React, { useState } from 'react';
import { ISliderProps } from '../../interfaces/interfaces';


const Slider: React.FC<ISliderProps> = ({ dataLength, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(dataLength / 3);

    const Next = () => {
        setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    }

    const Prev = () => {
        setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
    }

    const renderSlides = () => {
        const startIndex = currentSlide * 3;
        const endIndex = startIndex + 3;
        return React.Children.toArray(children).slice(startIndex, endIndex);
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center justify-center w-12 cursor-pointer text-gray-500 hover:text-gray-900" onClick={Prev}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-center w-12 cursor-pointer text-gray-500 hover:text-gray-900" onClick={Next}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <div className="flex flex-col gap-3">
                {renderSlides()}
            </div>
        </div>
    );
}

export default Slider;
