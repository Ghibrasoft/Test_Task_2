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
        // key: 1,
        type: "small",
        title: "Sapling",
        description: "HR Management",
        logo: "https://via.placeholder.com/48"
    },
    {
        // key: 4,
        type: "default",
        title: "Lauren Robson",
        description: "HM Director",
        about: "“I want to lower PTO liability and keep my employees happy. I want to lower PTO liability.”",
        avatar: "https://via.placeholder.com/86"
    },
    {
        // key: 2,
        type: "small",
        title: "Workday",
        description: "HR Management",
        logo: "https://via.placeholder.com/48"
    },
    {
        // key: 3,
        type: "small",
        title: "Xero",
        description: "Employers Base",
        logo: "https://via.placeholder.com/48"
    },
    {
        // key: 5,
        type: "small",
        title: "Rippling",
        description: "Salary Management",
        logo: "https://via.placeholder.com/48"
    },
    {
        // key: 6,
        type: "small",
        title: "Expensify",
        description: "HR Management",
        logo: "https://via.placeholder.com/48"
    },
    {
        // key: 7,
        type: "small",
        title: "Zenefits",
        description: "HR Management",
        logo: "https://via.placeholder.com/48"
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
        <div className='h-screen w-[1180px] mx-auto'>
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
                    <div className='grid grid-cols-[auto,auto,auto] gap-x-10 gap-y-5 w-full'>
                        {CARD_CONTENT.map(({ type, title, description, about, avatar, logo }, index) => (
                            type === 'default' ? (
                                <div className='row-span-3 col-span-1 self-end'>
                                    <Card
                                        className='bg-violet-100/70'
                                        key={index}
                                        type={"default"}
                                        title={title}
                                        description={description}
                                        about={about || ''}
                                        avatar={avatar || ''}
                                    />
                                </div>
                            ) : (
                                <Card
                                    className='card-connector self-auto'
                                    key={index}
                                    type={"small"}
                                    title={title}
                                    description={description}
                                    logo={logo || ''}
                                    isOn={activeSwitches[index]}
                                    switch={<Switch
                                        isOn={activeSwitches[index]}
                                        handleToggle={() => handleToggle(index)}
                                    />}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integrations