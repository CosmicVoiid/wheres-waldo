import React from "react";
import Portrait from "./Portrait.js";
import "./App.css";

function Dropdown(props) {
	const handleClick = (name) => {
		props.parentCallback(name);
	};

	return (
		<div>
			<div
				className="dropdown"
				style={{
					position: "absolute",
					left: props.position[0],
					top: props.position[1],
				}}
			>
				{props.show.map(
					(obj) =>
						obj.isFound !== true && (
							<Portrait
								key={obj.name}
								img={obj.img}
								description={obj.name}
								parentCallback={handleClick}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Dropdown;
