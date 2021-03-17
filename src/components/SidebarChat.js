import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';

const SidebarChat = ({addNewChat, id, name}) => {
  const [seed, setSeed] = useState("")

  useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    let roomName =  prompt("Please enter name of the room")

    if(roomName) {
      
    }
   }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </div>
    ) : (
      <div className="sidebarChat" onClick={createChat}>
      <h2>Add new chat</h2>
      </div>
    )
}

export default SidebarChat
