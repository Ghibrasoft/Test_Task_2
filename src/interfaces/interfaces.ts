export interface ICardContent {
  type: string;
  title: string;
  description: string;
  about?: string;
  avatar?: string;
  logo?: string;
}

export interface SwitchStates {
  [key: string]: boolean[];
}

export interface IButtonProps {
  type?: "primary" | "default" | "secondary" | "ghost";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  role?: string;
  tabIndex?: number;
  active?: boolean;
  onClick?: () => void;
}

export interface ISwitchProps {
  isOn: boolean;
  disabled?: boolean;
  handleToggle: () => void;
}

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

export type CardProps = IDefaultCardProps | ISmallCardProps;

export interface IGridCardsProps {
  activeBtn: any;
  switchStates: any[];
  handleToggle: (index: number) => void;
}

export interface ISliderProps {
  dataLength: number;
  children: React.ReactNode;
}
