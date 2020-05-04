import React from 'react';
import '../styles/home.scss';

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="home-page-header">
				<h2>Welcome to Home Page!</h2>
			</div>
			<div className="home-page-content">
				<section className="section">
					<p>This is the start of your code journey.</p>
					<p>Edit <code>src/pages/home.page.js</code> and save to reload.</p>
					<a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
				</section>
			</div>
		</div>
	)
}

export default HomePage;
