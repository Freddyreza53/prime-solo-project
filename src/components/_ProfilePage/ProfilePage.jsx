import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './ProfilePage.css'

function ProfilePage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const editUser = useSelector(store => store.editProfileReducer)

    const [editMode, setEditMode] = useState(false);

    const handleUpdate = () => {
        console.log('update clicked');
        dispatch({
            type: 'SET_USER_TO_EDIT',
            payload: user
        })
        setEditMode(!editMode);
    }

    const handleSave = () => {
        console.log('save clicked');
        dispatch({
            type: 'PUT_STEP_GOALS',
            payload: editUser
        })
        setEditMode(!editMode);
    }

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ON_CHANGE',
            payload: { 
                property: property,
                value: event.target.value 
            }
        })
    }

    return (
        <div className="pageContainer">
            <div className="homePageTitle">
                <h1>quickStep</h1>
            </div>
            <div className="profileContainer">
                <h2>quickStep Profile</h2>
                <p>UserName: <span>{user.username}</span></p>
                <p>Daily Step Goal: <span>{editMode ? <input 
                                                    type="number" 
                                                    className="inputSize"
                                                    value={editUser.daily_goal} 
                                                    onChange={(event) => handleChange(event, 'daily_goal')}
                                                /> 
                                                :
                                                user.daily_goal}</span></p>
                <p>Daily quickStep Easy Goal: <span>{editMode ? <input 
                                                    type="number"
                                                    className="inputSize" 
                                                    value={editUser.easy_goal} 
                                                    onChange={(event) => handleChange(event, 'easy_goal')}
                                                /> 
                                                :user.easy_goal}</span></p>
                <p>Daily quickStep Medium Goal: <span>{editMode ? <input 
                                                    type="number"
                                                    className="inputSize" 
                                                    value={editUser.medium_goal} 
                                                    onChange={(event) => handleChange(event, 'medium_goal')}
                                                /> 
                                                :user.medium_goal}</span></p>
                <p>Daily quickStep Hard Goal: <span>{editMode ? <input 
                                                    type="number" 
                                                    className="inputSize"
                                                    value={editUser.hard_goal} 
                                                    onChange={(event) => handleChange(event, 'hard_goal')}
                                                /> 
                                                :user.hard_goal}</span></p>

                {editMode ? <button onClick={handleSave}>save</button> : <button onClick={handleUpdate}>Update</button>}
                <LogOutButton />
                
            </div>
        </div>
    )
}

export default ProfilePage;

// type="number" 
// placeholder="New Step Count" 
// value={newStepCount} 
// onChange={(event) => setNewStepCount(event.target.value)}