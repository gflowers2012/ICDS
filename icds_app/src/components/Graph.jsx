import React, { Component } from 'react';
// import fetchJsonp from 'fetch-jsonp';
import cytoscape from 'cytoscape';
import popperjs from 'cytoscape-popper'
//import GraphData from './CytospaceTestGraphData';

popperjs(cytoscape);

let cyStyle = {
  height: '500px',
  width: '100%',
  display: 'block',
  background: '#33cc33'
};

const CytospaceGraphData = { elements: [] };

class Graph extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputData: {}
        }
    }

    componentWillMount(){
        this.setState({inputData: this.props.data});
    }
    render(){
        return(
                <div className="Graph">
                    {this.state.inputData.returnMessage}
                </div>
        );
    }
}
export default Graph;