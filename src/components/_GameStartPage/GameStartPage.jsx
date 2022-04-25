import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './GameStartPage.css'
import axios from 'axios';

function GameStartPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentMode = useSelector(store => store.mode);

    // const [startTime, setStartTime] = useState('');

    const handleStart = () => {
        dispatch({
            type: 'SET_STEP_TIME',
            payload: {
                startTime: (Date.now() + 3000),
                endTime: (Date.now() + (currentMode.time * 1000))
            }
        })

        history.push('/countdown')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h2>{currentMode.difficulty}</h2>
                <p>Try and get as many steps as you can within {currentMode.time} seconds! 
                    make sure your phone is on and in your pocket/hand during the 15 seconds.
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

export default GameStartPage;