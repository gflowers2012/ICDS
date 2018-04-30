import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';

class Downloads extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='container'>
                    <div className='jumbotron'>
                        <h2>Downloads</h2>
                        <p>
                            The downloads.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Downloads;
