import React, { useState, useRef } from 'react';

import { ISliderProps } from '../../interfaces/interfaces';


const Slider: React.FC<ISliderProps> = ({ dataLength, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(dataLength / 3);
    const startXRef = useRef(0);
    const moveXRef = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        startXRef.current = touch.clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        moveXRef.current = touch.clientX - startXRef.current;
    };

    const handleTouchEnd = () => {
        if (Math.abs(moveXRef.current) > 50) {
            if (moveXRef.current > 0) {
                Prev();
            } else {
                Next();
            }
        }
        moveXRef.current = 0;
    };

    const Next = () => {
        setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    };

    const Prev = () => {
        setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
    };

    const renderSlides = () => {
        const startIndex = currentSlide * 3;
        const endIndex = startIndex + 3;
        return React.Children.toArray(children).slice(startIndex, endIndex);
    };

    return (
        <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="flex flex-col gap-3">
                {renderSlides()}
            </div>
        </div>
    );
}

export default Slider;
