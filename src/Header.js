import React from "react";
import waldo from "./waldo_portrait.jpeg";
import odlaw from "./odlaw_portrait.jpeg";
import "./App.css";

function Header() {
	return (
		<header>
			<h2>Where's Waldo?</h2>
			<h3>Find</h3>
			<div className="img-container">
				<img className="header-img" src={waldo} alt="Waldo" />
				<img className="header-img" src={odlaw} alt="Odlaw" />
			</div>
		</header>
	);
}

export default Header;
