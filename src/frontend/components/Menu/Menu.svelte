<script lang='ts'>
  import Journal from './Journal.svelte';
  import Symbol from './Symbol.svelte';
  import { journals as journalsStore } from '../../stores/journals';
  import ShortcutWrapper from "../Shortcut/ShortcutWrapper.svelte";

  let journals: string[] = [];
  journalsStore.subscribe(journalFileNames => journals = journalFileNames);
</script>

<div class="menu">
  <span class="upper-section">
    {#each journals as journal, i}
      <ShortcutWrapper shortcutKey={ (i + 1).toString() }>
        <Journal bgColor="var(--accent-color-{ i + 1 })" symbol="circles" journal={ journal } />  
      </ShortcutWrapper>
    {/each}
  </span>
  <span class="bottom-section">
    <Symbol name="calendar" />
    <Symbol name="settings" />
  </span>
</div>

<style>
  .menu {
    padding: 16px;
    background-color: var(--bg-color-layer2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .upper-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>

