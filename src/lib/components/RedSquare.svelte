<script>
	import { clickCount } from '$lib/utils/stores/clickCountStore';
</script>

<div class="redSquare" on:click={() => ($clickCount += 1)}>
	{$clickCount}
	red square
</div>

<style>
	.redSquare {
		height: 10rem;
		width: 10rem;
		background-color: red;
		color: white;
	}
</style>
