import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import City from '../images/city.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                    <div className='jumbotron'>
                    <center><h1 class='display-4'>Welcome to the Citi-Zen App Informational Website</h1></center>
                        <center><h3>"Citi-Zen is the ability to track expenses for city services online".</h3></center><br />
                        <img class="d-block w-100" src={City} alt="Denver"></img><br />
                        <h4>
                            Imagine paying for a city service
                            and then pulling up your account to see the weekly, monthly or yearly expense data. Then Citi-Zen application
                            provides that experience. The purpose of Citi-Zen is to provide a simple interface to view city service analytics 
                            in an effort to improve the transparency of the relationship between the citizen and city-owned services creating 
                            a state of zen for both.
                        </h4>
                    </div>
                </div>
        );
    }
}

export default Home;
