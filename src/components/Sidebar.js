import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__header__right">
                    <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
            </div>
        </div>
    )
}

export default Sidebar

