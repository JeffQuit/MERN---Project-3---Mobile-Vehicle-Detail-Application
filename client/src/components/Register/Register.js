import React, {useState, useEffect} from 'react';
import { MDBContainer,  MDBBtn,  MDBInput } from 'mdbreact';
import {Link, Redirect} from "react-router-dom";
// import LoginAPI from "../../utils/LoginAPI.js";
import axios from "axios"


//This page will work along with PassPort to provide secure Login Functionality

export default function Register() {

    const [admin, setAdmin]= useState('');
    const [password, setPassword] = useState('')

    
    useEffect(() => {
        signUpUser()
      }, [])
    
      function signUpUser(userData) {
        console.log(userData)
        axios.post("/api/admin/signup", 
           userData
        ).then(function (data) {

            console.log("data stuff", data);
            if (data.duplicateUser) {
                // Replace with Modal
                alert("Sorry, that username has been taken");
            } else if (data.data.success) {
                console.log("yay!")
                // this.props.authenticate();
                // this.setState({
                //     redirectToReferrer: true
                // });
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
    
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
        console.log(objSubmit)
        signUpUser(objSubmit);
      
      };

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
								Register
							</MDBBtn>
						</div>
			    </form>
			</MDBContainer>
		</div>
	);
}
