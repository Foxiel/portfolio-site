<script>
    import { t, locale } from 'svelte-i18n';

    let { currentPage  = $bindable() } = $props();
</script>

<header class="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-6">
        <nav class="w-full" aria-label="Hoofdnavigatie">
            <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-1 md:gap-4">
                    <button
                        onclick={() => currentPage = 'home'}
                        class="px-1 py-2 text-lg font-medium transition-colors hover:text-white md:px-2 md:text-xl"
                        class:text-white={currentPage === 'home'}
                        class:text-zinc-400={currentPage !== 'home'}
                    >
                        {$t('nav.home')}
                    </button>
                    <button
                        onclick={() => currentPage = 'projects'}
                        class="px-1 py-2 text-lg font-medium transition-colors hover:text-white md:px-2 md:text-xl"
                        class:text-white={currentPage === 'projects'}
                        class:text-zinc-400={currentPage !== 'projects'}
                    >
                        {$t('nav.projects')}
                    </button>
                    <button
                        onclick={() => currentPage = 'changes'}
                        class="px-1 py-2 text-lg font-medium transition-colors hover:text-white md:px-2 md:text-xl"
                        class:text-white={currentPage === 'changes'}
                        class:text-zinc-400={currentPage !== 'changes'}
                    >
                        {$t('nav.changes')}
                    </button>
                    <button
                        onclick={() => currentPage = 'contact'}
                        class="px-1 py-2 text-lg font-medium transition-colors hover:text-white md:px-2 md:text-xl"
                        class:text-white={currentPage === 'contact'}
                        class:text-zinc-400={currentPage !== 'contact'}
                    >
                        {$t('nav.contact')}
                    </button>
                </div>

                <select
                    bind:value={$locale}
                    class="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 font-medium text-zinc-300"
                >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                    <option value="nl">NL</option>
                </select>
            </div>
        </nav>
    </div>
</header>