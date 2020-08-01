<script lang="ts">
  export let current: number = 0;
  export let icons: string[] = [];

  let oldItem = 0;
  let transitionDuration = 0;

  $: {
    transitionDuration = Math.abs(current - oldItem) * 0.1;
    oldItem = current;
  }

  $: clipPath =
    `${(100 / icons.length) * current}% 0%, ` +
    `${(100 / icons.length) * (current + 1)}% 0%, ` +
    `${(100 / icons.length) * (current + 1)}% 100%, ` +
    `${(100 / icons.length) * current}% 100%`;

  $: floatingStyle =
    `clip-path: polygon(${clipPath}); ` +
    `transition-duration: ${transitionDuration}s;`;
</script>

<style type="text/scss">
  nav {
    width: 100vw;
    height: 4em;
    margin: 0;
  }

  .bar {
    width: 100%;
    height: 4em;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
  }

  .section {
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .white-fg {
    background: black;

    .icon {
      fill: white;
    }
  }

  .black-fg {
    background: white;
    position: absolute;
    z-index: 10;
    transition: clip-path ease-in-out;
    pointer-events: none;

    .icon {
      fill: black;
    }
  }

  .icon {
    width: 3.5em;
  }
</style>

<nav>
  <div class="bar black-fg" style={floatingStyle}>
    {#each icons as icon}
      <div class="section">
        <svg class="icon" viewBox="0 0 512 512">
          <use xlink:href="#{icon}" />
        </svg>
      </div>
    {/each}
  </div>

  <div class="bar white-fg">
    {#each icons as icon, i}
      <div class="section" on:click={() => (current = i)}>
        <svg class="icon" viewBox="0 0 512 512">
          <use xlink:href="#{icon}" />
        </svg>
      </div>
    {/each}
  </div>
</nav>
