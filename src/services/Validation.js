

export const handldeIsPlay = (gameStatus) => {
    if( gameStatus[0].active === false && 
        gameStatus[1].active === false && 
        gameStatus[2].active === false && 
        gameStatus[3].active === false && 
        gameStatus[4].active === false && 
        gameStatus[5].active === false &&
        gameStatus[6].active === false &&
        gameStatus[7].active === false &&
        gameStatus[8].active === false 
        ){
            return false
        }
    else { return true }
}

export const conditionToWins = (gameStatus) => {
    const ToWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let index = 0; index <= 7; index++) {
        let winCondition = ToWin[index];
        let a = gameStatus[winCondition[0]]
        let b = gameStatus[winCondition[1]]
        let c = gameStatus[winCondition[2]]
        if (a === '' || b === '' || c === '') {
            continue;
         }
        if (a === b && b === c) {
            return true
        }
    }
}