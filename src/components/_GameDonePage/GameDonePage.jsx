import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import axios from 'axios';
import Countdown from 'react-countdown';

function GameDonePage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const previousStepCount = useSelector(store => store.currentSteps)
    const [newStepCount, setNewStepCount] = useState('')

    const handleSave = () => {
        dispatch({
            type: 'SET_STEP_SCORE',
            payload: newStepCount
        })
        history.push('/scorePage')
        setNewStepCount('')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
                <h1>Done!</h1>
                <p>Previous Step Count: {previousStepCount}</p>
                <label>New Step Count: </label>
                <input 
                    type="number" 
                    placeholder="New Step Count" 
                    value={newStepCount} 
                    onChange={(event) => setNewStepCount(event.target.value)}
                />
                <p>Input new step count and click save to calculate your quickStep score!</p>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default GameDonePage;