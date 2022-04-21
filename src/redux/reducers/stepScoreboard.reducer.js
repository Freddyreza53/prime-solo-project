const stepScoreboardReducer = (state=[], action) => {
    if (action.type === 'SET_SCOREBOARD') {
        return action.payload;
    }
    return state;
}

export default stepScoreboardReducer;