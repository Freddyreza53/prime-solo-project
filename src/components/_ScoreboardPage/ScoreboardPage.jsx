import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ScoreboardPage.css'
import axios from 'axios';

function ScoreboardPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentMode = useSelector(store => store.mode);

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
                <button onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default ScoreboardPage;