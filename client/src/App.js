import React from 'react';

//! Import Pages:
import NavbarPage from './components/Navbar/Navbarmenu';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

//! Imports of CSS Files
import './App.css';

function App() {
	return (
		<div className="App">
			<NavbarPage />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
