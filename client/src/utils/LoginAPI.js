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
    //  ).then(function (data) {
    }
    //      console.log("data stuff", data);
    //      if (data.duplicateUser) {
    //          // Replace with Modal
    //          alert("Sorry, that username has been taken");
    //      } else if (data.data.success) {
    //          console.log("yay!")
    //          // this.props.authenticate();
    //          // this.setState({
    //          //     redirectToReferrer: true
    //          // });
    //      }
    //  }).catch(function (err) {
    //      console.log(err);
    //  });
    // },
};
