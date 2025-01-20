import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondCounter } from "./SecondCounter";

//create your first component
const Home = () => {

	return (
		<div className="container">
			<h1 className="text-center mt-5 mb-4">Contador</h1>

			<SecondCounter />

		</div>
	);
};

export default Home;
