import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';

class Services extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Carousel />
                    <div className='jumbotron'>
                        <h1 class="display-4">Services</h1>
                        <p>
                            The services provided by the city that will be tracked by this application are
                            Tax Collector Payments, Utility Payments, Park & Recreation Rental Payments, and Employee Paychecks.
                            These services are summarized below.
                        </p>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Many types of license fees are paid to the Tax Collector: <br />
                                - Driver's License Renewals <br />
                                - Vehicle/Equipment Registration <br />
                                - Property Taxes <br />
                                - Business Taxes <br />
                                - Other Additional Services, Late Fees, Re-instatement Fees, etc. 
                            </li>
                            <li class="list-group-item">
                                Utility payments are monthly re-occurring expenses for usage of water and electricity. 
                            </li>
                            <li class="list-group-item">
                                Parks & Recreation Rentals consists of reservations for city-owned venues. Venues are 
                                of many types such as retail spaces were products and services are sold or entertainment 
                                for family gatheerings and events.
                            </li>
                            <li class="list-group-item">
                                Employee Paychecks are bi-weekly or monthly transactions paid to the citizen. 
                                This is the only revenue scenario.
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Services;
