import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';
import db from "../firebase"
import { Link } from "react-router-dom";

const SidebarChat = ({addNewChat, id, name}) => {
  const [seed, setSeed] = useState("")

  useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    let roomName =  prompt("Please enter name of the room")

    if(roomName) {
      db.collection('rooms').add({
        name: roomName,
      })
    }
   }

    return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </div>
        </Link>
    ) : (
      <div className="sidebarChat" onClick={createChat}>
      <h2>Add new chat</h2>
      </div>
    )
}

export default SidebarChat
