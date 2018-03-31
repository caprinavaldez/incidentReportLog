import axios from "axios";

export default {
  // Gets all incidents
  getIncidents: function() {
    return axios.get("/api/incidents");
  },
  // Gets the incident with the given id
  getIncident: function(id) {
    return axios.get("/api/incidents/" + id);
  },
  // Deletes the incident with the given id
  deleteIncident: function(id) {
    return axios.delete("/api/incidents/" + id);
  },
  // Saves a incident to the database
  saveIncident: function(incidentData) {
    return axios.post("/api/incidents", incidentData);
  },
  // Groups incidents by category
  getIncidentByCategory: function() {
    return axios.get("/api/incidents/counts-by-category");
  },
  // Groups incidents by Month
  getIncidentByMonth: function() {
    return axios.get("/api/incidents/counts-by-month");
  },
   /////////////////////////////////////////////

  // Gets all users
  // getUsers: function() {
  //   return axios.get("/api/users");
  // },

  // // Gets the user with the given id
  // getUser: function(id) {
  //   return axios.get("/api/users/" + id);
  // },

  // Saves a user to the database
  saveNewUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Get incidents by industry
  getIncidentsByIndustry: function() {
    return axios.get("/api/incidents/counts-by-industry");
  },
  //Get sum of incidents by category
  getSumByCategory: function() {
    return axios.get("/api/incidents/counts-by-category");
  },
    //Get sum of category cost
  byCategoryCost: function() {
    return axios.get("/api/users/counts-by-categorycost");
  },
    //Get sum industry cost
  byIndustryCost: function() {   
    return axios.get("/api/users/counts-by-industrycost");
  },
};
