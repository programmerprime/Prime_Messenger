import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import  SearchOutlined  from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import db from '../firebase';
import { useStateValue } from '../StateProvider';



const Sidebar = () => {

    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

        return () => {
            unsubscribe(); 
        }

    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src = {user?.photoURL} />
                <div className="sidebar__headerRight">
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
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>

            </div>


            <div className="sidebar__chats">

            <SidebarChat addNewChat />
                
             {
                 rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} desc={room.data.desc} />
                 ))
             }
            </div>

        </div>
    );
};

export default Sidebar;