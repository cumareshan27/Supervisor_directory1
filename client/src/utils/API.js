import axios from "axios";

export default {
  // Gets all resident
  getResidents: function() {
    return axios.get("/api/residents");
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
  }
  
};
