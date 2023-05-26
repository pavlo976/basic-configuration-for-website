function debounce(callback, delay = 2000) {
	let timeoutDebounce;

	return (...args) => {
		clearTimeout(timeoutDebounce);

		timeoutDebounce = setTimeout(() => {
			callback(...args);
		}, delay);
	};
}

function throttle(callback, delay = 2000) {
	let shouldWait = false;
	let waitingArgs;

	const timeoutFunc = () => {
		setTimeout(() => {
			if (waitingArgs === null) {
				shouldWait = false;
			} else {
				callback(...waitingArgs);
				waitingArgs = null;
				setTimeout(timeoutFunc, delay);
			}
		});
	};

	return (...args) => {
		if (shouldWait) {
			waitingArgs = args;

			return;
		}

		// console.log(args);

		callback(...args);

		shouldWait = true;

		setTimeout(timeoutFunc, delay);
	};
}
