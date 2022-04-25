const stepReducer = (state=0, action) => {
    if (action.type === 'SET_STEPS') {
        console.log(action.payload);
        return action.payload;
    } else if (action.type === 'SET_STEP_SCORE') {
        return action.payload - state;
    } else if (action.type === 'SET_GOOGLE_STEPS') {
        return action.payload
    }
    return state;
}

export default stepReducer;