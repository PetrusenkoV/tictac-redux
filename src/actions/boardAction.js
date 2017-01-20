export function changeSquareValue(isFirstPlayer, index){
    return {type: 'CHANGE_SQUARE_VALUE', value: isFirstPlayer.firstPlayerTurn ? 'X' : 'O', index}
}