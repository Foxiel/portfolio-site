<script>
    import { t } from 'svelte-i18n';

    const usedTechnologies = [
        'C#',
        'Kotlin',
        'Python',
        'Svelte',
        'React',
        'Tailwind CSS',
        'Flutter / Dart',
        'SQL',
        'Unity',
        'Godot',
        'Docker',
        'Podman',
        'Git',
        'Linux'
    ];
</script>

<div class="flex justify-center min-h-[80vh] px-4 py-12">
    <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <section>
            <h1 class="text-4xl font-bold mb-4 text-white">{$t('home.greeting')}</h1>
            <p class="text-zinc-300 text-3xl leading-relaxed">
                {$t('home.bio')}
            </p>
        </section>

        <section class="space-y-10">
            <div>
                <h2 class="text-2xl font-bold text-zinc-200 mb-4">
                    {$t('home.interests_title')}
                </h2>

                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xl text-zinc-300">
                        {$t('home.interest_1')}
                    </span>
                    <span class="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xl text-zinc-300">
                        {$t('home.interest_2')}
                    </span>
                    <span class="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xl text-zinc-300">
                        {$t('home.interest_3')}
                    </span>
                    <span class="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xl text-zinc-300">
                        {$t('home.interest_4')}
                    </span>
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold text-zinc-200 mb-4">
                    {$t('home.used_technologies')}
                </h2>

                <div class="flex flex-wrap gap-3">
                    {#each usedTechnologies as tech}
                        <span class="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xl text-zinc-300">
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        </section>
    </div>
</div>