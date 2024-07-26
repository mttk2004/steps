/*
 *  Project: steps
 *  File: App.jsx
 *  Created: 3:39 CH, 21/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useState } from 'react';
import Button       from './Button.jsx';
import StepMessage  from './StepMessage.jsx';


const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

export default function App() {
	return <div>
		<Steps/>
		<Steps/>
	</div>
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);
	
	const handlerPrevious = function () {
		if (step > 1) setStep(step => step - 1);
	};
	
	const handlerNext = function () {
		if (step < 3) setStep(step => step + 1);
	};
	
	return <div>
		<button className="close" onClick={() => setIsOpen(isOpen => !isOpen)}>
			{isOpen ? <>&times;</> : <>&rarr;</>}
		</button>
		{isOpen &&
		 <div className="steps">
			 <div className="numbers">
				 <div className={step >= 1 ? 'active' : ''}>1</div>
				 <div className={step >= 2 ? 'active' : ''}>2</div>
				 <div className={step >= 3 ? 'active' : ''}>3</div>
			 </div>
			 
			 <StepMessage step={step}>{messages[step - 1]}</StepMessage>
			 
			 <div className="buttons">
				 <Button bgColor='#7950f2' textColor='#fff' onClick={handlerPrevious}>
					 <span>👈</span> Previous
				 </Button>
				 <Button bgColor='#7950f2' textColor='#fff' onClick={handlerNext}>
					 Next <span>👉</span>
				 </Button>
			 </div>
		 </div>
		}
	</div>;
}
