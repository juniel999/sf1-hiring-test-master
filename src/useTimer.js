import { useEffect, useState, useRef } from "react";

const useTimer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [timer, setTimer] = useState(0);

	const date = new Date(0);
	const timeRef = useRef();

	useEffect(() => {
		date.setSeconds(timer);
		setSeconds(date.getSeconds());
		setMinutes(date.getMinutes());
	}, [timer]);

	const start = () => {
		timeRef.current = setTimeout(function runTimer() {
			setTimer((time) => (time += 1));

			timeRef.current = setTimeout(runTimer, 1000);
		}, 1000);
	};
	const stop = () => {
		clearTimeout(timeRef.current);
	};
	const reset = () => {
		stop();
		setTimer(0);
	};

	return { seconds, minutes, start, stop, reset };
};

export default useTimer;
