import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './MyScoreboardPage.css'
import axios from 'axios';

function TopScoreboardPage() {

    useEffect(() => {
        dispatch({
            type: 'GET_TOP_SCOREBOARD'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const topScoreboard = useSelector(store => store.stepScoreboardReducer);

    const handleStart = () => {
        console.log(currentMode);
    }

    const getTopScores = () => {
        console.log('my scores clicked');
        history.push('/myScoreboard')
    }

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>My Scoreboard Info goes here</h2>
                <h3 onClick={getTopScores}>My Scores</h3>
                <h3>Top Scores</h3>
                {topScoreboard.map( stepScore => {
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

export default TopScoreboardPage;