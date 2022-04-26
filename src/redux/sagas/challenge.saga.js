import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* challengeSagaWatcher() {
    yield takeEvery('GET_USERS_LIST', getUsers);
}

function* getUsers() {
    try {
        let usersList = yield axios.get(`/steps/users`);
        yield put({type: 'SET_USERS_LIST', payload: usersList.data})
    } catch (error) {
        console.log('get step score error - ', error);
    }
}


export default challengeSagaWatcher;