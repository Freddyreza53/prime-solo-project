
import modeSelected from "./mode.reducer";

it( 'Should return empty object', () => {
    let action = {};
    let returnedState = modeSelected(undefined, action);
    expect(returnedState).toEqual({});
})

it( 'Should return mode object with time equal to 15', () => {
    let action = {
        type: 'SET_MODE',
        payload: 'Easy'
    };
    let mode = {
        difficulty: 'Easy',
        time: 15
    };
    let returnedState = modeSelected(undefined, action);
    expect(returnedState).toEqual(mode);
})

it( 'Should return mode object with time equal to 30', () => {
    let action = {
        type: 'SET_MODE',
        payload: 'Medium'
    };
    let mode = {
        difficulty: 'Medium',
        time: 30
    };
    let returnedState = modeSelected(undefined, action);
    expect(returnedState).toEqual(mode);
})

it( 'Should return mode object with time equal to 60', () => {
    let action = {
        type: 'SET_MODE',
        payload: 'Hard'
    };
    let mode = {
        difficulty: 'Hard',
        time: 60
    };
    let returnedState = modeSelected(undefined, action);
    expect(returnedState).toEqual(mode);
})