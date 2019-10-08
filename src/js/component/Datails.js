import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Datails extends React.Component {
	render() {
		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<body>
					<img className="card-img-top" src="https://i.ytimg.com/vi/_q51LZ2HpbE/maxresdefault.jpg" alt=" " />
					<h3 className="title card-title">
						Yoda is an expert at turning defense into attack, using the Force to absorb blaster fire, heal
						his wounds, and protect him from harm while using his lightsaber to inflict damage.
					</h3>
				</body>
			</div>
		);
	}
}
