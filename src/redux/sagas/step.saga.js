import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    // yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('POST_STEP_SCORE', addStepScore);
    yield takeEvery('GET_MY_SCOREBOARD', getMySteps);
    yield takeEvery('GET_TOP_SCOREBOARD', getTopSteps);
    yield takeEvery('PUT_STEP_GOALS', addStepGoals);
}

function* addStepGoals(action) {
    try {
        yield axios.put(`/steps`, action.payload);
        yield put({type: 'CLEAR_USER_TO_EDIT'})
        yield put({type: 'FETCH_USER'})
        // yield put({type: 'SET_USER'})
    } catch (error) {
        console.log('put step goals error - ', error);
        
    }
}

function* addStepScore(action) {
    try {
        yield axios.post('/steps', action.payload);
        yield put({type: 'GET_MY_SCOREBOARD'})
    } catch (error) {
        console.log('post step score error - ', error);
        
    }
}

function* getMySteps() {
    let scoreboard = yield axios.get('/steps/myScores');
    yield put({type: 'SET_SCOREBOARD', payload: scoreboard.data})
}

function* getTopSteps() {
    let scoreboard = yield axios.get('/steps/topScores');
    yield put({type: 'SET_SCOREBOARD', payload: scoreboard.data})
}


export default stepSagaWatcher;