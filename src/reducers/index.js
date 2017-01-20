import { combineReducers } from 'redux';
import tests from './testReducer';
import board from './boardReducer';
import currentPlayer from './gameReducer';

const rootReducer = combineReducers({
    tests,
    board,
    currentPlayer
});

export default rootReducer;