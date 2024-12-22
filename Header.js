import React from 'react';

const Header = () => {
	    return (
		            <header className="header">
		                <img src="images/your-logo.png" alt="Logo" className="logo" />
		                <h1>Tourism in Sudan</h1>
		                <nav className="nav-links">
		                    <a href="index.html">Home</a>
		                    <a href="hotels.html">Hotels</a>
		                    <a href="places.html">Tourist Places</a>
		                    <a href="culture.html">Culture & History</a>
		                    <a href="about.html">About</a>
		                    <a href="contact.html">Contact</a>
		                </nav>
		                <input type="text" placeholder="Search..." />
		            </header>
		        );
};

export default Header;

