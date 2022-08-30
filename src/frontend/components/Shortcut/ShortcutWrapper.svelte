<script lang="ts">
  import type { Key } from "../../utils/types";
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let shortcutKey: Key;
  let showShortcut = false;

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Control') {
      showShortcut = true;
      e.preventDefault();
    }
  }

  function onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Control') {
      showShortcut = false;
      e.preventDefault();
    }
    if(showShortcut && e.key === shortcutKey) {
      dispatch('press');
      e.preventDefault();
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