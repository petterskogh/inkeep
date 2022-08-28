<script lang="ts">
  import Menu from "./components/Menu/Menu.svelte";
  import TextArea from "./components/TextArea/TextArea.svelte";
  import setup from "./scripts/setup";
  setup();
</script>

<main>
  <Menu />
  <TextArea />
</main>

<style>
  main {
    background-color: var(--bg-color-layer1);
    color: var(--foreground-color-layer1);
    height: 100%;
		margin: 0 auto;
    display: flex;
	}
</style>