import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Planets extends React.Component {
	render() {
		console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", this.props);

		return (
			<div className="card-characters card col-lg-6 col-md-6  ">
				<div className="card-body">
					<img
						className="card-img-top"
						src="https://vignette.wikia.nocookie.net/starwars/images/4/41/Naboo_FFGRebellion.png/revision/latest?cb=20170529051916"
						alt=" "
					/>
					<h3 className="title card-title" />
					<h4 className="card-subtitle mb-2 text-muted">Name: {this.props.name}</h4>
					<h5 className="card-subtitle mb-2 text-muted">Climate: {this.props.climate}</h5>
					<h6 className="card-subtitle mb-2 text-muted">Terrains: {this.props.terrain}</h6>
					<button type="button" className="btn btn-outline-primary">
						<Link to={"/datails/planets/" + this.props.id}> More Info</Link>
					</button>
				</div>
			</div>
		);
	}
}
Planets.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	id: PropTypes.number,
	type: PropTypes.string
};
