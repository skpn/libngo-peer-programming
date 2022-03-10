<script>
	import Keypad from './Keypad.svelte';
	import ComboSvelte from './combo.svelte';
	import Pokemon from '../pokemon/app.svelte';
	import IndexBase from '../../index.svelte';
	import IndexNewRoute from '../newRoute.svelte';
	import FenetreModal from '../utils/indexModal.svelte';
	import SubFolderRoute from '../subfolder/subFolderRoute.svelte';
	import RobotLimiteChat from '../utils/chat.svelte';
	import Messages from './messages.svelte';

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}

	let valeurCombo = 'Attente valeur';
	
	const handleComboSelect = (event) => {
      // Les données spécifique envoyé dans l'évènement seront
      // dans la propriété `detail`
      //alert(event.detail)
      valeurCombo = event.detail   
    }

</script>


<ComboSvelte on:comboSelect="{handleComboSelect}"/>
<br>
{valeurCombo.id > 0 ? 'Vous avez sélectionné : ' + valeurCombo.text: ''}
<br><br>

{#if valeurCombo.id === 1}
<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
<Keypad bind:value={pin} on:submit={handleSubmit}/>
{:else if valeurCombo.id === 2}
<Pokemon/>
{:else if valeurCombo.id === 3}
<IndexBase/>
{:else if valeurCombo.id === 4}
<IndexNewRoute/>
{:else if valeurCombo.id === 5}
<FenetreModal/>
{:else if valeurCombo.id === 6}
<SubFolderRoute/>
{:else if valeurCombo.id === 7}
<RobotLimiteChat/>
{:else if valeurCombo.id === 8}
<Messages/>
{/if}