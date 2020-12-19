import App from './App.svelte';

const root = document.querySelector("#root");

var app = new App({
  target: root,
  props: {}
});

export default app;