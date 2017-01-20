export function nextPlayer(isFirstPlayer){
    return {type: 'NEXT_PLAYER', isFirstPlayer: !isFirstPlayer}
}