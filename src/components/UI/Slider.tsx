import React, { useState } from 'react'


interface ISliderProps {
    data: any;
}
const Slider: React.FC<ISliderProps> = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(data.length / 3);

    const Next = () => {
        setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    }

    const Prev = () => {
        setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
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
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4">
                    {data.slice(currentSlide, currentSlide + 3).map((card: any, index: number) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                            <img src={card.logo} alt={card.title} className="w-12 h-12 mx-auto mb-4" />
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider