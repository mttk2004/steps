/*
 *  Project: steps
 *  File: index.jsx
 *  Created: 3:37 CH, 21/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import React from 'react';
import ReactDOM from 'react-dom/client'
import App      from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>
)
