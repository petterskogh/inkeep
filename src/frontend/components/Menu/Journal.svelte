<script lang='ts'>
  import Symbol from "./Symbol.svelte";
  import { activeJournal } from '../../stores/journals';
  import type { Color, Key, SymbolName } from "../../utils/types";
  import ShortcutWrapper from "../Shortcut/ShortcutWrapper.svelte";

  export let bgColor: Color;
  export let symbol: SymbolName;
  export let journal = ""; // File path of the journal
  export let shortcutKey: Key;

  function setActiveJournal() {
    activeJournal.set(journal);
  }
</script>

<ShortcutWrapper shortcutKey="{shortcutKey}" on:press={ setActiveJournal }>
  <span class="journal" style="background-color: { bgColor };" on:click={ setActiveJournal }>
    <Symbol name={ symbol } />
  </span>
</ShortcutWrapper>

<style>
  .journal {
    height: 56px;
    width: 48px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>