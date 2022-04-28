const userListReducer = (state = [], action) => {
    if (action.type === 'SET_USERS_LIST') {
        return action.payload;
    } 
    return state;
}

export default userListReducer;