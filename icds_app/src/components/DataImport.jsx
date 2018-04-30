import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class DataImport extends Component{
    constructor(props){
        super(props);

        this.state = {
            filename: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    componentWillMount(){

    }
    componentDidMount(){

    }

    handleFileChange(event){
        this.setState({filename: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state.filename);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Upload your JavaScript data source file for import.
                    <br />
                    <input id="input-file" type="file" class="file" onChange={this.handleFileChange} />
                    
                    <input type="submit" class="form-control" value="Import" />
                </form>
            </div>
        );
    }

}

export default DataImport;