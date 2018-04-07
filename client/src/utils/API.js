import axios from "axios";
import Auth from "./Auth";

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
    // console.log(Auth.getUser());
    return axios.get("/api/incidents/counts-by-category/" + Auth.getUser().id);
  },
  // Groups incidents by Month
  getIncidentByMonth: function() {
    console.log(Auth.getUser());
    return axios.get("/api/incidents/counts-by-month/" + Auth.getUser().id);
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
  authenticateUser: function (userData) {
    console.log('HITTT!');
    return axios.post("/auth/login", userData);
  },
  // Get incidents by industry
  getIncidentsByIndustry: function() {
    return axios.get("/api/incidents/counts-by-industry");
  },
  //Get sum of incidents by category
  getSumByCategory: function() {
    return axios.get("/api/incidents/counts-by-category/");
  },
    //Get sum of category cost
  byCategoryCost: function() {
    return axios.get("/api/incidents/avg-costs-by-category");
  },
    //Get sum industry cost
  byIndustryCost: function() {   
    return axios.get("/api/incidents/avg-costs-by-industry");
  },
};
