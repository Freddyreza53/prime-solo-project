import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './ScoreboardPage.css'

function ProfilePage() {

    // useEffect(() => {
    //     dispatch({
    //         type: 'GET_MY_SCOREBOARD'
    //     })
    // }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);


    const handleUpdate = () => {
        console.log('update clicked');
    }

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>quickStep Profile</h2>
                <p>UserName: {user.username}</p>
                <p>Daily Step Goal: {user.daily_goal}</p>
                <p>Daily quickStep Easy Goal: {user.easy_goal}</p>
                <p>Daily quickStep Medium Goal: {user.medium_goal}</p>
                <p>Daily quickStep Hard Goal: {user.hard_goal}</p>

                <button onClick={handleUpdate}>Update</button>
                
            </div>
        </div>
    )
}

export default ProfilePage;