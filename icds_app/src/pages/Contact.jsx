import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';

class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='container'>
                    <div className='jumbotron'>
                        <h2>Contact</h2>
                        <p>
                            The contact.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
