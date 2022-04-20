import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    yield takeEvery('POST_STEP_SCORE', addStepScore);
    yield takeEvery('DELETE_SCORE', deleteScore);
    yield takeEvery('GET_SCORES', getMyScores);
    yield takeEvery('GET_TOP_SCORES', getTopScores);
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

function* deleteScore(action) {
    try {
        yield axios.delete(`/steps/${action.payload.id}`);
        yield put({type: 'GET_SCORES', payload: action.payload.difficulty})
    } catch (error) {
        console.log('get step score error - ', error);
    }
}

function* getMyScores(action) {
    try {
        let scoreboardByDifficulty = yield axios.get(`/steps/myScores/${action.payload}`);
        yield put({type: 'SET_SCOREBOARD', payload: scoreboardByDifficulty.data})
    } catch (error) {
        console.log('get step score error - ', error);
    }
}

function* getTopScores(action) {
    try {
        let scoreboardByDifficulty = yield axios.get(`/steps/topScores/${action.payload}`);
        yield put({type: 'SET_SCOREBOARD', payload: scoreboardByDifficulty.data})
    } catch (error) {
        console.log('get step score error - ', error);
    }
}


export default stepSagaWatcher;