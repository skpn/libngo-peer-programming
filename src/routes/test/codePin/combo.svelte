<script>
    // import de la fonction createEventDispatcher qui va nous permettre
    // d'envoyer l'évènement
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let lstOptions = [
    { id: 0, text: `` },
	{ id: 1, text: `KeyPad - Saisie d'un code PIN` },
	{ id: 2, text: `Pokemon` },
    { id: 7, text: `Chat avec le robot limité` },
	{ id: 3, text: `Index` },
    { id: 4, text: `Index New Route` },
	{ id: 5, text: `Fenêtre Modal` },
	{ id: 6, text: `SubFolderRoute` }
	];

    let selected;

    const handleComboChange = (element) => {
      // L'évènement `comboSelect` est envoyé avec les informations
      dispatch('comboSelect', element)
    }
   
</script>

 
<form>
Choisir la fonctionnalité :	<select bind:value={selected} on:change="{() => handleComboChange(selected)}" >
		{#each lstOptions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
</form>
