/*****************************************************************
 Author: Gregory R. Flowers Jr. 
 Date: April 3, 2018 
 Description: This index.js file is apart of the React.js front-end server.
    The purpose of this file is to manage the React routes for components.
***************************************************************** */

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/cytoscape';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
