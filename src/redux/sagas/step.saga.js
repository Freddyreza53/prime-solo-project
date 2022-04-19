import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    // yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('POST_STEP_SCORE', addStepScore);
    yield takeEvery('GET_SCOREBOARD', getSteps)
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
    let scoreboard = yield axios.get('/steps');
    yield put({type: 'SET_SCOREBOARD', payload: scoreboard.data})
}


export default stepSagaWatcher;