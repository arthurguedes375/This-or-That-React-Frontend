import React from 'react';

// Components
import Card from '../../components/Card';


// Styles
import { Container, Cards, Circle } from './styles';

function Home() {

    function handleVote(option) {
        return async () => {

        }
    }

    return (
        <Container>
            <h1>This or That</h1>
            <Cards>
                <Card option="first" onClick={handleVote(0)}>Hot Dog</Card>
                <Card option="secound" onClick={handleVote(1)}>Water</Card>
                <Circle>
                    <span>OR</span>
                </Circle>
            </Cards>
        </Container>
    );
}

export default Home;