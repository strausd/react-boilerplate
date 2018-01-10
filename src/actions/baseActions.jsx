export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const incrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, 2000);
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const decrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(decrement());
        }, 2000);
    };
};

export const reset = () => {
    return {
        type: 'RESET'
    };
};

export const resetAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(reset());
        }, 2000);
    };
};