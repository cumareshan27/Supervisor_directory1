import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
//import Textfield from './TextField';
//import API from "../utils/API.js"


class Home extends Component {

  render() {
    return (
      <div className="Home">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Supervisor</a>
              </li>


              <li class="nav-item">
                <a class="nav-link" href="#">Resident</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
            </button>
            </form>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col">
              <img src="./TeamIcon2.jpg" alt="Trulli" width="300" height="233"></img>
            </div>
            <div class="col">



              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="./DOCTORCapture.JPG" class="d-block w-100" alt="Docs" width="300" height="300"></img>
                  </div>
                  <div class="carousel-item">
                    <img src="./medicine-24.jpg" class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                    <img src="./TeamIcon2.jpg" class="d-block w-100" alt="..."></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div class="ui placeholder segment">
          <div class="ui stackable very relaxed two column grid">
            <div class="column">
              <form class="ui form">
                <div class="field"><label>Username</label>
                  <div class="ui left icon input"><input type="text" placeholder="Username" /><i aria-hidden="true" class="user icon"></i></div>
                </div>
                <div class="field"><label
                >Password</label>
                  <div class="ui left icon input"><input type="password" /><i aria-hidden="true" class="lock icon"></i></div>
                </div><button class="ui primary button">Login</button>
              </form>
            </div>
            <div class="middle aligned column"><button class="ui big button"><i aria-hidden="true" class="signup icon"></i>Sign
          up</button></div>
          </div>
          <div class="ui vertical divider">Or</div>
        </div>
      </div >
    );

  }
}

export default Home;