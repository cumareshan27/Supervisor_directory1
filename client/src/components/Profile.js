import React, { Component } from 'react';
import Textfield from './TextField';
import API from '../utils/API.js';

class Profile extends Component {
  state = {
    resident: [],
  };
  componentDidMount() {
    API.getResidents().then(res => this.setState({ resident: res.data }));
  }

  render(){
      console.log(this.state.resident.pop());
      return(
          <div>
              <h1>Resident Profile</h1>
              {/* {this.state.resident} */}
          </div>
      )
  }
 
}

export default Profile;
