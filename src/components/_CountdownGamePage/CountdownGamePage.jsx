import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import axios from 'axios';
import Countdown from 'react-countdown';

function CountdownGamePage() {

    const history = useHistory();

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
            <Countdown className="countdown" date={Date.now() + 15000}>
                <h1>Done!</h1>
            </Countdown>
            </div>
        </div>
    )
}

export default CountdownGamePage;