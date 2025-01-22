import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<div className="traffic-Light">
			<div 
			  className={"light red" + (selectedColor === "red" ? " glow-red" : "")}
			  onClick={() => setSelectedColor("red")}
			></div>
			<div 
			  className={"light yellow" + (selectedColor === "yellow" ? " glow-yellow" : "")}
			  onClick={() => setSelectedColor("yellow")}
			></div>
			<div 
			  className={"light green" + (selectedColor === "green" ? " glow-green" : "")}
			  onClick={() => setSelectedColor("green")}
			></div>
		</div>
	);
};

export default Home;
