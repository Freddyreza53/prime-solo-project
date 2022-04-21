import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

// MUI imports
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    bottom: 0
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
              icon={<RestoreIcon />} 
              onClick={() => history.push("/login")}
            />
            <BottomNavigationAction 
              label="about" 
              icon={<RestoreIcon />} 
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
            icon={<RestoreIcon />} 
            onClick={() => history.push("/myScoreboard")}
          />
          <BottomNavigationAction 
            label="Play" 
            icon={<FavoriteIcon />} 
            onClick={() => history.push("/quickStepHome")}
          />
          <BottomNavigationAction 
            label="Profile" 
            icon={<LocationOnIcon />}
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
