<script>
	import BlueSquare from '$lib/components/BlueSquare.svelte';
	import RedSquare from '$lib/components/RedSquare.svelte';

	let myArray = [1, 2, 3, 4, 5, 6];

	let forceGreen = true;
</script>

<p>sveltekit test new route</p>

<BlueSquare />
<RedSquare /> 

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
