import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import axios from 'axios';
import Countdown from 'react-countdown';

function GameDonePage() {

    const history = useHistory();
    const dispatch = useDispatch();
    // const token = useSelector(store => store.tokenReducer.token);
    const user = useSelector(store => store.user)
    const time = useSelector(store => store.currentSteps)

    const handleSave = () => {
        dispatch({
            type: 'GET_GOOGLE_STEPS',
            payload: {
                token: user.token,
                startTime: time.startTime,
                endTime: time.endTime
            }
        })
        history.push('/scorePage')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h1>Done!</h1>
                <p>Click on Get Score to see how you did!</p>
                {/* <label>New Step Count: </label>
                <input 
                    type="number" 
                    className="inputSize"
                    placeholder="Steps" 
                    value={newStepCount} 
                    onChange={(event) => setNewStepCount(event.target.value)}
                />
                <p>Input new step count and click save to calculate your quickStep score!</p> */}
                <button className="stepButton" onClick={handleSave}>Get Score</button>
            </div>
        </div>
    )
}

export default GameDonePage;