const stepReducer = (state=0, action) => {
    if (action.type === 'SET_STEPS') {
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

export default stepReducer;