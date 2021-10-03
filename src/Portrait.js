import React from "react";
import "./App.css";

function Portrait(props) {
	const handleClick = () => {
		props.parentCallback(props.description);
	};

	return (
		<div>
			<img
				className="portrait"
				src={props.img}
				alt={props.description}
				onClick={handleClick}
			/>
		</div>
	);
}

export default Portrait;
