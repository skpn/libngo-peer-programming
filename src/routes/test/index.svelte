<p>sveltekit test index route</p>

<button
	on:click={() =>
		fetch('/api/testApi', { method: 'POST', body: JSON.stringify({ data: 'test data string' }) })}
>
	test
</button>
