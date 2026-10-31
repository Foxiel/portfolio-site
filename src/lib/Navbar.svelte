<script>
    import { t, locale } from 'svelte-i18n';

    let { currentPage  = $bindable() } = $props();
</script>

<header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="/" class="flex items-center gap-2 group cursor-pointer">
            Foxie portfolio
        </a>

        <nav class="flex items-center justify-between p-4">
            <div class="space-x-6">
                <button onclick={() => currentPage = 'home'} class="hover:text-zinc-400">Home</button>
                <button onclick={() => currentPage = 'projects'} class="hover:text-zinc-400">{$t('nav.projects')}</button>
                <button onclick={() => currentPage = 'contact'} class="hover:text-zinc-400">{$t('nav.contact')}</button>
            </div>

            <div class="flex gap-2">
                <button onclick={() => locale.set('en')} class="px-2 py-1 rounded bg-zinc-800 text-white">EN</button>
                <button onclick={() => locale.set('de')} class="px-2 py-1 rounded bg-zinc-800 text-white">DE</button>
                <button onclick={() => locale.set('nl')} class="px-2 py-1 rounded bg-zinc-800 text-white">NL</button>
            </div>
        </nav>
    </div>
</header>