import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Link, Redirect} from "react-router-dom";

//! Import Pages:
import NavbarPage from './components/Navbar/Navbarmenu';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoMatch from "./pages/NoMatch";
import LoginAPI from "./utils/LoginAPI.js"
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register"

//! Imports of CSS Files
import './App.css';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	// const [deAuth, setDeAuth] = useState();

	function authenticate() {
		setAuthenticated(true);
	}
	function deAuth() {
		setAuthenticated(false)
	}
	function logout() {
		LoginAPI.logout()
		  .then(function (data) {
			deAuth();
			window.location.reload();
		  }.catch(function (err) {
			console.log(err);
		  }))};

	return (
		<div className="App">
			<Router>
				<NavbarPage />
					<Switch>
						<Route exact path="/" component={Main}   />

						<Route exact path="/admin/login" component={Admin}  
							authenticate={authenticate}
							deAuth={deAuth}
							authenticated={authenticated}
							logout={logout} 
							/>
						<Route exact path="/signup" component={Register}   />

						<NoMatch />
					</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
