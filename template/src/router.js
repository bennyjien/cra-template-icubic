import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop.component';
import Home from './pages/home.page';
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
