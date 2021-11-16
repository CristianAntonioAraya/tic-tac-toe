import React, {  useState } from 'react';
import GameInfo from './component/GameInfo';
import { conditionToWins} from './services/Validation';
import './styles/App.css';

const App = () => {

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
    const [won, setWon] = useState(false);
    const [gameStatus, setGameStatus] = useState(initialState)
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [startGame, setStartGame] = useState(true)

    const handleSetClick = (tile) => {
        setStartGame(false)
        if(currentPlayer === "X"){
            gameStatus[tile].currentData = "X"
            gameStatus[tile].active = false;
            setGameStatus(gameStatus);
            setCurrentPlayer("O");
        }
        if(currentPlayer === "O"){
            gameStatus[tile].currentData = "O"
            gameStatus[tile].active = false;
            setGameStatus(gameStatus);
            setCurrentPlayer("X");
        }
        setWon(conditionToWins(gameStatus));
    }
    const handleReset = () => {
        setGameStatus(initialState);
        setStartGame(true);
        setCurrentPlayer('X')
    }


    return (
        <div className="app__container">
            <h1 className="app__title">Tic Tac Toe</h1>
            <GameInfo  won={won} currentPlayer={currentPlayer} startGame={startGame}/>
            <div className="app__board">
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
            <button className="app__reset" onClick={handleReset}>Restart</button>
        </div>
    )
}

export default App
