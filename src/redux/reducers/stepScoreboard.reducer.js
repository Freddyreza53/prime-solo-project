const stepScoreboardReducer = (state=[], action) => {
    if (action.type === 'SET_SCOREBOARD') {
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

export default stepScoreboardReducer;