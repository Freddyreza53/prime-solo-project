import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './MyScoreboardPage.css'
import axios from 'axios';

function TopScoreboardPage() {

    useEffect(() => {
        dispatch({
            type: 'GET_TOP_SCORES',
            payload: 'easy'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const topScoreboard = useSelector(store => store.stepScoreboardReducer);

    const getScores = (difficulty) => {
        console.log(difficulty);
        dispatch({
            type: 'GET_TOP_SCORES',
            payload: difficulty
        })
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
                <div>
                    <h4 onClick={() => getScores('easy')}>Easy</h4>
                    <h4 onClick={() => getScores('medium')}>Medium</h4>
                    <h4 onClick={() => getScores('hard')}>Hard</h4>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Step Score</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topScoreboard.map( (stepScore, index )=> {
                            return (
                                <tr key={stepScore.id}>
                                    <td>{index + 1}</td>
                                    <td>{stepScore.step_amount}</td>
                                    <td>{stepScore.difficulty}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default TopScoreboardPage;