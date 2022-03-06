<script>

	let myArray = [1, 2, 3, 4, 5, 6];

	let forceGreen = false;

    function changeForceGrenn() {
        if (forceGreen) {
	        forceGreen = false
        } else {
            forceGreen = true
        }
	}

</script>

<p>sveltekit subfolder route</p>

<p>ForceGreen = {forceGreen} <input type="button" name="changer forceGreen" value="Changer ForceGreen" on:click="{changeForceGrenn}"></p>
{#each myArray as elem, index}
	<p
		class="bold"
		class:red={elem < myArray.length / 2}
		class:blue={elem > myArray.length - 2}
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
