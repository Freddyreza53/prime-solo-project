import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './QuickStepHomePage.css'
import axios from 'axios';

function QuickStepHomePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    // const [clicked, setClicked] = useState(false);
    


    const handleClicked = (modeSelected) => {
        dispatch({
            type: 'SET_MODE',
            payload: modeSelected
        })

        history.push('/gameStart');
    }

    // const handleStart = () => {
    //     console.log('start clicked');
    // }

    const handleClick = () => {
        console.log('clicked');
        axios.get('/getSteps/steps').then (result => {
            console.log(result.data);
        })
    }

    return (
        <div className="homePageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="modeSelectDiv">
                <button className="modeButton" value="Easy" onClick={(event) => handleClicked(event.target.value)}>EASY</button>
                <button className="modeButton" value="Medium" onClick={(event) => handleClicked(event.target.value)}>MEDIUM</button>
                
                <button className="modeButton" value="Hard" onClick={(event) => handleClicked(event.target.value)}>HARD</button>
                <button className="modeButton" value="Challenge" onClick={(event) => handleClicked(event.target.value)}>CHALLENGE</button>
            </div>
            {/* <button className="stepButton" onClick={handleStart}>Start</button> */}
            <button onClick={handleClick}>Click Me For Steps</button>
        </div>
    )
}

export default QuickStepHomePage;