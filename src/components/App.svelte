<script lang="ts">
  import Bar from "./Bar.svelte";
  import { save } from "../utils";

  const currentTab = save("barCurrent", 0);
  const barIcons = ["telescope", "results", "results"];

  // TABS

  const tabs = [];

  // TODO: attribute svg
  /* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */
  // TODO: favicon, service worker
  // TODO: accessibility
</script>

<style type="text/scss">
  /* @media (min-width: 640px) { */
  /* main { */
  /* max-width: none; */
  /* } */
  /* } */
</style>

<main>
  <Bar bind:current={$currentTab} icons={barIcons} />
</main>
