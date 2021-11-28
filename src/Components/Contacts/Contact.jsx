import React, { Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contactNo: '+8801856478259',
            officeNo: '+02-9564487',
            officeCall: '',
            contactCall: ''
         }
    }

    changeOfficeCall() {
        this.setState({
            officeCall: 'Thanks For Calling!'
        })
    }

    changeContactCall() {
        this.setState({
            contactCall: 'Thanks For Calling! But think before talk!'
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Contact Us</h1>
                <p>
                    Office No : {this.state.officeNo} <button className="btn btn-success" onClick={()=>this.changeOfficeCall()}>Call</button>
                    <br />
                    <span className="text text-success">{this.state.officeCall}</span><br />
                    Developer : {this.state.contactNo} <button className="btn btn-danger" onClick={()=>this.changeContactCall()}>Call</button>
                    <br />
                    <span className="text text-danger">{this.state.contactCall}</span>
                </p>
            </div>
         );
    }
}
 
export default Contacts;