import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './GameStartPage.css'
import Countdown from 'react-countdown';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

function ChallengeModePage() {

    useEffect(() => {
        dispatch({
            type: 'GET_USERS_LIST'
        })
    }, []);

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const usersList = useSelector(store => store.userListReducer)
    const [difficulty, setDifficulty] = useState('');
    const [userId, setUserId] = useState('')
    const difficultyList = [
        'Easy',
        'Medium',
        'Hard'
    ];

    const handleNext = () => {
        console.log('next clicked');
        dispatch({
            type: 'START_CHALLENGE',
            payload: {
                difficulty: difficulty,
                username: userId
            }
        })
    }

    return (
        <div className="GameStartPageDiv">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h2>Challenge Mode</h2>
                <label>Pick Difficulty: </label>
                <select id="class" name="class" onChange={(event) => setDifficulty(event.target.value)}>
                    <option>Choose Difficulty</option>
                {difficultyList.map((difficulty, index) => {
                    return (
                        <option 
                            key={index} 
                            value={difficulty}
                        >{difficulty}</option>
                    )
                })}
                </select>
                <br />

                <label>Pick User: </label>
                <select onChange={(event) => setUserId(event.target.value)}>
                    <option>Choose User</option>
                {usersList?.map(user => {
                    return (
                        <option 
                            key={user.id} 
                            value={user.id}
                        >{user.username}</option>
                    )
                })}
                </select>
                <FormControl >
                    <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                    <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    // input={<BootstrapInput />}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>

                <p>Click next once you're ready to begin the challenge!</p>
                <button className="stepButton" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default ChallengeModePage;