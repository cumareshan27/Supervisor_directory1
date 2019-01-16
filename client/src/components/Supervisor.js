import React, { Component } from 'react';
import Textfield from './TextField';
import API from "../utils/API.js"

class Supervisor extends Component {

  //  this.state = { value: '' };
  state = {
    Supervisor: [],
    firstName: "",
    lastName: "",
    middleName: "",
    email:"",
    phoneNumber:"",
    addressLine1:"",
    addressLine2:"",
    city:"",
    state:"",
    zipCode:""

  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveSupervisor({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      middleName: this.state.middleName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
    })
     .then(res => console.log(res))
      // .then(this.props.history.push("https://www.google./") )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Supervisor">
        <h1>Residence Create Profile</h1>
        <form>
          <Textfield 
            onChange={this.handleInputChange} 
            id="FirstName" 
            label="First Name" 
            value={this.state.firstName}
            name="firstName"
          />
          <Textfield onChange={this.handleInputChange} id="LastName" label="Last Name" value={this.state.lastName} name="lastName"/>
          <Textfield onChange={this.handleInputChange} id="MiddleName" label="Middle Name" value={this.state.middleName} name="middleName" />
          <Textfield onChange={this.handleInputChange} id="Email" label="Email" value={this.state.email} name="email" />
          <Textfield onChange={this.handleInputChange} id="PhoneNumber" label="PhoneNumber" value={this.state.phoneNumber} name="phoneNumber" />
          <Textfield onChange={this.handleInputChange} id="AddressLine1" label="AddressLine1" value={this.state.addressLine1} name="addressLine1" />
          <Textfield onChange={this.handleInputChange} id="AddressLine2" label="AddressLine2" value={this.state.addressLine2} name="addressLine2" />
          <Textfield onChange={this.handleInputChange} id="City" label="City" value={this.state.city} name="city" />
          <Textfield onChange={this.handleInputChange} id="State" label="State" value={this.state.state} name="state" />
          <Textfield onChange={this.handleInputChange} id="ZipCode" label="ZipCode" value={this.state.zipCode} name="zipCode" />
          {/* <div>
            <input type="submit" value="Submit" />
          </div> */}
          <button onClick={this.handleFormSubmit}></button>
        </form>
      </div>
    );
  }
}

export default Supervisor;