import {Checkbox,IconButton} from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedICon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlineICon from '@material-ui/icons/LabelImportantOutlined'

import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectMail} from '../features/mailSlice.js'


function EmailRow({id,title,subject,description,time}) {
  const navigate = useNavigate()
const dispatch = useDispatch();

  const OpenMail = (e) => {
       dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time
       })) 
       navigate('/mail')
  }

  return (

    <div onClick={OpenMail} className='emailRow'>
      <div className='emailRow__options'>
      <Checkbox />
       <IconButton>
        <StarBorderOutlinedICon />
       </IconButton>
       <IconButton>
        <LabelImportantOutlineICon />
       </IconButton>
      </div>

      <div className='emailRow__title'>
        <h3>{title}</h3>
      </div>
      <div className='emailRow__message'>
        <h4>{subject} {" "}
          <span className='emailRow__description'>{description}</span>
         </h4>
      </div>
       <p className='emailRow__time'>
         {time}
       </p>
    
    </div>
  )
}

export default EmailRow