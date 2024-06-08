import React from 'react'


interface ICardProps {
    size?: "default" | "small";
}
const Card: React.FC<ICardProps> = ({
    size = "default"
}) => {
    return (
        size === 'default' ?
            <div>default card</div>
            :
            <div>small card</div>
    )
}

export default Card