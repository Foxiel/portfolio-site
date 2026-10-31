<script>
  import Navbar from "./lib/Navbar.svelte";
  import { t } from "svelte-i18n";
</script>

<Navbar />

<section id="center">
  <header class="p-8 text-center">
    <h1 class="text-3xl font-bold">{$t('hero.title')}</h1>
  </header>
</section>