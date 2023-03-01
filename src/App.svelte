<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import FormPedido from './lib/FormPedido.svelte';
</script>

<main>
  <FormPedido />
</main>

<style>

  main {
    min-width: 100vw;
    min-height: 100vh;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
</style>