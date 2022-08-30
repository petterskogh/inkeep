<script lang='ts'>
  import Journal from './Journal.svelte';
  import Symbol from './Symbol.svelte';
  import { journals as journalStore } from '../../stores/journals';

  let journals: string[] = [];
  journalStore.subscribe(journalFileNames => journals = journalFileNames);
</script>

<div class="menu">
  <span class="upper-section">
    {#each journals as journal, i}
      <Journal shortcutKey={ `${i + 1}` } bgColor="var(--accent-color-{ i + 1 })" symbol="circles" journal={ journal } />
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

