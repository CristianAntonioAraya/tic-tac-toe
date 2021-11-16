import React, { useState } from 'react';
import { conditionToWins, handldeIsPlay } from './services/Validation';
import './styles/App.css';

const App = () => {

    const [isPlaying, setIsPlaying] = useState(true);
    const [won, setWon] = useState(false);
    const initialState = 
    [
        {tile:0, currentData:"", active:true},
        {tile:1, currentData:"", active:true},
        {tile:2, currentData:"", active:true},
        {tile:3, currentData:"", active:true},
        {tile:4, currentData:"", active:true},
        {tile:5, currentData:"", active:true},
        {tile:6, currentData:"", active:true},
        {tile:7, currentData:"", active:true},
        {tile:8, currentData:"", active:true}
    ]

    const [gameStatus, setGameStatus] = useState(initialState)

    const [currentPlayer, setCurrentPlayer] = useState("X");

        const handleSetClick = (tile) => {
            if(currentPlayer === "X"){
                gameStatus[tile].currentData = "X"
                gameStatus[tile].active = false;
                setGameStatus(gameStatus);
                setCurrentPlayer("O");
            }
            else{
                gameStatus[tile].currentData = "O"
                gameStatus[tile].active = false;
                setGameStatus(gameStatus);
                setCurrentPlayer("X");
            }
            setWon( conditionToWins(gameStatus));
            setIsPlaying( handldeIsPlay(gameStatus))
        }


    return (
        <div className="app__container">
            {
                isPlaying ? <h1>Jugando</h1>
                : <h1>Fin del Juego</h1>
            }
            {
                won ? <h1>Has Ganado</h1>
                : <h1>Aun no hay ganadores</h1>
            }
            <p>Juega: {currentPlayer}</p>
            <div className="board">
                {
                    gameStatus.map(cell=>(
                        cell.active === true ?
                        <div key={cell.tile} className="app__tile-active" onClick={e => handleSetClick(cell.tile)}>
                            <p>{cell.currentData}</p>
                        </div>
                        :
                        <div key={cell.tile} className="app__tile-noactive">
                            <p>{cell.currentData}</p>
                        </div>
                    ))
                }     
            </div>
        </div>
    )
}

export default App
