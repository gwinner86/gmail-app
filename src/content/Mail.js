import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete'
import ErrorIcon from '@material-ui/icons/Error'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React from 'react'
import './Mail.css'
import {useNavigate } from 'react-router-dom';
import { Label } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import {selectOpenMail} from '../features/mailSlice.js'

function Mail() {

  const navigate = useNavigate();
  const getSelectedMail = useSelector(selectOpenMail)

  return (
    <div className='mail'>
        <div className='mail__tools'>
          <div className='mail__tools_left'>
              <IconButton onClick={() => navigate('/')}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton >
                <MoveToInboxIcon />
              </IconButton>
              <IconButton >
                <ErrorIcon />
              </IconButton>
              <IconButton >
                <DeleteIcon />
              </IconButton>
              <IconButton >
                <EmailIcon />
              </IconButton>
              <IconButton >
                <WatchLaterIcon />
              </IconButton>
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
              <IconButton>
                <LabelImportantIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
          </div>
          <div className='mail__tools_right'>
              <IconButton>
                <UnfoldMoreIcon />
              </IconButton>
              <IconButton>
                <PrintIcon />
              </IconButton>
              <IconButton>
                <ExitToAppIcon />
              </IconButton>
          </div>
        </div>

        <div className='mail__body'>
          <div className='mail__body__header'>
             <h2>{getSelectedMail.subject}</h2>
             <LabelImportantIcon className='mail__important' />
             <p>{getSelectedMail.title}</p>
             <p>{getSelectedMail.time}</p>
          </div>
          <div className='mail__message'>
                <p>{getSelectedMail.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Mail