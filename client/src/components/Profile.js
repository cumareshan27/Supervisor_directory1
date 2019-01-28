import React, { Component } from 'react';
import Textfield from './TextField';
import API from '../utils/API.js';

class Profile extends Component {
  state = {
    resident: [],
  };
  componentDidMount() {
    API.newestResident().then(res => this.setState({ resident: res.data }));
  }
  
  render(){
    // console.log(this.state.resident.pop());
    return(
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
                placeholder="Search"
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
        <p>
          {JSON.stringify(this.state.resident)};
        </p>
        {/* <p>dangerouslySetInnerHTML={ { __html: JSON.stringify(this.state.resident) } }</p> */}

        <p>
          <table>
            <thead>
              <tr>
                <td>
                  First Name
                </td>
                <td>
                  LastName
                </td>
                <td>
                  Email
                </td>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.resident.firstName}
                </td>
                <td>
                  {this.state.resident.lastName}
                </td>
                <td>
                  {this.state.resident.email}
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
    )
  }
 
}

export default Profile;
