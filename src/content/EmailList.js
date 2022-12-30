import React, {useState,useEffect} from 'react'
import './EmailList.css'
import {Checkbox,IconButton} from '@material-ui/core'
import  ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown'
import  RedoIcon  from '@material-ui/icons/Redo'
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EnailRow from './EmailRow.js'

import {db} from '../firebase.js'
import {collection,  onSnapshot, orderBy, query} from 'firebase/firestore'

import Section from '../components/Section.js';
import EmailRow from './EmailRow.js'

function EmailList() {

    const [emails,setEmail] = useState([]);

     useEffect(() => {
        try {
            const q = query(collection(db, 'email'), orderBy('timestamp', 'desc'))
              onSnapshot(q, (snapshots) => {
                  setEmail(snapshots.docs.map(doc => ({
                      id: doc.id,
                      data: doc.data()
                  })))
                  console.log(emails)
                })
      
            } catch (err) {
                alert(err)
            }

    }, [])
    

  return (
    <div className='email__list'>
        <div className='emaillist__settings'>
            <div className='emailList__settings_Left'>
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className='emailList__settings_Right'>
                 <IconButton>
                    <KeyboardArrowLeftIcon />
                 </IconButton>
                 <IconButton>
                 <KeyboardArrowRightIcon/>
                 </IconButton>
                 <IconButton>
                 <KeyboardHideIcon/>
                 </IconButton>
                 <IconButton>
                 <SettingsIcon/>
                 </IconButton>
            </div>
        </div>

        <div className='emailList__sections'>
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="blue"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
         </div>

         <div className='emailRow__List'>
    
          
         {emails &&  emails.map((email, i) => 
         <>
          <EmailRow id={i} key={i} title={email.data.to} subject={email.data.subject} description={email.data.message} time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()} />
         </>)}
         </div>
    </div>
  )
}

export default EmailList