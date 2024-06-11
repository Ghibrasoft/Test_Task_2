import { ICardContent } from "../../interfaces/interfaces";

const BUTTONS = ["Small Business", "Medium Business", "Enterprise"];

const CARD_CONTENT: ICardContent[] = [
  {
    type: "small",
    title: "Sapling",
    description: "HR Management",
    logo: "./images/sapling.png",
  },
  {
    type: "default",
    title: "Lauren Robson",
    description: "HM Director",
    about:
      "“I want to lower PTO liability and keep my employees happy. I want to lower PTO liability.”",
    avatar: "./images/hr_director.png",
  },
  {
    type: "small",
    title: "Rippling",
    description: "Salary Management",
    logo: "./images/rippling.png",
  },
  {
    type: "small",
    title: "Workday",
    description: "HR Management",
    logo: "./images/workday.png",
  },
  {
    type: "small",
    title: "Expensify",
    description: "HR Management",
    logo: "./images/expensify.png",
  },
  {
    type: "small",
    title: "Xero",
    description: "Employers Base",
    logo: "./images/xero.png",
  },
  {
    type: "small",
    title: "Zenefits",
    description: "HR Management",
    logo: "./images/zenefits.png",
  },
];

export { BUTTONS, CARD_CONTENT };
