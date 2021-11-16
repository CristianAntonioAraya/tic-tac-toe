import React, { useEffect,useState } from 'react'
import Winner from './Winner'

const GameInfo = ({currentPlayer, won, startGame}) => {
    const [winner, setWinner] = useState(currentPlayer)

    useEffect(() => {
        if(currentPlayer === 'X') {
            setWinner("O")
        }
        if(currentPlayer === 'O') {
            setWinner("X")
        }
    }, [currentPlayer])
    
    return (
        <div>
            <p className="info__player">Juega: {currentPlayer}</p>
            {
                won &&
                <Winner player={winner} startGame={startGame}/>
            }
        </div>
    )
}

export default GameInfo
