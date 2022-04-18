import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import axios from 'axios';

function CountdownPage() {
    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="rulesDiv">
                <h2>3</h2>
                <h3>2</h3>
                <h4>1</h4>
                <h1>GO!</h1>
            </div>
        </div>
    )
}

export default CountdownPage;