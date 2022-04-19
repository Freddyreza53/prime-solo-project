import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ScoreboardPage.css'
import axios from 'axios';

function ScoreboardPage() {

    useEffect(() => {
        dispatch({
            type: 'GET_SCOREBOARD'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const myScoreboard = useSelector(store => store.stepScoreboardReducer);

    const handleStart = () => {
        console.log(currentMode);
    }

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>Scoreboard Page Info goes here</h2>
                {myScoreboard.map( stepScore => {
                    return (
                        <ul key={stepScore.id}>
                            <li>{stepScore.step_amount}</li>
                            <li>{stepScore.difficulty}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default ScoreboardPage;