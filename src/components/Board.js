import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as boardAction from '../actions/boardAction';
import * as gameAction from '../actions/gameAction';
import Square from './Square';

const Row = (props, start, end) => (
    <div>
        {props.board.slice(start,end).map((value, index) => (
            <Square key={index} value={value} onClick={() => {
                props.actions.changeSquareValue(props.currentPlayer, index + start);
                props.gameActions.nextPlayer(props.currentPlayer);
            }}></Square>
            )
        )}
    </div>
);

const Board = (props) => {
    
    return (
        <div>
            {[0,3,6].map(i=> Row(props, i, i+3))}
        </div>
    )
}

Board.PropTypes = {
    board: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        board: state.board,
        currentPlayer: state.currentPlayer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(boardAction, dispatch),
        gameActions: bindActionCreators(gameAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
