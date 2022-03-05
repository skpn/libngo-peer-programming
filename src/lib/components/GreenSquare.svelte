<script>
	import { clickCount } from '$lib/utils/stores/clickCountStore';
  console.log("clickCount:", clickCount)
</script>

<div class="greenSquare" on:click|stopPropagation={() => ($clickCount += 1)}>
	{$clickCount}
	green square
</div>

<style>
	.greenSquare {
		height: 4rem;
		width: 4rem;
		background-color: green;
		color: white;
	}
</style>
