<script>
	const profiles = [
		{
			picture: '/team/photo_damien.jpeg',
			name: 'Damien Ferrand',
			title: 'COO',
			description:
				'Le kinésithérapeute qui a tellement râlé lors de ses remplacements qu’il en est venu à prendre les choses en main par lui-même !',
			formation: 'IFMK Bordeaux'
		},
		{
			picture: '/team/photo_romain.jpeg',
			name: 'Romain Bouffartigue',
			title: 'CEO',
			description:
				'Le monsieur-chiffre qui peut tout calculer, passionné par les Excels et les start-ups (oui, chacun ses passions..)',
			formation: 'emlyon / Sciences-Po Lyon'
		},
		{
			picture: '/team/photo_simon.png',
			name: 'Simon Kpenou',
			title: 'CTO',
			description:
				'Le développeur qui répond aux caprices des deux autres (et aux vôtres), heureusement qu’il y en a un qui sait coder un site web !',
			formation: 'emlyon / 42'
		}
	];
</script>

<div class="teamBox">
	<div class="teamDiv ">
		<h1 class="color-main title titleFont">Notre Équipe</h1>
		<div class="upperPart box">
			{#each profiles as profile}
				<div class="cardTeam">
					<div class="imgContainer">
						<img src={profile.picture} alt={'photo equipe libngo - ' + profile.name} />
					</div>
					<h3 class="font-baseline noBreak">{profile.name}</h3>
					<h3 class="titleFontCategory titleMargin">{profile.title}</h3>
					<p class="txtFontCard description color-text">
						{profile.description}
					</p>
					<p class="txtFontCard formation color-text">{profile.formation}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="bandeau" />
	<div class="blocHistoire">
		<h1 class="color-main title titleFontCategory">Notre histoire</h1>
		<p class="strongText justify color-text">
			Lors du confinement de mars 2020, nous avons pris conscience que la situation des
			remplacements libéraux était problématique.. <br /> <br />
			Alors après vous avoir questionné sur vos habitudes, vos envies, vos difficultés, nous avons compris
			que ce n’était pas un constat isolé : près de 3 praticiens sur 10 ne sont jamais remplacés lors
			de leurs absences. <br />
			Et pour des remplacements courts, vous êtes près de 7 sur 10 ! <br />
			<br />
			Ce sont ces chiffres qui nous ont convaincu tous les trois de créer LibNGo : une plateforme moderne,
			facile d’utilisation et surtout qui correspond à votre quotidien. On en a profité pour saupoudrer
			tout ça d’un peu de technologie pour que vous gagniez encore plus de temps, et hop le tour est
			joué, LibNGo était là. On espère sincèrement que ça vous plaira ! <br /> <br />
			PS : si jamais vous avez des idées d’amélioration pour la plateforme, n’hésitez pas à nous contacter
			directement pour nous en faire part, nous sommes en recherche constante d’évolutions.
		</p>
	</div>
</div>

<style lang="scss">
	@import 'src/styles/scss/_main.scss';
	.teamBox {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(auto, 1fr); /*Hauteur des lignes*/
		grid-gap: 20px;
		width: 100%;
		height: 100%;
	}

	.teamDiv {
		grid-row: 1;
		grid-column: 1 / 13;
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-top: 5rem;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
	}

	.bandeau {
		grid-row: 2;
		grid-column: 1 / 13;
		background-image: url(/img/bandeauEquipe.png);
		background-repeat: no-repeat;
		width: 100%;
		height: 14rem;
	}

	.upperPart {
		width: 90%;
		justify-content: center;
		align-items: flex-start;
	}

	.description {
		text-align: justify;
		margin: 1rem;
	}

	.formation {
		margin-top: 0.2rem;
	}

	.imgContainer {
		height: 30vh;
		width: 30vh;
		padding: 0.5rem;
		margin: 0.5rem;
		border: 1px solid;
		border-radius: 100%;
		object-fit: cover;
		display: flex;
	}

	.cardTeam {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 1rem;
		width: 33%;
	}

	.box {
		display: flex;
		width: 90vw;
		justify-content: space-between;
	}

	h3 {
		margin: 0;
	}

	.noBreak {
		white-space: nowrap;
	}

	.title {
		align-items: center;
		text-align: center;
	}

	.titleMargin {
		margin-top: 0.5rem;
	}

	.blocHistoire {
		grid-row: 3;
		grid-column: 3 / 11;
		padding: 1rem 3.5rem;
		margin: 0 2rem;
		border-radius: 30px;
		box-shadow: 0 0px 15px #888888;
		-moz-box-shadow: 0 0px 15px #888888;
		-webkit-box-shadow: 0 0px 15px #888888;
		margin-bottom: 2%;
	}

	.justify {
		text-align: justify;
	}

	@media only screen and (max-width: 1051px) {
		.box {
			flex-direction: column;
			align-items: center;

			.imgContainer {
				height: 20vh;
				width: 20vh;
			}
		}

		.cardTeam {
			width: 90%;
		}

		.blocHistoire {
			grid-column: 1 / 13;
      margin: 0.5rem 1rem;
			padding: 1rem 1.2rem;
      // border: solid red;
		}
	}
</style>
