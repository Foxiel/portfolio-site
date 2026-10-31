<script>
    import { t, locale } from 'svelte-i18n';
</script>

<header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="/" class="flex items-center gap-2 group cursor-pointer">
            Foxie portfolio
        </a>

        <nav class="flex items-center justify-between p-4">
            <div class="space-x-6">
                <a href="#projects">{$t('nav.projects')}</a>
                <a href="#contact">{$t('nav.contact')}</a>
            </div>

            <div class="flex gap-2">
                <button onclick={() => locale.set('en')} class="px-2 py-1 rounded bg-zinc-800 text-white">EN</button>
                <button onclick={() => locale.set('de')} class="px-2 py-1 rounded bg-zinc-800 text-white">DE</button>
                <button onclick={() => locale.set('nl')} class="px-2 py-1 rounded bg-zinc-800 text-white">NL</button>
            </div>
        </nav>
    </div>
</header>