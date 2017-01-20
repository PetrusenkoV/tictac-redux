import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/game.css';
import HelloWorld from './components/HelloWorld.js';
import Board from './components/Board.js';

const initBoard = function(){
  const board = new Array(9).fill("")
  return board;
}

const initState = function(){
  var state = {};
  state.board = initBoard();
  state.currentPlayer = {firstPlayerTurn: true};

  return state;
}

const store = configureStore(initState());

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root')
);
