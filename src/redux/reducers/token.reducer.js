const tokenReducer = (state='', action) => {
    if (action.type === 'SET_TOKEN') {
        console.log(action.payload);
        return action.payload;
    } 
    return state;
}

export default tokenReducer;