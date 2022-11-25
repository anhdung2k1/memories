import React ,{useState,useEffect} from 'react'
import {Link,useNavigate, useLocation} from 'react-router-dom';
import {AppBar, Typography, Button, Avatar,Toolbar} from '@material-ui/core';
import useStyles from './styles.js';
import memories from '../../images/memories.png';
import {useDispatch} from 'react-redux';
import * as actionType from '../../constants/actionTypes.js';



const Navbar = () => {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();

  const logout = () => {
    dispatch({type: actionType.LOGOUT});

    navigate('/auth');

    setUser(null);
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));

  },[location])

  return (
    <AppBar className = {classes.appBar} position="static" color="inherit">
        <div className = {classes.brandContainer}>
            <Typography className = {classes.heading} variant="h2" align = "center">
                Memories
                <img className = {classes.image} src={memories} alt="memories" height="60"/>
            </Typography>
        </div>   
    <Toolbar className = {classes.toolbar}>
        {user ? (
            <div className = {classes.profile}>
                <Avatar className = {classes.purple} alt = {user?.result.name} src={user?.result.picture}>
                    {user?.result.name.charAt(0)}
                </Avatar>
                <Typography className = {classes.userName} variant = "h6">
                    {user?.result.name}
                </Typography>
                <Button variant = "contained" className = {classes.logout} color = "secondary" onClick = {logout}>
                    Logout
                </Button>
            </div>
        ):(
            <Button component ={Link} to = "/auth" variant = "contained" color = "primary">
                Sign In
            </Button>
        )}
    </Toolbar>
    </AppBar>
  )
}

export default Navbar;

