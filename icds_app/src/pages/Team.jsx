import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';

class Team extends Component{
    render(){
        return(
            <div>
                <Navbar />
                
                    <div className='jumbotron'>
                        <h2>Team</h2>
                        <p>
                            The team.
                        </p>
                    </div>
                </div>
        );
    }
}

export default Team;
