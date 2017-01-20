export default function boardReducer(state = [], action){
    switch(action.type){
        case 'GET_BOARD_STATE':
            return state.board;
        case 'CHANGE_SQUARE_VALUE':
            return [...state.slice(0, action.index), action.value, ...state.slice(action.index + 1)]
        default:
            return state;
    }
}