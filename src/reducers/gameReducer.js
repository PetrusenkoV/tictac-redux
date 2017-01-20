export default function gameReducer(state={firstPlayerTurn: false}, action){
    switch(action.type){
        case 'NEXT_PLAYER':
            return {firstPlayerTurn: !state.firstPlayerTurn};
        default:
            return state;
    }
}