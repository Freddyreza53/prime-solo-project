import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import GoogleLogoutButton from '../LoginForm/GoogleLogoutButton';
import './ProfilePage.css'

function ProfilePage() {

    useEffect(() => {
        dispatch({
            type: 'GET_DAILY_GOOGLE_STEPS',
            payload: user.token
        } )
    }, [])

    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const editUser = useSelector(store => store.editProfileReducer);
    const dailyGoal = useSelector(store => store.userStepGoalsReducer);

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
        swal("Saved!", "You saved your goals!", "success", {
            button: "Okay!",
        });
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
                <img src={user.picture} alt="Profile Picture" />
                <h2>My Profile</h2>
                <p className="profileP">UserName: <span>{user.username}</span></p>
                <p className="profileP">Daily Step Goal: <span>{editMode ? <input 
                                                    type="number" 
                                                    className="inputSize"
                                                    value={editUser.daily_goal} 
                                                    onChange={(event) => handleChange(event, 'daily_goal')}
                                                /> 
                                                :
                                                `${dailyGoal.dailyStepGoal}/${user.daily_goal}`}</span></p>
                <p className="profileP">Daily quickStep Easy Goal: <span>{editMode ? <input 
                                                    type="number"
                                                    className="inputSize" 
                                                    value={editUser.easy_goal} 
                                                    onChange={(event) => handleChange(event, 'easy_goal')}
                                                /> 
                                                :user.easy_goal}</span></p>
                <p className="profileP">Daily quickStep Medium Goal: <span>{editMode ? <input 
                                                    type="number"
                                                    className="inputSize" 
                                                    value={editUser.medium_goal} 
                                                    onChange={(event) => handleChange(event, 'medium_goal')}
                                                /> 
                                                :user.medium_goal}</span></p>
                <p className="profileP">Daily quickStep Hard Goal: <span>{editMode ? <input 
                                                    type="number" 
                                                    className="inputSize"
                                                    value={editUser.hard_goal} 
                                                    onChange={(event) => handleChange(event, 'hard_goal')}
                                                /> 
                                                :user.hard_goal}</span></p>
                <div className="buttonDiv">
                {editMode ? <button className="stepButton" onClick={handleSave}>save</button> : <button className="stepButton" onClick={handleUpdate}>Update</button>}
                <GoogleLogoutButton />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;

// type="number" 
// placeholder="New Step Count" 
// value={newStepCount} 
// onChange={(event) => setNewStepCount(event.target.value)}