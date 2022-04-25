import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* stepSagaWatcher() {
    yield takeEvery('POST_STEP_SCORE', addStepScore);
    yield takeEvery('DELETE_SCORE', deleteScore);
    yield takeEvery('GET_SCORES', getMyScores);
    yield takeEvery('GET_TOP_SCORES', getTopScores);
    yield takeEvery('PUT_STEP_GOALS', addStepGoals);
    yield takeEvery('GET_GOOGLE_STEPS', getGoogleSteps);
}

function* getGoogleSteps(action) {
    let stepArray = [];
    try{
        const result = yield axios({
            method: "POST",
            headers: {
                authorization: "Bearer " + action.payload
            }, 
            "Content-Type": "application/json",
            url: `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
            data: {
                aggregateBy: [
                    {
                        dataTypeName: "com.google.step_count.delta",
                        dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }
                ],
                bucketByTime: {durationMillis: 86400000},
                startTimeMillis: 1650040036681,
                endTimeMillis: 1650064200426,
            }
        });
        // console.log(result);
        stepArray = result.data.bucket;
        
    } catch (err) {
        console.log(err);
    }
    try {
        for (const dataSet of stepArray) {
            for (const points of dataSet.dataset) {
                for(const steps of points.point) {
                    console.log(steps.value);
                    yield put({type: 'SET_GOOGLE_STEPS', payload: steps.value[0].intVal})
                }
            }
        }
    } catch (err) {
        console.log(err);
        
    }
    try {
        yield put({type: 'SET_USER_SCORE'})
    } catch (error) {
        console.log('post step score error - ', error);
    }
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