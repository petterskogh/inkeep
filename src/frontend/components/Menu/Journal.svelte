<script lang='ts'>
  import Symbol from "./Symbol.svelte";
  import { activeJournal } from '../../stores/journals';
  import type { Color, SymbolName } from "../../utils/types";

  export let bgColor: Color;
  export let symbol: SymbolName;
  export let journal = ""; // File path of the journal
</script>

<span class="journal" style="background-color: { bgColor };" on:click={ () => activeJournal.set(journal) }>
  <Symbol name={ symbol } />
</span>

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