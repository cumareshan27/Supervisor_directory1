import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {

  render() {
    return (
      <div className="Home">
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
                <a className="nav-link" href="/registersupervisor">
                  Supervisor
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/registerresident">
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
        </div>

        <div className="ui placeholder segment">
          <div className="ui stackable very relaxed two column grid">
            <div className="column">
              <form className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input type="text" placeholder="Will be incorporated after the MVP" />
                    <i aria-hidden="true" className="user icon" />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input type="password" placeholder="Will be incorporated after the MVP"/>
                    <i aria-hidden="true" className="lock icon" />
                  </div>
                </div>
                <button className="ui primary button">Login</button>
              </form>
            </div>
            <div className="middle aligned column">
              {/* <button onClick={this.handleFormSubmitResident} className="ui big button" > */}
              {/* <button onClick={this.handleFormSubmitResident} className="ui big button" > */}
              <a href="/registerresident">
                <button className="ui big button">
                  <i aria-hidden="true" className="signup icon" />
                  Register as Resident
                </button>{' '}
              </a>
              <br />
              <a href="/registersupervisor">
                <button className="ui big button">
                  <i aria-hidden="true" className="signup icon" />
                  Register as Supervisor
                </button>{' '}
              </a>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default Home;
