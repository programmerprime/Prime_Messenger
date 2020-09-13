import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Login from './Components/Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      
  {!user ? (
    <Login />
  ) : (
    <div className="app__body">

    <Router>

    <Sidebar />


     <Switch>

        <Route path="/rooms/:roomId">
            <Chat />
        </Route>

        <Route path="/">
           <Chat />
        </Route>
        
     </Switch>

    </Router>

  </div>
  )
  }

    </div>
  );
}

export default App;
