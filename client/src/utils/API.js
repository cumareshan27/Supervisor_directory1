import axios from "axios";

export default {
  // Gets all resident
  getResidents: function() {
    return axios.get("/api/residents/dispay");
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
  newestResident: function(){
    return axios.get("/api/residents/new");
  },

    // Input the user details to users table  
    
    getUser: (query) => {
      return axios.get("/api/login", query);
    },
    createUser: (query) => {
      return axios.post("/api/login", query);
    },
    checkAuth: function(query) {
      console.log("Quer in API = " + JSON.stringify(query));
      return axios.get("/api/verify", query);
    }
  
};
