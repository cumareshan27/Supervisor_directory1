import React, { Component } from 'react';
import Textfield from './TextField';
import API from '../utils/API.js';
import Checkbox from './Checkbox.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';

const OPTIONS = ["Mental Health", "Substance Abuse", "Employee Assitance Program (EAP)", "Allergy & Immunlogy", "ADT"];;

class Supervisor extends Component {
  //  this.state = { value: '' };
  state = {
    Supervisor: [],
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    licenceNumber: '',
    licenceExpiry: '',
    category: [],

    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    console.log('Submit button supervisor');
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
      licenceNumber: this.state.licenceNumber,
      licenceExpiry: this.state.licenceExpiry,
      category: Object.keys(this.state.checkboxes).filter(
        checkbox => this.state.checkboxes[checkbox]
      ),
    })
      .then(res => console.log(res))
      .then(this.props.history.push('/Supervisorprofile'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Supervisor">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/supervisorprofile">
                  Supervisor
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Resident
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search - Coming Soon"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./TeamIcon2.jpg"
                alt="Trulli"
                width="300"
                height="233"
              />
            </div>
            <div className="col">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./DOCTORCapture.JPG"
                      className="d-block w-100"
                      alt="Docs"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./medicine-24.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./TeamIcon2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <h1>Supervisor Create Profile</h1>
       
        <div className="container" align = "center">
        <form class="form-group" align = "center" onSubmit={this.handleFormSubmit}>
        <div class="form-group row" align = "center">
          <Textfield
            onChange={this.handleInputChange}
            id="FirstName"
            label="First Name"
            value={this.state.firstName}
            name="firstName"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="LastName"
            label="Last Name"
            value={this.state.lastName}
            name="lastName"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="MiddleName"
            label="Middle Name"
            value={this.state.middleName}
            name="middleName"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="Email"
            label="Email"
            value={this.state.email}
            name="email"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="PhoneNumber"
            label="PhoneNumber"
            value={this.state.phoneNumber}
            name="phoneNumber"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="AddressLine1"
            label="AddressLine1"
            value={this.state.addressLine1}
            name="addressLine1"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="AddressLine2"
            label="AddressLine2"
            value={this.state.addressLine2}
            name="addressLine2"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="City"
            label="City"
            value={this.state.city}
            name="city"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="State"
            label="State"
            value={this.state.state}
            name="state"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="ZipCode"
            label="ZipCode"
            value={this.state.zipCode}
            name="zipCode"
          />
         
          
          <div className="form-group mt-2">
          <br />
          <div align = "left">{this.createCheckboxes()}
          <br />
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
            <br />
            <br />
            <Textfield
            onChange={this.handleInputChange}
            id="licenceNumber"
            label="LicenceNumber"
            value={this.state.licenceNumber}
            name="licenceNumber"
          />
          <Textfield
            onChange={this.handleInputChange}
            id="licenceExpiry"
            label="LicenceExpiry"
            value={this.state.licenceExpiry}
            name="licenceExpiry"
          />
            {/* <button type="submit" className="btn btn-primary">
              Save
            </button> */}
            <br />
            <br />
            <div>
              <input type="submit" value="submit" className="btn btn-outline-primary mr-2"/>
            </div>
          </div>
          {/* <button onClick={this.handleFormSubmit}></button> */}
          </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Supervisor;
