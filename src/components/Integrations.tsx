import { useEffect, useState } from 'react'
import Button from './UI/Button'
import Switch from './UI/Switch';
import Card from './UI/Card';


const BUTTONS = [
    "Small Business",
    "Medium Business",
    "Enterprice"
];
const CARD_CONTENT = [
    {
        title: "Sapling",
        description: "HR Management",
        logo: ""
    },
    {
        title: "Lauren Robson",
        description: "HM Director",
        about: "“I want to lower PTO liability and keep my employees happy. I want to lower PTO liability.”",
        avatar: ""
    },
    {
        title: "Workday",
        description: "",
        logo: "HR Management"
    },
    {
        title: "Xero",
        description: "Employers Base",
        logo: ""
    },
    {
        title: "Rippling",
        description: "Salary Management",
        logo: ""
    },
    {
        title: "Expensify",
        description: "",
        logo: "HR Management"
    },
    {
        title: "Zenefits",
        description: "",
        logo: "HR Management"
    }
];

const Integrations = () => {
    const [activeBtn, setActiveBtn] = useState("Small Business");
    const [activeSwitches, setActiveSwitches] = useState<boolean[]>([]);

    const handleToggle = (index: number) => {
        setActiveSwitches(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState
        })
    };

    useEffect(() => {
        const initialSwitchState = CARD_CONTENT.map(({ title }) => {
            if (activeBtn === 'Small Business') {
                return title === 'Zenefits';
            } else if (activeBtn === 'Medium Business') {
                return title === 'Sapling' || title === 'Workday';
            } else {
                return false;
            }
        })

        setActiveSwitches(initialSwitchState);
    }, [activeBtn]);


    return (
        <div className='h-screen'>
            {/* content */}
            <div className='flex flex-col gap-10 h-full'>
                {/* title */}
                <div className='flex flex-col gap-8 w-[42%] mx-auto text-center'>
                    <h1 className='text-5xl font-bold'>Easy Turn-Key Integration</h1>
                    <p className='text-md text-gray-950/90'>
                        Increase job satisfaction, improve engagement, decrease burnout
                        and lower payroll liability by reimagining what employees can do with their PTO.
                    </p>
                </div>

                {/* cards & buttons */}
                <div className='flex flex-col items-center gap-20'>
                    {/* buttons */}
                    <div className='flex gap-3'>
                        {BUTTONS.map((title, index) => (
                            <Button
                                key={index}
                                type="secondary"
                                className='font-bold'
                                active={title === activeBtn}
                                onClick={() => setActiveBtn(title)}
                            >
                                {title}
                            </Button>
                        ))}
                    </div>

                    {/* cards */}
                    <div className='grid grid-cols-3 gap-x-32 gap-y-8'>
                        {CARD_CONTENT.map(({ title, description, about, avatar, logo }, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between gap-5 ring-1 rounded-xl p-5 ${about ? 'row-span-3 col-span-1' : 'w-72 h-20 '} ${activeSwitches[index] ? 'ring-2 ring-violet-500/90' : 'ring-gray-200'}`}
                            >
                                <div className='flex items-center gap-2'>
                                    <img
                                        // alt={`${title}-logo`}
                                        alt='lg'
                                        src='https://via.placeholder.com/48'
                                        className='w-12 h-12 object-fit rounded-xl bg-violet-200'
                                    />
                                    <div>
                                        <h3>{title}</h3>
                                        <span className='text-xs text-gray-950/90'>{description}</span>
                                    </div>
                                </div>

                                <Switch
                                    isOn={activeSwitches[index]}
                                    // disabled={!activeSwitches[index]}
                                    handleToggle={() => handleToggle(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations