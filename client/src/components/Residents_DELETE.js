import React, { Component } from 'react';
import Textfield from './TextField';
import API from "../utils/API.js"

class Resident extends Component {

  //  this.state = { value: '' };
  state = {
    resident: [],
    firstName: "",
    lastName: "",
    middleName: "",
    email:"",
    phoneNumber:"",
    addressLine1:"",
    addressLine2:"",
    city:"",
    state:"",
    zipCode:"",
    category:[],
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveResident({
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
      category : []
    })
     .then(res => console.log(res))
    //  .then(API.newestResident())

       .then(this.props.history.push("/Profile"))
      // .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Resident">
        <h1>Residence Create Profile</h1>
        <form onSubmit={this.handleFormSubmit}>

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
          <div className="form-group mt-2">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.selectAll}
              >
                Select All
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
          {/* <button onClick={this.handleFormSubmit}></button> */}
        </form>
      </div>
    );
  }
}

export default Resident;
