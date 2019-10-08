import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Pagina } from "./component/Pagina";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/footer";
import { People } from "./component/People";
import { Planets } from "./component/Planets";
import { Datails } from "./component/Datails";
//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Pagina} />
						<Route path="/Planets" component={Planets} />
						<Route path="/Datails" component={Datails} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
