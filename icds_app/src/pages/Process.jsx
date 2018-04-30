import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import ProcessPic from '../images/process.png';

class Process extends Component{
    render(){
        return(
            <div>
                <Navbar />
                    <div className='jumbotron'>
                    <center><h1 class="display-4">The Process</h1></center>
                        <center><h3>"Is your data SMART: Simple, Measureable, Accurate, Readable, Testable?"</h3></center>
                        <img class="d-block w-100" src={ProcessPic} alt="The Process"></img><br/>
                        <h4>
                            The section below describes the high-level process flow for the application. First, 
                            citizens purchase and use city services. The transaction data is then imported from source 
                            systems. Finally, information browsing and data analytics are provided for the user.
                        </h4><br />
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Citizens purchase city services.</h5>
                                <small>Source Data</small>
                                </div>
                                <p class="mb-1">1. Daily citizens pay for the use of city services. Each transaction is tracked in an OLTP database.</p>
                                <small>Services include Tax Collector, Utilities, Park & Recs, and Employees.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Import transaction source data.</h5>
                                <small class="text-muted">Import Data</small>
                                </div>
                                <p class="mb-1">2. Application extracts, transforms, and loads source data during import.</p>
                                <small class="text-muted">Import is performed using JavaScript. Transform data is stored via MongoDB.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Search and view analytics for service transactions.</h5>
                                <small class="text-muted">Analytics</small>
                                </div>
                                <p class="mb-1">3. Users may search their information and discover trends.</p>
                                <small class="text-muted">Additional graphing and visualizations tools are neccessary.</small>
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Process;
