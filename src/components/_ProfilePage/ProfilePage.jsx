import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// import './ScoreboardPage.css'

function ProfilePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);

    const [editMode, setEditMode] = useState(false);

    const handleUpdate = () => {
        console.log('update clicked');
        dispatch({
            type: 'SET_USER_GOALS',
            payload: user
        })
        setEditMode(!editMode);
    }

    const handleSave = () => {
        console.log('save clicked');
        setEditMode(!editMode);
    }

    

    return (
        <div>
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div>
                <h2>quickStep Profile</h2>
                <p>UserName: {user.username}</p>
                <p>Daily Step Goal: {editMode ? <input 
                                                    type="number" 
                                                    value={user.daily_goal} 
                                                    onChange={(event) => setNewStepCount(event.target.value)}
                                                /> 
                                                :
                                                user.daily_goal}</p>
                <p>Daily quickStep Easy Goal: {editMode ? <input 
                                                    type="number" 
                                                    value={user.daily_goal} 
                                                    onChange={(event) => setNewStepCount(event.target.value)}
                                                /> 
                                                :user.easy_goal}</p>
                <p>Daily quickStep Medium Goal: {editMode ? <input 
                                                    type="number" 
                                                    value={user.daily_goal} 
                                                    onChange={(event) => setNewStepCount(event.target.value)}
                                                /> 
                                                :user.medium_goal}</p>
                <p>Daily quickStep Hard Goal: {editMode ? <input 
                                                    type="number" 
                                                    value={user.daily_goal} 
                                                    onChange={(event) => setNewStepCount(event.target.value)}
                                                /> 
                                                :user.hard_goal}</p>

                {editMode ? <button onClick={handleSave}>save</button> : <button onClick={handleUpdate}>Update</button>}
                
            </div>
        </div>
    )
}

export default ProfilePage;

// type="number" 
// placeholder="New Step Count" 
// value={newStepCount} 
// onChange={(event) => setNewStepCount(event.target.value)}