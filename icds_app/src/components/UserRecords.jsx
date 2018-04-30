/*****************************************************************
 Author: Gregory R. Flowers Jr. 
 Date: April 16, 2018 
 Description: This UserRecords.js file is apart of the React.js front-end.
    The purpose of this file is to implement the 

***************************************************************** */

import React, {Component} from 'react';
import Graph from './Graph.jsx';
import DeleteUser from './DeleteUser.jsx';
import axios from 'axios';


class UserRecords extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        driverLicenseValue: '', 
        firstnameValue: '', 
        lastnameValue: '', 
        userRecords: {}, 
        message: '', 
        requestStatus: 'loading'
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {

      event.preventDefault();
    }

    componentDidMount(){
      axios.get('http://localhost:4000/users/allservices/'+ this.props.license) //this.props.match.params.license
      .then( res => {
        this.setState({
          userRecords: res.data, 
          requestStatus: 'succeeded'
        });
        console.log(this.state.userRecords);
      });
    }
  
    render() {
      if (this.state.requestStatus === 'failed') { return (<p>Failed!</p>) }
      else if (this.state.requestStatus === 'succeeded') {
        return (
          <div className= 'UserRecords'>
            <h3>Results:</h3>
            <h4> {this.state.userRecords.returnMessage} </h4>
            <DeleteUser license= {this.props.license}/>
            {/* <Graph data= {this.state.userRecords} /> */}
          </div>
        )
    } else {
        return (<p>Loading....</p>)
    }

  }
}

  export default UserRecords;