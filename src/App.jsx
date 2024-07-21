/*
 *  Project: steps
 *  File: App.jsx
 *  Created: 3:39 CH, 21/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useState } from 'react';


const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [step, setStep] = useState(1)
	
	const buttonsStyle = {
		color: '#fff',
		backgroundColor: '#7950f2'
	}
	
	const handlerPrevious = function() {
		if (step > 1) setStep(step - 1)
	}
	
	const handlerNext = function() {
		if (step < 3) setStep(step + 1)
	}
	
	return <div className="steps">
		<div className="numbers">
			<div className={step >= 1 ? 'active' : ''}>1</div>
			<div className={step >= 2 ? 'active' : ''}>2</div>
			<div className={step >= 3 ? 'active' : ''}>3</div>
		</div>
		
		<p className="message">Step {step}: {messages[step-1]}</p>
		
		<div className="buttons">
			<button style={buttonsStyle} onClick={handlerPrevious}>Previous</button>
			<button style={buttonsStyle} onClick={handlerNext}>Next</button>
		</div>
	</div>;
}
