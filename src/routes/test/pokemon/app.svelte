<!-- App.svelte -->
<script>

    // Récupération du composant
    import PokeList from './listepokemon.svelte'
    import PokeDetail from './detailPokemon.svelte'
    
    // La variable qui va stocker notre promesse
    const promise = getPokemons();
    const promise2 = getPokemonInfo();
    let pokemons = []
    let pokemonDetail = "quelquechose"
    // On initialise la variable qui va contenir le Pokémon choisi
    let selectedPokemon = null
  
    // La fonction qui va récupérer les Pokémons
    async function getPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const json = await res.json();
  
      return json.results;
    }

    async function getPokemonInfo() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
      const json = await res.json();
  
      return json.results;
    }
    
      const handlePokemonSelect = (event) => {
      // Les données spécifique envoyé dans l'évènement seront
      // dans la propriété `detail`
      alert(event)
      selectedPokemon = event.name
      
    }
  </script>

  <h1>Pokédex</h1>
  

  {#await promise}
    Chargement du Pokédex
  {:then pokemons}
    <PokeList pokemons={pokemons} on:pokemonSelect="{handlePokemonSelect}" />
    <!-- Le nom du Pokémon sélectionné est affiché -->
    {#if selectedPokemon}
        {selectedPokemon}
    {:else}
        Sélectionnez un Pokémon
    {/if}
  {:catch error}
    Une erreur s'est produite : {error.message}
  {/await}

  <br>

  Debut promise2
  {#await promise2}
  Chargement du Détail du pokémon
  {:then pokemonDetail}
  <br>await then
  <PokeDetail pokemonDetail={pokemonDetail} />
  {/await}
  <br>Fin promise2
 