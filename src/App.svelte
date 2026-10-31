<script>
  import Navbar from "./lib/Navbar.svelte";
  import { t, isLoading } from "svelte-i18n";
</script>

<Navbar />


{#if $isLoading}
  <p>Loading...</p>
{:else}
  <header class="p-8 text-center">
    <h1 class="text-3xl font-bold">{$t('hero.title')}</h1>
  </header>
  {/if}