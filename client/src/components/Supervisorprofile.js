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
    // console.log(this.state.resident.pop());
    return(
      <div>
        <h1>Supervisor Profile</h1>
        <p>
          {JSON.stringify(this.state.supervisor)}
        </p>
      </div>
    )
  }
 
}

export default Supervisorprofile;