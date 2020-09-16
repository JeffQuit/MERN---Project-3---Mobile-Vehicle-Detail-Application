import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Import Pages:
import NavbarPage from './components/Navbar/Navbarmenu';
import Main from './pages/Main';
import Admin from './pages/Admin';
import NoMatch from "./pages/NoMatch";
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register"
import GuardedRoute from "./components/GuardedRoute"

//! Imports of CSS Files
import './App.css';

import { UserContext } from './components/UserContext';

function App() {

	const [authorize, setAuthorize] = useState(false);
	console.log('user context is', authorize)

	return (
		<div className="App">
			<Router>
				
				<NavbarPage />
					
					<Switch>
						<UserContext.Provider value={authorize}>
							
							<Route exact path="/" component={Main}   />
							
							<GuardedRoute path='/admin/login' component={Admin} auth={ authorize } />

							<GuardedRoute exact path="/signup" component={Register} auth={ authorize }  />
						
						</UserContext.Provider>
						
						<NoMatch />
					</Switch>

				<Footer setAuthorize={setAuthorize} authorize={authorize} />
			
			</Router>
		</div>
	);
}

export default App;
