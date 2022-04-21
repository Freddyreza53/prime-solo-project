import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MyScoreboardPage.css'
import axios from 'axios';

function MyScoreboardPage() {

    useEffect(() => {
        dispatch({
            type: 'GET_SCORES',
            payload: 'easy'
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const myScoreboard = useSelector(store => store.stepScoreboardReducer);

    const getScores = (difficulty) => {
        console.log(difficulty);
        dispatch({
            type: 'GET_SCORES',
            payload: difficulty
        })
    }

    const handleDelete = (scoreToDelete) => {
        console.log('delete clicked');
        dispatch({
            type: 'DELETE_SCORE',
            payload: {
                id: scoreToDelete.id,
                difficulty: scoreToDelete.difficulty
            }
        })
    }

    const getTopScores = () => {
        console.log('top scores clicked');
        history.push('/topScoreboard')
    }

    return (
        <div className="pageContainer">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>My Scoreboard Info goes here</h2>
                <div className="scoreNavBar">
                    <h3>My Scores</h3>
                    <h3 onClick={getTopScores}>Top Scores</h3>
                </div>
                <div className="modeNavBar">
                    <h4 onClick={() => getScores('easy')}>Easy</h4>
                    <h4 onClick={() => getScores('medium')}>Medium</h4>
                    <h4 onClick={() => getScores('hard')}>Hard</h4>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Step Score</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myScoreboard.map( (stepScore, index )=> {
                                return (
                                    <tr key={stepScore.id}>
                                        <td>{index + 1}</td>
                                        <td>{stepScore.step_amount}</td>
                                        <td><button onClick={() => handleDelete(stepScore)}>DELETE</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default MyScoreboardPage;