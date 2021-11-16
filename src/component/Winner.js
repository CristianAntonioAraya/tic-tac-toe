import React from 'react'
import '../styles/Winner.css'

const Winner = ({ player, startGame}) => {
        return (
            <>
                {
                    !startGame &&
                    <div className="winner__container">
                        <div className="winner__content">
                            <p className="winner__info">Juego terminado!</p>
                            <p className="winner__info">Ganador: Jugador "{player}"</p>
                        </div>
                    </div>
                }
            </>
        )
}

export default Winner
