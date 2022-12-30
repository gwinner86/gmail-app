import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {provider} from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice'

function Login() {
  const dispatch = useDispatch();
  

const signIn = () => {

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch(login({
      displayName : user.displayName,
      email : user.email,
      photoUrl : user.photoURL
    }))
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png' />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login