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
						<h4 className="card-subtitle mb-2 text-muted">Name: </h4>
						<h5 className="card-subtitle mb-2 text-muted">Gender: </h5>
						<h6 className="card-subtitle mb-2 text-muted">Eye Color: </h6>
					</h3>
				</body>
			</div>
		);
	}
}
