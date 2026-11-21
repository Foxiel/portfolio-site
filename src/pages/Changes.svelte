<script>
    import { t } from 'svelte-i18n';
</script>

<div class="flex justify-center min-h-[80vh] px-4 py-12">
    <section class="w-full max-w-5xl">
        <header class="text-center">
            <h1 class="text-4xl font-bold text-white">{$t('changes.title')}</h1>
            <p class="mt-4 text-zinc-300 text-3xl leading-relaxed">
                {$t('changes.description')}
            </p>
        </header>

        <ul class="mt-12 space-y-6 w-fit mx-auto">
            {#each $t('changes.changes_list') as change}
                <li class="flex items-start gap-4 text-zinc-300 text-3xl">
                    <span
                        class="mt-1 size-5 shrink-0 rounded border border-zinc-600"
                        aria-hidden="true"
                    ></span>
                    <span>{change}</span>
                </li>
            {/each}
        </ul>
    </section>
</div>