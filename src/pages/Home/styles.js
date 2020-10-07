import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: #130f40;

    h1 {
        color: white;
        font-size: 50px;
        letter-spacing: 20px;
    }
`;

export const Cards = styled.div`
    height: 568px;
    width: 100%;

    margin-top: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Circle = styled.div`
    width: 133px;
    height: 133px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: #363636;

    position: absolute;
    z-index: 7;

    span {
        color: white;
        font-weight: 700;
        font-size: 50px;
    }
`;