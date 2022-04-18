import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './GameStartPage.css'
import axios from 'axios';

function GameStartPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentMode = useSelector(store => store.mode);

    const [currentSteps, setCurrentSteps] = useState('');

    // switch (mode) {
        //     case 'easy':
        //         console.log('easy clicked');
                
        //         break;
        //     case 'medium':
        //         console.log('medium clicked');
        //         break;
        //     case 'hard':
        //         console.log('hard clicked');
        //         break;
        //     case "challenge":
        //         console.log('challenge clicked');
        //         break;

        //     default:
        //         break;
        // }

    const handleStart = () => {
        console.log(currentSteps);
        dispatch({
            type: 'SET_STEPS',
            payload: currentSteps
        })

        history.push('/countdown')

        setCurrentSteps('')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
                <h2>{currentMode.difficulty}</h2>
                <p>Try and get as many steps as you can within {currentMode.time} seconds!</p>
                <p>Please enter current step count on your phone/pedometer:</p>
                <div>
                    <label>Current Steps</label>
                    <input 
                        type="number" 
                        placeholder="Current Steps" 
                        value={currentSteps} 
                        onChange={(event) => setCurrentSteps(event.target.value)}
                    />
                </div>
                <button onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default GameStartPage;