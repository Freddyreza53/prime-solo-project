import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    // yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('POST_STEP_SCORE', addStepScore);
}

function* addStepScore(action) {
    try {
    yield axios.post('/steps', action.payload);
    yield put({type: 'FETCH_STEPS'})
    } catch (error) {
        console.log('post step score error - ', error);
        
    }
}

// function* fetchItems() {
//     let items = yield axios.get('/api/shelf');
//     yield put({type: 'SET_LIST_ITEMS', payload: items.data})
// }


export default stepSagaWatcher;