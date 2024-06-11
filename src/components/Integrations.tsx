import { useEffect, useMemo, useState } from 'react';

import Card from './UI/Card';
import Slider from './UI/Slider';
import Button from './UI/Button';
import Switch from './UI/Switch';

import { SwitchStates } from '../interfaces/interfaces';
import { BUTTONS, CARD_CONTENT } from '../assets/data/data';
import { getInitialSwitchStates } from '../helpers/getInitialSwitchStates';



const WINDOW_WIDTH = window.innerWidth;
const isMobile = WINDOW_WIDTH <= 640;
const SLIDER_CARDS = isMobile ? CARD_CONTENT.filter(({ type }) => type === 'small') : [];
const Integrations = () => {
    const [activeBtn, setActiveBtn] = useState("Small Business");
    const [switchStates, setSwitchStates] = useState<SwitchStates>(getInitialSwitchStates(isMobile));

    // toggle switch
    const handleToggle = (index: number) => {
        setSwitchStates(prevStates => ({
            ...prevStates,
            [activeBtn]: prevStates[activeBtn].map((state, ind) => index === ind ? !state : state)
        }))
    };

    // update switch state when active btn changes
    useEffect(() => {
        setSwitchStates(prevStates => ({
            ...prevStates,
            [activeBtn]: prevStates[activeBtn]
        }));
    }, [activeBtn]);

    // tab buttons
    const renderButtons = useMemo(() => BUTTONS.map((title, index) => (
        <Button
            key={index}
            type={isMobile ? "ghost" : "default"}
            active={title === activeBtn}
            onClick={() => setActiveBtn(title)}
        >
            {title}
        </Button>
    )), [activeBtn, isMobile]);

    return (
        <div className='h-screen w-full sm:w-[1180px] mx-auto'>
            {/* content */}
            <div className='flex flex-col gap-10 h-full'>
                {/* title */}
                <div className='flex flex-col gap-8 w-[323px] sm:w-[779px] mx-auto text-center'>
                    <h1 className='text-4xl sm:text-6xl font-bold leading-[43px] sm:leading-[83px] text-vio-deep'>Easy Turn-Key Integration</h1>
                    <p className='text-base sm:text-[19px] text-gray-950/90 leading-6 sm:leading-7'>
                        Increase job satisfaction, improve engagement, decrease burnout
                        and lower payroll liability by reimagining what employees can do with their PTO.
                    </p>
                </div>

                {/* cards & buttons */}
                <div className={`flex flex-col items-center gap-20`}>
                    {/* buttons */}
                    <div className={`flex justify-center gap-0 sm:gap-2 border-b-[1px] w-full sm:w-fit sm:border-none`}>
                        {renderButtons}
                    </div>

                    {/* cards */}

                    {isMobile ? (
                        <div className='flex flex-col gap-5'>
                            <Card
                                type='default'
                                title='Lauren Robson'
                                description='HM Director'
                                about='“I want to lower PTO liability and keep my employees happy. I want to lower PTO liability.”'
                                avatar='./images/hr_director.png'
                            />

                            <Slider
                                dataLength={SLIDER_CARDS.length}
                            >
                                {SLIDER_CARDS.map(({ title, description, logo = '' }, index) => (
                                    <Card
                                        key={index}
                                        type='small'
                                        title={title}
                                        description={description}
                                        logo={logo}
                                        isOn={switchStates[activeBtn][index]}
                                        switch={<Switch
                                            isOn={switchStates[activeBtn][index]}
                                            handleToggle={() => handleToggle(index)}
                                        />}
                                    />
                                ))}
                            </Slider>
                        </div>

                    ) :
                        <div className='grid grid-cols-[auto,auto,auto] gap-x-28 gap-y-5 place-items-center w-full'>
                            {CARD_CONTENT.map(({ type, title, description, about = '', avatar = '', logo = '' }, index) => (
                                type === 'default' ? (
                                    <div
                                        className='row-span-3 col-span-1 self-end'
                                        key={index}
                                    >
                                        <Card
                                            type={"default"}
                                            title={title}
                                            description={description}
                                            about={about}
                                            avatar={avatar}
                                        />
                                    </div>
                                ) : (
                                    <Card
                                        className={`card-connector self-auto ${switchStates[activeBtn][index] ? 'is-on z-20' : ''}`}
                                        key={index}
                                        type={"small"}
                                        title={title}
                                        description={description}
                                        logo={logo}
                                        isOn={switchStates[activeBtn][index]}
                                        switch={<Switch
                                            isOn={switchStates[activeBtn][index]}
                                            handleToggle={() => handleToggle(index)}
                                        />}
                                    />
                                )
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Integrations