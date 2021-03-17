import React, {useState, useEffect} from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
const [input, setInput] =useState("")

const sendMessage = (e) => {
  e.preventDefault()

  console.log('You type, >>>>', input)
}

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
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Sven</span>
          Hey you
          <span className="chat__timestamp">19.00u</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input 
          value={input}
          type="text" 
          placeholder="Type your message" 
          onChange={(e)=> setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">send message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
