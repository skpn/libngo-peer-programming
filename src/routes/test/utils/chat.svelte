<script>
	//import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let div;
	let autoscroll;

	beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

	const listeMessages =  [
    { id: 0, text: `Bonjour` },
	{ id: 1, text: `Que puis-je pour vous?` },
	{ id: 2, text: `Etes vous certain de votre choix?` },
	{ id: 3, text: `Les oiseaux volent` },
    { id: 4, text: `Tant va la cruche à l'eau qu'a la fin elle se brise` },
	{ id: 5, text: `Que dire...` },
	{ id: 6, text: `J''atteind les limites de ma conversation` },
	{ id: 7, text: `Un tient vaut mieux que 2 tu l'auras` },
	{ id: 8, text: `Si vis pacem, para bellum` },
	{ id: 9, text: `carpe diem ou carpe Koï` },
	{ id: 10, text: `Goldorak GO` },
	{ id: 11, text: `LibNGo va vous simplifier la vie alors  n'hésitez pas à adhérer` },
	{ id: 12, text: `Il est pas l'heure de prendre un apéritif?` }
	];

    let comments = [{ author: 'Robot limité', text: listeMessages[0].text }];

	function handleKeydown(event) {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			comments = comments.concat({
				author: 'user',
				text
			});

			event.target.value = '';

			const reply = listeMessages[1+Math.round(Math.random() * 11)].text;
           
			setTimeout(() => {
				comments = comments.concat({
					author: 'Robot limité',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					comments = comments.filter(comment => !comment.placeholder).concat({
						author: 'Robot limité',
						text: reply
					});
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
	}
</script>

<div class="chat">
	<h1>Robot limité</h1>

	<div class="scrollable" bind:this={div}>
		{#each comments as comment}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>

	<input on:keydown={handleKeydown}>
</div>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		max-width: 320px;
	}

	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}

	article {
		margin: 0.5em 0;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}

	.eliza span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
	}

	.user span {
		background-color: #0074D9;
		color: white;
		border-radius: 1em 1em 0 1em;
	}
</style>
