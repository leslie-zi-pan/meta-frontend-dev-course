import { CardProps } from "../types/types";

const Card = (props: CardProps) => {
    const cardContainerStyles: React.CSSProperties = {
        border: '1px white solid',
        borderRadius: '25px',
    }

    return (
        <div style={cardContainerStyles} className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    )
}

export default Card;