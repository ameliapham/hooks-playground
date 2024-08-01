

export function sleep(ms: number) {

	const aPromiseThatResolvesAfterMs = new Promise<void>(resolve => {

		setTimeout(()=> {
			resolve();
		}, ms);

	});

	return aPromiseThatResolvesAfterMs;

}