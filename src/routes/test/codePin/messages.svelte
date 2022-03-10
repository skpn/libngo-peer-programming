<script>
    import { trad, tradForcerDE, tradForcerEN, tradForcerFR, tradForcerIT} from '../../../store.js'
    let choixLangue;
    let messageAffiche='';

    function getMessageLangue(idPar) {
        if (choixLangue == 'fr') {
           messageAffiche = $tradForcerFR[idPar];
        } else  if (choixLangue == 'de') {
            messageAffiche = $tradForcerDE[idPar];
        } else  if (choixLangue == 'it') {
            messageAffiche = $tradForcerIT[idPar];
        } else  if (choixLangue == 'en') {
            messageAffiche = $tradForcerEN[idPar];
        } else {
            messageAffiche = $trad[idPar];
        }
        messageAffiche = 'Rechercher -> ' + messageAffiche;
    }

</script>

 

<br><b>Recuperation des messages du fichier JSON <br></b>
<h1>Langue du navigateur : {$trad['MSG_ECRAN1_BOUTON_AFFICHER']}&nbsp;/&nbsp;{$trad['MSG_ECRAN1_BOUTON_RECHERCHER']}</h1>

<form>
    Dans quel langue voulez vous traduire 'Rechercher' : <select bind:value={choixLangue} on:change="{() => getMessageLangue('MSG_ECRAN1_BOUTON_RECHERCHER')}">
        <option value=''></option>
		<option value='fr'>Francais</option>
        <option value='de'>Allemand</option>
        <option value='en'>Anglais</option>
        <option value='it'>Italien</option>
	</select>
    <if messageAffiche >
    <h1>{messageAffiche}</h1>
    </if>
</form>
