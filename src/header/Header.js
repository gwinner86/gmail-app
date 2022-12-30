import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from '../features/userSlice'
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const user = useSelector(selectUser)
const dispatch = useDispatch()

  const auth = getAuth();
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(logout())
    }).catch((error) => {
      // An error happened.
    });
  }
   

  return (
    <div className='header'>
       <div className='header__left'>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <img src='https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png' alt='Gmail image' />
       </div>
       <div className='header__middle'>
             <SearchIcon />
             <input placeholder='search email' type='text' />
             <ArrowDropDown  className='header__inputCaret'/>
             {/* <button>search</button> */}
       </div>
       <div className='header__right'>
             <IconButton>
              <AppsIcon />
              </IconButton>
              <IconButton>
              <NotificationsIcon />
             </IconButton>

             <Avatar onClick={logOut} src={user?.photoUrl} />
       </div>
    </div>
  )
}

export default Header