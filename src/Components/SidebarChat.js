import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>#CUMARKETING28</h2>
                <p>FOR THE MARKETERS</p>
            </div>
        </div>
    );
};

export default SidebarChat;