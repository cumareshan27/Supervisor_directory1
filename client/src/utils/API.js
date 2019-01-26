import axios from "axios";

export default {
  // Gets all resident
  getResidents: function() {
    return axios.get("/api/residents/");
  },
  // Gets the resident with the given id
  getResident: function(id) {
    return axios.get("/api/residents/" + id);
  },
  // Deletes the resident with the given id
  deleteResident: function(id) {
    return axios.delete("/api/residents/" + id);
  },
  // Saves a resident to the database
  saveResident: function(residentData) {
    return axios.post("/api/residents", residentData);
  },
  // Get the last Resident
  newestResident: function() {
    return axios.get("/api/profile");
  },

  // Below this line is all supervisor 

   // Gets all resident
   getSupervisor: function() {
    return axios.get("api/supervisors");
  },
  // Gets the resident with the given id
  getSupervisor: function(id) {
    return axios.get("api/supervisors" + id);
  },
  // Deletes the resident with the given id
  deleteSupervisor: function(id) {
    return axios.delete("api/supervisors" + id);
  },
  // Saves a resident to the database
  saveSupervisor: function(supervisorData) {
    return axios.post("api/supervisors", supervisorData);
  },

  // Get the last Supervisor
  newestSupervisor: function() {
    return axios.get("/api/supervisorprofile");
  },

    // Input the user details to users table  
    
    getUser: (query) => {
      return axios.post("/api/login", query);
    },
    createUser: (query) => {
      return axios.post("/api/login", query);
    },
    checkAuth: function(query) {
      console.log("Quer in API = " + JSON.stringify(query));
      return axios.post("/api/verify", query);
    }
  
};
