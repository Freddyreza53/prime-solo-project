let userScore = {
    startTime: 0,
    endTime: 0,
    steps: 0
}

const stepReducer = (state = userScore, action) => {
    if (action.type === 'SET_STEP_TIME') {
        userScore.startTime = action.payload.startTime;
        userScore.endTime = action.payload.endTime;
        return userScore;
    } else if (action.type === 'SET_GOOGLE_STEPS') {
        userScore.steps = action.payload;
        return userScore;
    } 
    return state;
}

export default stepReducer;