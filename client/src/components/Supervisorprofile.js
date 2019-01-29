import React, { Component } from 'react';
import Textfield from './TextField';
import API from '../utils/API.js';

class Supervisorprofile extends Component {
  state = {
    supervisor: [],
  };
  componentDidMount() {
    API.newestSupervisor().then(res => this.setState({ supervisor: res.data }));
  }

  render(){
    // console.log(this.state.supervisor.pop());
    return(
      <div>
       
        {/* <p>
          {JSON.stringify(this.state.supervisor)}
        </p> */}
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

        <h1 align="center">Supervisor Profile</h1>

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
                <th scope="col">LicenceNumber</th>
                <th scope="col">LicenceExpiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.state.supervisor.firstName}</th>
                <td>{this.state.supervisor.lastName}</td>
                <td>{this.state.supervisor.email}</td>
                <td>{this.state.supervisor.phoneNumber}</td>
                <td>{this.state.supervisor.addressLine1}</td>
                <td>{this.state.supervisor.addressLine2}</td>
                <td>{this.state.supervisor.city}</td>
                <td>{this.state.supervisor.state}</td>
                <td>{this.state.supervisor.zipCode}</td>
                <td>{this.state.supervisor.category}</td>
                <td>{this.state.supervisor.licenceNumber}</td>
                <td>{this.state.supervisor.licenceExpiry}</td>
              </tr>
            </tbody>
          </table>
          <div className="form-group mt-2">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.selectAll}
              >
                Edit Profile - bug found
              </button>
          </div>

          </p>
            
      </div>
    )
  }
 
}

export default Supervisorprofile;