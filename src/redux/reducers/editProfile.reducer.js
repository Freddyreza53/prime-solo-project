const editProfileReducer = (state={}, action) => {
    if (action.type === 'SET_USER') {
        console.log(action.payload);
        return action.payload;
    } else if (action.type === 'SET_GOALS') {
        return action.payload - state;
    }
    return state;
}

export default editProfileReducer;