<script>
  import Navbar from './lib/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import Contact from './pages/Contact.svelte';
  import Projects from './pages/Projects.svelte';

  let currentPage = $state('home');
</script>

<div class="min-h-screen bg-zinc-950 text-white flex flex-col">
  <Navbar bind:currentPage />

  <main class="flex-grow p-6">
    {#if currentPage === 'home'}
      <Home />
    {:else if currentPage === 'projects'}
      <Projects />
    {:else if currentPage === 'contact'}
      <Contact />
    {/if}
  </main>
</div>