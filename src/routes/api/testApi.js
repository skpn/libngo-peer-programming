export async function post(request) {
	console.log('in server post endpoint');
}

export async function get(request) {
	console.log('in server endpoint');
	return { code: 200 };
}
