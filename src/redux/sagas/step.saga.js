import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    // yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('POST_STEP_SCORE', addStepScore);
    yield takeEvery('GET_SCOREBOARD', getSteps);
    yield takeEvery('PUT_STEP_GOALS', addStepGoals);
}

function* addStepGoals(action) {
    try {
        yield axios.put(`/steps`, action.payload);
        // yield put({type: 'SET_USER'})
    } catch (error) {
        console.log('put step goals error - ', error);
        
    }
}

function* addStepScore(action) {
    try {
        yield axios.post('/steps', action.payload);
        yield put({type: 'GET_SCOREBOARD'})
    } catch (error) {
        console.log('post step score error - ', error);
        
    }
}

function* getSteps() {
    let scoreboard = yield axios.get('/steps/myScores');
    yield put({type: 'SET_SCOREBOARD', payload: scoreboard.data})
}


export default stepSagaWatcher;