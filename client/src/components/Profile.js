import React, { Component } from 'react';
import Textfield from './TextField';
import API from '../utils/API.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

const OPTIONS = ["Mental Health", "Kumar", "Joe", "Ryan"];

class Profile extends Component {
  state = {
    resident: [],
    
  };
  componentDidMount() {
    API.newestResident().then(res => this.setState({ resident: res.data }));
  }

  rows = [this.state.resident.category];

  render() {
    // console.log(this.state.resident.pop());
    return (
      <div>
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

        {/* <p>{JSON.stringify(this.state.resident)};</p> */}
        {/* <p>dangerouslySetInnerHTML={ { __html: JSON.stringify(this.state.resident) } }</p> */}

        <h1 align="center">Resident Profile</h1>
        <p>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">AddressLine1</th>
                <th scope="col">AddressLine2</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">ZipCode</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.resident.firstName}</th>
                <td>{this.state.resident.lastName}</td>
                <td>{this.state.resident.email}</td>
                <td>{this.state.resident.phoneNumber}</td>
                <td>{this.state.resident.addressLine1}</td>
                <td>{this.state.resident.addressLine2}</td>
                <td>{this.state.resident.city}</td>
                <td>{this.state.resident.state}</td>
                <td>{this.state.resident.zipCode}</td>
                <td>{this.state.resident.category}</td>
              </tr>
            </tbody>
            <thead>
              {/* <tr scope="col">
                <td>First Name</td>

                <td scope="col">{this.state.resident.firstName}</td>
              </tr>
              <tr>
                <td scope="col">LastName</td>
                <tr>
                  <td scope="col">{this.state.resident.lastName}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">Email</td>
                <tr>
                  <td scope="col">{this.state.resident.email}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">PhoneNumber</td>
                <tr>
                  <td scope="col">{this.state.resident.phoneNumber}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">AddressLine1</td>
                <tr>
                  <td scope="col">{this.state.resident.addressLine1}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">AddressLine2</td>
                <tr>
                  <td scope="col">{this.state.resident.addressLine2}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">City</td>
                <tr>
                  <td scope="col">{this.state.resident.city}</td>
                </tr>
              </tr>
              <tr>
                <td cscopelass="col">State</td>
                <tr>
                  <td scope="col">{this.state.resident.state}</td>
                </tr>
              </tr>
              <tr>
                <td scope="col">ZipCode</td>
                <tr>
                  <td scope="col">{this.state.resident.zipCode}</td>
                </tr>
              </tr>

              <tr>
                <td scope="col">Category</td>

                <td scope="col">
                  {rows.map((row, i) => {
      return <tr>{row.text}</tr>
    })}

                  {this.state.resident.category}
                </td>
              </tr> */}
            </thead>
          </table>
          <div className="form-group mt-2">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.selectAll}
              >
                Edit Profile - bug found
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Search for Supervisors - Coming soon
              </button>
              {/* <button type="submit" className="btn btn-primary">
                Save
              </button> */}
          </div>
        </p>
      </div>
    );
  }
}

export default Profile;
