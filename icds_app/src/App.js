import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
//import './App.css';

import UserRecords from './components/UserRecords.jsx';
import Visual from './components/Visual';
import Parameters from './components/Parameters';
import Graph from './components/Graph.jsx';
import NewUser from './components/UserSearch.jsx';

import Home from './pages/Home.jsx';
import Process from './pages/Process.jsx';
import Services from './pages/Services.jsx';
import Management from './pages/Management.jsx';
import Downloads from './pages/Downloads.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path='/' component= {Home} />
            <Route exact path='/UserSearch' component= {NewUser} />
            <Route exact path='/UserRecords/:license' component= {UserRecords} />
            <Route exact path='/Process' component= {Process} />
            <Route exact path='/Services' component= {Services} />
            <Route exact path='/Management' component= {Management} />
            <Route exact path='/Downloads' component= {Downloads} />
            <Route exact path='/Contact' component= {Contact} />
            <Route exact path='/Team' component= {Team} />
          </div>
      </Router>
    );
  }
}

export default App;
