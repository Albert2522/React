import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const clock = document.getElementById("clock");
	ReactDOM.render(<Tabs/>, root);
	ReactDOM.render(<Clock/>, clock);
	ReactDOM.render(<Weather/>, weather);
});
