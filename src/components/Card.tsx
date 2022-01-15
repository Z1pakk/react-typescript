import React, {FC, useState} from 'react';

export enum CardVariation {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariation,
    onClick: (num: number) => void
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
         children
     }) => {
        const [state, setState] = useState(0);
        return (
            <div
                style={{
                    width,
                    height,
                    border: variant == CardVariation.outlined ? "1px solid gray" : 'none',
                    background: variant === CardVariation.primary ? 'lightgray' : ''
                }}
                onClick={() => onClick(state)}
            >
                {children}
            </div>
        );
    };

export default Card;
