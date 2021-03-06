import React, {useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login'
import {useStateValue} from './StateProvider'

function App() {
const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
{!user ? (
 <Login />
  ) : (
      <div className="app__body">
      <Router>
        <Switch>
          <Route path="/rooms/:roomId">
            <Sidebar />
            <Chat />
          </Route>
          <Route path="/">
            <Sidebar />
          </Route>        
        </Switch>     
      </Router>
      </div>
      )}
    </div>
  );
}

export default App;
