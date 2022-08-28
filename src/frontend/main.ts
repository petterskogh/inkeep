import "svelte";
import setup from "./scripts/setup";
import App from "./App.svelte";

setup();
const app = new App({ target: document.body });

export default app;
