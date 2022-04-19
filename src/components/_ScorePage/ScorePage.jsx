import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import axios from 'axios';
import Countdown from 'react-countdown';

function ScorePage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const stepScore = useSelector(store => store.currentSteps)
    const mode = useSelector(store => store.mode)

    const handleSave = () => {
        dispatch({
            type: 'POST_STEP_SCORE',
            payload: {
                stepScore: stepScore,
                mode: mode.difficulty.toLowerCase()
            }
        })
        history.push('/quickStepHome')
        // sweet alert here to confirm saved score
    }

    const handleTryAgain = () => {
        history.push('/gameStart')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
                <h1>Score</h1>
                <p>Awesome Job!</p>
                <p>Mode: {mode.difficulty}</p>
                <p>Step Count: {stepScore}</p>
                <p>Input new step count and click save to calculate your quickStep score!</p>
                <button onClick={handleTryAgain}>Try Again</button>
                <button onClick={handleSave}>Save Score</button>
            </div>
        </div>
    )
}

export default ScorePage;