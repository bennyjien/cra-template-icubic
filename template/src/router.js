import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop.component';
import NotFound from './pages/notFound.page';

const Router = () => (
	<BrowserRouter>
		<ScrollToTop/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
)

export default Router;
