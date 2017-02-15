import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignInSection from './Components/SignInSection.js';
import SearchBarSection from './Components/SearchBarSection.js';
import AdSection from './Components/AdSection.js';
import ViewItemsForSale from './Components/ViewItemsForSale.js';
import SellSomething from './Components/SellSomething.js';

class App extends Component {
  render() {
    return (
		<div className="App">
			<div className='col-xs-12'>
				<SignInSection />
			</div>

			<div className='col-xs-12 margin-above'>
				<SearchBarSection />
			</div>

			<div className='col-xs-12'>
				<AdSection />
			</div>

			<div className='col-xs-12'>
				<div className='col-xs-6'>
					<ViewItemsForSale />
				</div>
				<div className='col-xs-6'>
					<SellSomething />
				</div>
			</div>
		</div>
    );
  }
}

export default App;
