let userScore = {
    startTime: 0,
    endTime: 0
}

const stepReducer = (state = userScore, action) => {
    if (action.type === 'SET_STEP_TIME') {
        return {
            startTime: action.payload.startTime,
            endTime: action.payload.endTime
        };
    } else if (action.type === 'SET_GOOGLE_STEPS') {
        return {
            ...state,
            steps: action.payload
        };
    } 
    return state;
}

export default stepReducer;