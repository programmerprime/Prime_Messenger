import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Chat.css';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios';


const Chat = () => {



    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>


            <div className="chat__body">

                {
                    messages.map(message => (
                        <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        
                        {message.message}
                        
                         <span className="chat__timestamp">{message.timestamp}</span>
                        
                    </p>
                    ))
                }


            </div>


<div className="chat__footer">
    <InsertEmoticonIcon />
    <form>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
        <button onClick={sendMessage} type="submit">Send</button>
    </form>
    <MicIcon />
</div>

        </div>
    );
};

export default Chat;