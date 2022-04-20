const editProfileReducer = (state={}, action) => {
    if (action.type === 'SET_USER_TO_EDIT') {
        console.log(action.payload);
        return action.payload;
    } else if (action.type === 'EDIT_ON_CHANGE') {
        return {
            ...state, 
            [action.payload.property]: action.payload.value
        };
    } else if (action.type === 'CLEAR_USER_TO_EDIT') {
        return {};
    }
    return state;
}

export default editProfileReducer;