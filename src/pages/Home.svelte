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

<div class="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
    <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <section>
            <h1 class="text-4xl font-bold mb-4 text-white">{$t('home.greeting')}</h1>
            <p class="text-zinc-400 text-lg leading-relaxed mb-8">
                {$t('home.bio')}
            </p>

            <h2 class="text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-4">
                {$t('home.interests_title')}
            </h2>

            <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
          {$t('home.interest_1')}
        </span>
                <span class="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
          {$t('home.interest_2')}
        </span>
                <span class="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
          {$t('home.interest_3')}
        </span>
                <span class="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
          {$t('home.interest_4')}
        </span>
            </div>
        </section>

        <section class="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/80">
            <h2 class="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-4">
                {$t('home.used_technologies')}
            </h2>

            <div class="flex flex-wrap gap-2">
                {#each usedTechnologies as tech}
          <span class="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-700/60 text-sm text-zinc-200 font-medium">
            {tech}
          </span>
                {/each}
            </div>
        </section>

    </div>
</div>