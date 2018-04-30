import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import './Navbar.css';


class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Citi-Zen</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Process">Process</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Management">Management</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/Downloads">Downloads</a>
                                <a class="dropdown-item" href="/Team">Team Members</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/Contact">Contact Us</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Navbar;