import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

// MUI imports
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// react-icons import
import { FaPlay } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { MdLogin } from 'react-icons/md';



const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    bottom: 0,
  },
});

function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <div  /*className="nav"*/ >
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction 
              label="login" 
              icon={<MdLogin size={30}/>} 
              onClick={() => history.push("/login")}
            />
            <BottomNavigationAction 
              label="about" 
              icon={<BsFillInfoCircleFill size={30}/>} 
              onClick={() => history.push("/about")}
            />

          </BottomNavigation>
          // <Link className="navLink" to="/login">
          //   Login / Register
          // </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
          >
          <BottomNavigationAction 
            label="Scoreboard" 
            icon={<MdLeaderboard size={30}/>} 
            onClick={() => history.push("/myScoreboard")}
          />
          <BottomNavigationAction 
            label="Play" 
            icon={<FaPlay size={26}/>} 
            onClick={() => history.push("/quickStepHome")}
          />
          <BottomNavigationAction 
            label="Profile" 
            icon={<BsPersonFill size={30} />}
            onClick={() => history.push("/profile")}
          />
        </BottomNavigation>
          // <>
          //   <Link className="navLink" to="/quickStepHome">
          //     Home
          //   </Link>

          //   <Link className="navLink" to="/myScoreboard">
          //     Scoreboard
          //   </Link>

          //   <Link className="navLink" to="/profile">
          //     Profile
          //   </Link>
          //   <LogOutButton className="navLink" />

          // </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
