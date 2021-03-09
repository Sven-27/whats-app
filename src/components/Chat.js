import React from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
        <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>

        </div>
      </div>
      <div className="chat__body">
        Hello chat body
      </div>
      <div className="chat__footer">
        Hello chat footer
      </div>
    </div>
  )
}

export default Chat
