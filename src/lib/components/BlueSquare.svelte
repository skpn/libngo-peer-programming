
<script>
import GreenSquare from "./GreenSquare.svelte";
import { clickCount } from '$lib/utils/stores/clickCountStore';



</script>

<div class='blueSquare' on:click={() => $clickCount += 1}>
  {$clickCount}
  blue square
  <GreenSquare />
</div>

<style>
  .blueSquare {
    height: 10rem;
    width: 10rem;
    background-color: blue;
    color: white;
  }
</style>