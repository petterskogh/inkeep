<script>
  export let shortcutKey = "?";

  let showShortcut = false;

  function onKeyDown(e) {
    switch (e.keyCode) {
      case 17:
        showShortcut = true;
        break;
    }
  }
  function onKeyUp(e) {
    switch (e.keyCode) {
      case 17:
        showShortcut = false;
        break;
    }
  }
</script>

<span class="wrapper">
  <slot></slot>
  <span class="key" style="display: { showShortcut ? 'initial' : 'none' }">{ shortcutKey }</span>
</span>

<svelte:window on:keydown|preventDefault={ onKeyDown } on:keyup|preventDefault={ onKeyUp } />

<style>
    .wrapper {
    position: relative;
  }

  .key {
    position: absolute;
    z-index: 1;
    font-size: 0.625rem;
    bottom: -8px;
    right: -8px;
    background-color: var(--bg-color-layer3);
    color: var(--foreground-color);
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>