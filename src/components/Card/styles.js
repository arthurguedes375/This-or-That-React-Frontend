import styled from 'styled-components';

export const Card = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: ease 0.4s;

    &:hover {
        filter: brightness(1.40);
    }

    background-color: ${props => props.option && (props.option === 'first') ? "#0984e3" : "#d63031"};

    h1 {
        font-size: 80px;
        color: white;
    }
`;