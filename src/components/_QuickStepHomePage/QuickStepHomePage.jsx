import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

function QuickStepHomePage() {

    const handleClick = () => {
        console.log('clicked');
        axios.get('/steps').then (result => {
            console.log(result);
        })
    }

    return (
        <>
            <h1>quickStep Home Page Here</h1>
            <button onClick={handleClick}>Click Me For Steps</button>
        </>
    )
}

export default QuickStepHomePage;