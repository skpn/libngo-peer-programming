<script>
	export let pokemon
	let promise

  // Le $: permet l'appel de la fonction lorsque la variable pokemon est modifiée
	$: promise = getPokemon(pokemon.url)
	
	async function getPokemon(url) {
		const res = await fetch(pokemon.url);
		return await res.json();
	}
</script>

  {#await promise}
    Chargement de {pokemon.name}…
  {:then pokemonDetails}
    <h2>{pokemonDetails.name}<br>
    <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
    </h2>
  {:catch error}
    Une erreur s'est produite : {error.message}
  {/await}

  <style>
    h2 {
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
    }
  
  </style>