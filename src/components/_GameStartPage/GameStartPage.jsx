import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './GameStartPage.css'
import axios from 'axios';

function GameStartPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentMode = useSelector(store => store.mode);

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
        console.log(currentMode);
    }

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>{currentMode.difficulty}</h2>
                <p>Try and get as many steps as you can within {currentMode.time} seconds!</p>
                <p>Please enter current step count on your phone/pedometer:</p>
                <label>Current Steps</label>
                <input type="number" placeholder="Current Steps"/>

                <button onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default GameStartPage;