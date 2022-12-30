import React, { useEffect } from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './Sidebar/Sidebar';
import Mail from './content/Mail';
import EmailList from './content/EmailList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SendMail from './content/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpened } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './auth/Login.js';
import {db} from './firebase'
import {login} from './features/userSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpened)
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
   
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(login({
            displayName : user.displayName,
            email : user.email,
            photoUrl : user.photoURL
          }))
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
});

  }, [])
  return (
    <Router>
       {!user ? <Login />
        : 
        <div className="app">
        <Header />
        <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail/>}  /> 
              <Route path='/' element={<EmailList/>} /> 
            </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      }
  
    </Router>
 
  );
}

export default App;
