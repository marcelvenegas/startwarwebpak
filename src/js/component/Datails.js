import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Datails extends React.Component {
	constructor() {
		super();
		this.state = null;
	}

	componentDidMount() {
		console.log("Se esta ejecutando");
		fetch(`https://swapi.co/api/${this.props.match.params.name}/${this.props.match.params.theid}`)
			.then(res => res.json())
			.then(data => this.setState({ item: data }));
	}
	render() {
		if (!this.state) return "loading...";
		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<body>
					<img className="card-img-top" src="https://i.ytimg.com/vi/_q51LZ2HpbE/maxresdefault.jpg" alt=" " />
					<h3 className="title card-title">
						<h4 className="card-subtitle mb-2 text-muted">
							Name: {this.props.match.params.name}: {this.state.item.name}
						</h4>
						<h5 className="card-subtitle mb-2 text-muted">
							Gender:{this.props.match.params.gender}: {this.state.item.gender}{" "}
						</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							Eye Color:{this.props.match.params.eye_colo}: {this.state.item.eye_color}{" "}
						</h6>
					</h3>
				</body>
			</div>
		);
	}
}
Datails.propTypes = {
	match: PropTypes.object
};
