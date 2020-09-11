import axios from "axios";

export default {
  // Gets all books
  findAll: function() {
    return axios.get("/api/admin/bookings");
  },
  // Gets the book with the given id
  update: function(id) {
    return axios.get("/api/admin/bookings" + id);
  },
  // Deletes the book with the given id
  remove: function(id) {
    return axios.delete("/api/admin/bookings" + id);
  },
  
};
