<script>
    import { t, locale } from 'svelte-i18n';

    let { currentPage  = $bindable() } = $props();
</script>

<header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-center">
        <nav class="flex items-center justify-between p-4">
            <div class="space-x-6">
                <button onclick={() => currentPage = 'home'} class="hover:text-zinc-400">{$t('nav.home')}</button>
                <button onclick={() => currentPage = 'projects'} class="hover:text-zinc-400">{$t('nav.projects')}</button>
                <button onclick={() => currentPage = 'changes'} class="hover:text-zinc-400">{$t('nav.changes')}</button>
                <button onclick={() => currentPage = 'contact'} class="hover:text-zinc-400">{$t('nav.contact')}</button>

                <select bind:value={$locale} class="px-2 py-1 rounded bg-zinc-800 text-white">
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="nl">NL</option>
                </select>
            </div>
        </nav>
    </div>
</header>