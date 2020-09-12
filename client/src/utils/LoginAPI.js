import axios from "axios";

export default {
    login: function(user) {
        console.log("I was hit loginAPI")
        return axios.post('/api/admin/login', user)
    },
    logout: function() {
        return axios.get('/api/admin/logout')
    },
    signUp: function(user) {
        return axios.post("/api/admin/signup", user)
    }

};
