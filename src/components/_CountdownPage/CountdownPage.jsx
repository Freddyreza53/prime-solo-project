import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CountdownPage.css'
import Countdown from 'react-countdown';

function CountdownPage() {

    const history = useHistory();

    const goToCountdown = () => {
        history.push('/countdownGame')
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
            <Countdown className="countdown" onComplete={goToCountdown} date={Date.now() + 3000}>
                <h1>GO!</h1>
            </Countdown>
            </div>
        </div>
    )
}

export default CountdownPage;