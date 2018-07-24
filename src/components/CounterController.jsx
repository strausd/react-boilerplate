import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementAsync } from '../actions/baseActions';

export class CounterController extends React.Component {
    static propTypes = {
        increment: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.increment()}>
                    Increment
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(incrementAsync())
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(CounterController);
