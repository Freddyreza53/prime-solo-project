import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import Countdown from 'react-countdown';

function ChallengeModePage() {

    const history = useHistory();
    const gameTime = useSelector(store => store.mode.time)

    const handleStart = () => {
        history.push('/gameDone')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h2>Challenge Mode</h2>
                <p> make sure your phone is on and in your pocket/hand during the 15 seconds.
                    Once you are ready to start stepping, click start and the countdown will begin. 
                    Have fun!
                </p>
                {/* <div>
                    <label>Current Steps: </label>
                    <input 
                        type="number" 
                        className="inputSize"
                        placeholder="Steps" 
                        value={currentSteps} 
                        onChange={(event) => setCurrentSteps(event.target.value)}
                    />
                </div> */}
                <p>Once you're ready to start stepping, click start and have fun!</p>
                <button className="stepButton" onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default ChallengeModePage;