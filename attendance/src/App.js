import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import formNew from './formNew';

class App extends Component {

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/formNew" component={formNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}