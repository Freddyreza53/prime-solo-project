import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './QuickStepHomePage.css'
import axios from 'axios';

function QuickStepHomePage() {

    // const handleClick = () => {
    //     console.log('clicked');
    //     axios.get('/getSteps').then (result => {
    //         console.log(result.data.url);
    //     })
    // }

    return (
        <div className="homePageDiv">
            <h1>quickStep</h1>
            <div className="modeSelectDiv">
                <button className="modeButton">EASY</button>
                <button className="modeButton">MEDIUM</button>
                
                <button className="modeButton">HARD</button>
                <button className="modeButton">CHALLENGE</button>
            </div>
            {/* <button onClick={handleClick}>Click Me For Steps</button> */}
        </div>
    )
}

export default QuickStepHomePage;