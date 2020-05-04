import React from 'react';
import HomePage from './pages/home.page';
import logo from './assets/images/logo-react.svg';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
				<div className="App-header-inner">
					<img src={logo} className="logo" alt="React Logo" />
				</div>
      </header>
			<main className="App-main">
				<div className="App-main-inner">
					<HomePage />
				</div>
			</main>
			<footer className="App-footer">
				<div className="App-footer-inner">
					<p><small>Copyright &copy; {new Date().getFullYear()}. Design and code by <a href="//icubic.co.id">ICUBIC</a></small>.</p>
				</div>
			</footer>
    </div>
  );
}

export default App;
