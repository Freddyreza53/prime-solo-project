import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MyScoreboardPage.css'
import axios from 'axios';

function MyScoreboardPage() {

    useEffect(() => {
        dispatch({
            type: 'GET_MY_SCOREBOARD'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const myScoreboard = useSelector(store => store.stepScoreboardReducer);

    const handleStart = () => {
        console.log(currentMode);
    }

    const getTopScores = () => {
        console.log('top scores clicked');
        history.push('/topScoreboard')
    }

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>My Scoreboard Info goes here</h2>
                <h3>My Scores</h3>
                <h3 onClick={getTopScores}>Top Scores</h3>
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

export default MyScoreboardPage;