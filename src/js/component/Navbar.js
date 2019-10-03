import React from "react";
export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="#!">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#!">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
