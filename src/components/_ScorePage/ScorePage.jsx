import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function ScorePage() {

    // useEffect(() => {

    // }, [stepScore.steps])

    const history = useHistory();
    const dispatch = useDispatch();
    const stepScore = useSelector(store => store.currentSteps)
    const mode = useSelector(store => store.mode)
    const user = useSelector(store => store.user)

    const handleSave = () => {
        if (stepScore.steps == goal){ 
            swal("Goal Achieved!", "You reached your daily easy mode goal!", "success", {
                button: "Okay!",
            });
        } else {
            swal("Saved!", "You saved your score!", "success", {
                button: "Okay!",
            });
        }
        dispatch({
            type: 'POST_STEP_SCORE',
            payload: {
                stepScore: stepScore.steps,
                mode: mode.difficulty.toLowerCase()
            }
        })
        history.push('/quickStepHome')
        // sweet alert here to confirm saved score
    }

    const handleTryAgain = () => {
        history.push('/gameStart')
    }
    
    let goal;
    switch (mode.difficulty) {
        case 'Easy':
            goal = user.easy_goal;
            break;
        case 'Medium':
            goal = user.medium_goal;
            break;
        case 'Hard':
            goal = user.hard_goal;
            break;
        default:
            break;
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h1>Score</h1>
                <p>Awesome Job!</p>
                <p>Mode: {mode.difficulty}</p>
                <p>Step Count: {stepScore.steps}</p>
                <p>Click Try Again if you want to try and get a better score. 
                    Otherwise, click Save to calculate your quickStep score!</p>
                {/* <button onClick={getScore}>getScore</button> */}
                <button className="stepButton" onClick={handleTryAgain}>Try Again</button>
                <button className="stepButton" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default ScorePage;