const userStepGoalsReducer = (state = {}, action) => {
    if (action.type === 'SET_DAILY_GOOGLE_STEPS') {
        return {
            ...state,
            dailyStepGoal: action.payload,
        };
    } 
    return state;
}

export default userStepGoalsReducer;