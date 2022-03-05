<script>
	import BlueSquare from '$lib/components/BlueSquare.svelte';
	import RedSquare from '$lib/components/RedSquare.svelte';

	// function coucou() {
	//   alert('coucou')
	// }

	// const coucou = () => {
	//   alert('coucou')
	// }

	let myArray = [1, 2, 3, 4, 5, 6];

	let forceGreen = true;
</script>

<p>sveltekit index route</p>

<!-- <a href='https://www.google.com'>lien google</a>

<BlueSquare />
<RedSquare /> -->

<!-- {#await myPromise}
	<p>Chargement</p>
{:then promiseResult}
	<p>{JSON.stringify(promiseResult)}</p>
{/await} -->

{#each myArray as elem, index}
	<p
		class="bold"
		class:red={index < myArray.length / 2}
		class:blue={index > myArray.length - 2}
		class:green={forceGreen}
	>
		index: {index} - value: {elem}
	</p>
{/each}

<style>
	.bold {
		font-weight: bold;
	}
	.red {
		color: red;
	}

	.blue {
		color: blue;
	}

	.green {
		color: green;
	}
</style>
