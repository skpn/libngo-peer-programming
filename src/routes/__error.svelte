<script context="module">
	export async function load({ error, status }) {
		return { props: { error, status } };
	}
</script>

<script>
	export let error;
	export let status;

	const isDev = import.meta.env.DEV;
</script>

<div class="errorBox margin-auto flex-column">
	<h1>{status}</h1>

	<p>{error.message}</p>

	{#if isDev && error.stack}
		<pre>{JSON.stringify(error.stack, null, 4)}</pre>
	{/if}
</div>

<style lang="scss">
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
	}

	p {
		margin: 1rem auto;
	}

	pre {
		white-space: break-spaces;
	}

	.errorBox {
		width: 60%;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4rem;
		}
	}
</style>
