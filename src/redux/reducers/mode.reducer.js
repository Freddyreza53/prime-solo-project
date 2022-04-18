const modeSelected = (state={}, action) => {
    if (action.type === 'SET_MODE') {
        console.log(action.payload);
        let mode = {
            difficulty: action.payload,
            time: 0
        };
        switch (mode.difficulty) {
            case 'Easy':
                mode.time = 15;
                break;
            case 'Medium':
                mode.time = 30;
                break;
            case 'Hard':
                mode.time = 60;
                break;
            default:
                break;
        }
        console.log(mode);
        
        return mode;
    }
    return state;
}

export default modeSelected;