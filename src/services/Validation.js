
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
        let a = gameStatus[winCondition[0]].currentData
        let b = gameStatus[winCondition[1]].currentData
        let c = gameStatus[winCondition[2]].currentData
        if (a === '' || b === '' || c === '') {
            continue;
         }
        if (a === b && b === c) {
            return true
        }
    }
    return false
}