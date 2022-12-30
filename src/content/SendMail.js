import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {closeSendMesssage} from '../features/mailSlice';
import { addDoc, collection } from "firebase/firestore"; 
import {db} from '../firebase.js';
import {  serverTimestamp } from "firebase/firestore";

function SendMail() {
 const dispatch = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

const SendMailToServer = (data) => {

    try  {
      console.log(data);
      const addMail = (async () => {
    
        const docRef = await addDoc(collection(db, "email"), {
          to : data.to,
          subject : data.subject,
          message : data.message,
          timestamp :serverTimestamp()
        });
    
      })
      addMail();
      dispatch(closeSendMesssage())
    }
    catch(error) {
      alert(error.message)
    }
      
  }

  return (
    <div className='sendMail'>
       <div className='sendMail__header'>
           <h3>New Message</h3>
           <CloseIcon onClick={() => dispatch(closeSendMesssage())} className='sendMail__close' />
       </div>

       <form onSubmit={handleSubmit(SendMailToServer)}>
           <input name='to' placeholder='To'  type='email' {...register('to', { required: true })} />
            {errors.to && <span className='sendMail__errors'>To is required</span>}

           <input name='subject' placeholder='Subject' type='text'  {...register('subject', { required: true })} />
           {errors.to && <span className='sendMail__errors'>Subject is required</span>}

           <input name='message' placeholder='Message...' type='text' className='sendMail__message'  {...register('message', { required: true })} />
           {errors.to && <span className='sendMail__errors'>Message is required</span>}

           <div className='sendMail__option'>
            <Button type='submit' className='sendMail__send'>Send</Button>
           </div>
       </form>
    </div>
  )
}

export default SendMail