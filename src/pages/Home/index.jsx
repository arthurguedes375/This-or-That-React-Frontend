import React, { useEffect, useState } from 'react';

// Components
import Card from '../../components/Card';


// Styles
import { Container, Cards, Circle } from './styles';


// Axios
import axios from '../../services/axios';


function Home() {

    const [games, setGames] = useState([]);
    const [gamesIndex, setGamesIndex] = useState(0);
    const [finish, setFinish] = useState(false);
    const currentGame = games[gamesIndex] || {};

    useEffect(() => {
        loadGames();
    }, []);

    async function loadGames(page = 1) {
        page = (localStorage.getItem("page")) ? localStorage.getItem("page") : page;
        const gamesRequest = await axios.get(`/games?page=${page}`);
        if (gamesRequest.status < 200) alert("Was not possible load the games");
        setGames(gamesRequest.data);
        setGamesIndex(0);
        if (!localStorage.getItem("page")) {
            localStorage.setItem("page", page);
        }
        setTimeout(() => {
            if (!gamesRequest.data[0] || !gamesRequest.data[0]._id) {
                setFinish(true);
            }
        }, 100);
    }

    function handleVote(option) {
        return async () => {
            const voteUrl = `/votes/${currentGame._id}`;
            const vote = await axios.put(voteUrl, {
                option,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setGamesIndex(gamesIndex + 1);
            if (gamesIndex + 1 === games.length) {
                const currentPage = parseInt(localStorage.getItem("page")) || 0;
                localStorage.setItem("page", currentPage + 1);
                await loadGames(currentPage + 1);
            }
        }
    }



    return (
        <Container>
            <h1>This <span>OR</span> That</h1>
            {(!finish)
                ? (
                    <Cards>
                        <Card option="first" onClick={handleVote(0)}>{currentGame.first}</Card>
                        <Card option="secound" onClick={handleVote(1)}>{currentGame.secound}</Card>
                        <Circle>
                            <span>OR</span>
                        </Circle>
                    </Cards>
                )
                : (
                    <h1>Finish</h1>
                )}

        </Container >
    );
}

export default Home;