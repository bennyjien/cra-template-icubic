import React from 'react';
import HomePage from './pages/home.page';
import logo from './assets/images/logo-react.svg';
import './styles/app.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
				<div className="app-header-inner">
					<img src={logo} className="logo" alt="React Logo" />
				</div>
      </header>
			<main className="app-main">
				<div className="app-main-inner">
					<HomePage />
				</div>
			</main>
			<footer className="app-footer">
				<div className="app-footer-inner">
					<p><small>Copyright &copy; {new Date().getFullYear()}. Design and code by <a href="//icubic.co.id">ICUBIC</a></small>.</p>
				</div>
			</footer>
    </div>
  );
}

export default App;
