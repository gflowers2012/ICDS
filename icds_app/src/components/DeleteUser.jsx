import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



class DeleteUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            formSubmitted: false,
            driverLicenseValue: "", 
            requestStatus: false,
            message: "", 
            results: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        this.setState({ driverLicenseValue: this.props.license });
        console.log("WillMount");
    }
    
    handleSubmit(event) {
     console.log("submit");
            axios.get('http://localhost:4000/users/deleteuser/'+ this.state.driverLicenseValue) //this.props.match.params.license
         .then( res => {
         this.setState({
             results: res.data, 
             requestStatus: 'succeeded', 
             message: res.data.returnMessage
         });
         console.log(this.state.message);
         });
     

        event.preventDefault();
      }

    componentDidMount(){
        console.log("DidMount");
      }

    render(){
        if(this.state.formSubmitted){
            return(
                <div>
                    {this.state.message}
                </div>    
            );
        }
        else{
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <input type="submit" class="form-control" value="Delete User" />
                    </form>
                </div>
            );
        }
            
    }

}

export default DeleteUser;