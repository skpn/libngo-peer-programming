<script>
	import PokeList from './listepokemon.svelte'
	import PokeDetails from './detailPokemon.svelte'
	
	const promise = getPokemons();
	let selectedPokemon = null

	async function getPokemons() {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon');
		const json = await res.json();
		
		return json.results;
	}

	const selectPokemon = ({ detail }) => {
		selectedPokemon = detail;
	}
</script>

<h1>
	Pokédex
</h1>

<div>
	{#await promise}
  	Chargement du Pokédex...
	{:then pokemons}
		<PokeList pokemons={pokemons} on:selectPokemon={selectPokemon}  />
		{#if selectedPokemon}
		<br>	<PokeDetails pokemon={selectedPokemon} />
		{:else}
			Sélectionnez un Pokémon
		{/if}
	{:catch error}
  	Une erreur s'est produite : {error.message}
	{/await}
</div>

<style>
	h1 {
		text-align: center;
	}
	div {
		display: flex;
	}
  
</style>