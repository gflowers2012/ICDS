import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import UserSearch from '../components/UserSearch.jsx';
import DataImport from '../components/DataImport.jsx';

class Management extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='container'>
                    <div className='jumbotron'>
                        <h2>Management</h2>
                        <UserSearch />
                    </div>
                </div>
            </div>
        );
    }
}

export default Management;
