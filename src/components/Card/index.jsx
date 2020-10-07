import React from 'react';

import { Card as CardStyled } from './styles';

function Card({ children, option, onClick }) {
    return (
        <CardStyled onClick={onClick} option={option}>
            <h1>{children}</h1>
        </CardStyled>
    );
}

export default Card;