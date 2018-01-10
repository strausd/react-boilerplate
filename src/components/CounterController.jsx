import React from 'react';
import { connect } from 'react-redux';

import { incrementAsync, decrementAsync, resetAsync } from '../actions/baseActions';


export class CounterController extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.increment()}>Increment</button>
                <button onClick={() => this.props.decrement()}>Decrement</button>
                <button onClick={() => this.props.reset()}>Reset</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementAsync()),
        decrement: () => dispatch(decrementAsync()),
        reset: () => dispatch(resetAsync()),
    };
};

export default connect(undefined, mapDispatchToProps)(CounterController);