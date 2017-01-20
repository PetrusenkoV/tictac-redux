import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as stringAction from '../actions/stringAction';

const temp = (props) => {
    return(
        <div>
            <div onClick={() => props.actions.createString("My Name is Slava")}>{props.tests}</div>
            <div onClick={() => console.log(props.board[1])}>Hello, World</div>
        </div>
    );
}

temp.propTypes = {
    actions: PropTypes.object.isRequired,
    tests: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        tests: state.tests,
        board: state.board
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(stringAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(temp);