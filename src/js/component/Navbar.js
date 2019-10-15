import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		};
	}

	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-3">
				<div className="dropdown ">
					<button
						onClick={() => {
							this.setState({ show: !this.state.show });
						}}
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown button
					</button>
					<div
						className={"dropdown-menu" + (this.state.show ? "show" : "")}
						aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>

				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
			</nav>
		);
	}
}
