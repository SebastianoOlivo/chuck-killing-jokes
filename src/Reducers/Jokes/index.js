let defaultState = ['Lord Voldemort refers Chuck Norris as He-Who-Should-Not-Be-Named'];

const JokesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SAVE':
            return state.concat([action.payload]);
        default:
            return state;
    }

}

export default JokesReducer;