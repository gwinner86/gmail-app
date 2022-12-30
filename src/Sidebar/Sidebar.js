import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import AccesTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import PhoneICon from '@material-ui/icons/Phone'
import DuoIcon from '@material-ui/icons/Duo'
import NearMeIcon from '@material-ui/icons/NearMe';

import SidebarOptions from './SidebarOptions';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
const dispatch = useDispatch()

  return (
    <div className='sidebar'>
         <Button onClick={() => dispatch(openSendMessage())} fontSize='large' startIcon={<AddIcon />} className='sidebar__compose'>Compose</Button>

         <SidebarOptions Icon={InboxIcon} title="Inbox" number={20} selected={true} />
         <SidebarOptions Icon={StarIcon} title="Starred" number={50}/>
         <SidebarOptions Icon={AccesTimeIcon} title="Snoozed" number={40}/>
         <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54}/>
         <SidebarOptions Icon={NearMeIcon} title="Sent" number={51}/>
         <SidebarOptions Icon={NoteIcon} title="Drafts" number={51}/>
         <SidebarOptions Icon={ExpandMoreIcon} title="More" number={51}/>
    
    
      <div className='sidebar__footer'>
             <div className='footer__icons'>
                 <IconButton>
                   <PersonIcon />
                 </IconButton>
                 <IconButton>
                   <DuoIcon />
                 </IconButton>
                 <IconButton>
                   <PhoneICon />
                 </IconButton>
             </div>
      </div>
    </div>
  )
}

export default Sidebar