import React, {useState} from 'react';
import { MDBContainer,  MDBBtn,  MDBInput } from 'mdbreact';
import { Redirect} from "react-router-dom";
import axios from "axios"

//This page will work along with PassPort to provide secure Login Functionality

export default function Login() {

    const [admin, setAdmin]= useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLogin] = useState(true);
    const [authenticated, setAuth] = useState(false);

    function loginUser(user) {
      console.log("Im hit boy")
        // LoginAPI.login(user)
        axios.post('/api/admin/login', user)
        .then(function (data) {
          console.log(data.data);
          if (data.data.success) {
            console.log("hell yeah")
            setLogin()
            // console.log(authenticated)
            redirect();  
          } else {
            alert(data.data.message);
          }}).catch(function (err) {
            console.log(err);
          });
    };
  
    function userNameChange(event) {
        setAdmin({ admin: event.target.value })
      };    

    function passwordChange(event) {
        setPassword({ password: event.target.value })
      };
      //passport functionality for checking the login
       
      function handleFormSubmit(event) {
        event.preventDefault();	
        const usernameInput = admin.admin;
        const passwordInput = password.password;
    
        const objSubmit = {
          username: usernameInput,
          password: passwordInput
        }
        if (!admin.admin|| !password.password) {
          return;
        }
        // If we have an email and password we run the loginUser function and clear the form
        console.log(`this is the user and password entered`,objSubmit)
        loginUser(objSubmit);
      };
  
      function redirect() {
        if (loggedIn) {
          console.log(`refirect trying to hit`)
        return (
          <Redirect to='/admin/login'/>
        )} else {
          alert(`Must be authenticated`)
      }}

    return (
		<div className="Login-Full-Container ">
			<MDBContainer>
				<form onSubmit={handleFormSubmit} >
					<p className="h4 text-center py-4">Gerra's Login</p>
                        <MDBInput 
                        label="Email" 
                        outline
                        onChange={userNameChange}
                        name={admin}
                        id="username-input" 
                        type="text" 
                        />
                        <MDBInput 
                        label="Password"
                        outline 

                        name={password}
                        onChange={passwordChange}
                        id="password-input" 
                        type="current-password" 
                         />
						<div className="text-center py-4 mt-3">
                            <MDBBtn 
                            className="btn btn-outline-black" 
                            type="submit"
                          
                            >
								Login
							</MDBBtn>
						</div>
			    </form>
			</MDBContainer>
		</div>
	);
}
