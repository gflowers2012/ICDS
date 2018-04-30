/*****************************************************************
 Author: Gregory R. Flowers Jr. 
 Date: April 3, 2018 
 Description: This NewUser.js file is apart of the React.js front-end.
    The purpose of this file is to implement the New User component to
    allow a user to check if they have import data from the source system. 
    More specifically, the user will input their name, address, and driver's 
    license. The application will return the number of records and which system
    or service they origninated if present.

***************************************************************** */

import React, {Component} from 'react';
//import './Visual.css';
import UserRecord from './UserRecords.jsx';
import axios from 'axios';


class NewUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {stateValue: 'FL', driverLicenseValue: '', firstnameValue: '', lastnameValue: '', formSubmitted:false};

      this.handleStateChange = this.handleStateChange.bind(this);
      this.handleDriverLicenseChange = this.handleDriverLicenseChange.bind(this);
      this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
      this.handleLastnameChange = this.handleLastnameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleStateChange(event) {
        this.setState({stateValue: event.target.value});
      }
    handleDriverLicenseChange(event) {
        this.setState({driverLicenseValue: event.target.value});
      }
    handleFirstnameChange(event) {
      this.setState({firstnameValue: event.target.value});
      }
    handleLastnameChange(event) {
        this.setState({lastnameValue: event.target.value});
      }
    handleSubmit(event) {
      alert('Driver License State: ' + this.state.stateValue + '\n'
                + 'Driver License #: ' + this.state.driverLicenseValue + '\n'
                + 'Firstname: ' + this.state.firstnameValue + '\n'
                + 'Lastname: ' + this.state.lastnameValue + '\n'
            );
      this.setState({formSubmitted: true});
      event.preventDefault();
    }
  
    render() {
        if (this.state.formSubmitted){
            return(
                <div>
                <UserRecord license={this.state.driverLicenseValue} />
                </div>
                );
        }
        else{
            return (
          
                <div className= 'NewUser'>
                  <p className="NewUser-intro">
                    Using the form below, citizens may query the data store to see if their transactions 
                    are available in the system.
                  </p>
                  <form onSubmit={this.handleSubmit}>
                  <label>
                      Driver's License State:
                      <select class="form-control" value={this.state.stateValue} onChange={this.handleStateChange}>
                          <option value="FL">Florida, FL</option>
                          <option value="GA">Georgia, GA</option>
                          <option value="AL">Alabama, AL</option>
                          <option value="TX">Texas, TX</option>
                      </select>
                  </label>
                  <br/>
                  <label>
                      Driver's License #:
                      <input type="text" class="form-control" value={this.state.DriverLicenseValue} onChange={this.handleDriverLicenseChange} />
                  </label>
                  <br/>
                  <label>
                      Firstname:
                      <input type="text" class="form-control" value={this.state.firstnameValue} onChange={this.handleFirstnameChange} />
                  </label>
                  <br/>
                  <label>
                      Lastname:
                      <input type="text" class="form-control" value={this.state.lastnameValue} onChange={this.handleLastnameChange} />
                  </label>
                  <br/>
                  <input type="submit" class="form-control" value="Submit" />
                  </form>
                </div>               
            );
        }
      
    }
  }

  export default NewUser;