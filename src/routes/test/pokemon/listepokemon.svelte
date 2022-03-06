<!-- listepokemon.svelte -->
<script>
    // import de la fonction createEventDispatcher qui va nous permettre
    // d'envoyer l'évènement
    import { createEventDispatcher } from 'svelte';
  
    export let pokemons = []
  
    const handlePokemonClick = (element) => {
      // L'évènement `pokemonSelect` est envoyé avec les informations
      //alert(element.name);
      dispatch('selectedPokemon', element.name)
    }
  </script>

Liste SVELTE des pokemons 

  <ul>
    {#each pokemons as pokemon}
    <li>
       <button on:click="{() => handlePokemonClick(pokemon)}" >
        {pokemon.name}
        </button>
        <a href="{pokemon.url}" target="_blank">{pokemon.name}</a>
    </li>
    {/each}
  </ul>