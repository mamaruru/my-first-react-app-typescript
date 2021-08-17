import React, { useEffect, useRef, useState} from 'react';



// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: number | ((prevState: number) => number))=> void;

// const array: Array<number> = [1, 2, 3];
// const readOnlyArray: ReadonlyArray<number? = [1, 2, 3];
// array[0] = 11;
// readOnlyArray[0] = 11; 

const Counter: React.FC<{}> = () => {
	const [value, setValue] = useState<number>(0);

	const increment = () => {
		setValue((prevState) => prevState + 1);
	};

	const decrement = () => {
		setValue((prevState) => prevState - 1);
	};

	const renderTimes = useRef<number>(0);
	useEffect(() => {
		renderTimes.current = renderTimes.current + 1;
	});
	const ref = useRef<HTMLInputElement>(null!);
	const focusInput  = () => {
		ref.current.focus();
	}


	return (
		<div>
			<div>value : {value}</div>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<div>This component was re-rendered {renderTimes.current}</div>
			<input ref={ref} type="text"></input>
			<button onClick={focusInput}>Click ME!</button>
		</div>
	)
};

export default Counter;
