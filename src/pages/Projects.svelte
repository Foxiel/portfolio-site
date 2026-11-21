<script>
    import { t } from 'svelte-i18n';

    const projects = [
        {
            id: 'pawstamps',
            category: 'mobile',
            technologies: ['Flutter', 'Dart'],
            status: 'private'
        },
        {
            id: 'management',
            category: 'app',
            technologies: ['C#', '.NET MAUI', 'ASP.NET MVC', 'Razor Pages', 'SQL'],
            githubs: [
                {
                    label: 'Delivery',
                    url: 'https://github.com/Foxiel/delivery-management-systeem'
                },
                {
                    label: 'Admin',
                    url: 'https://github.com/Foxiel/admin-management-systeem'
                },
                {
                    label: 'Order',
                    url: 'https://github.com/Foxiel/order-management-systeem'
                }
            ]
        },
        {
            id: 'teamborder',
            category: 'game',
            technologies: ['Kotlin', 'PaperMC', 'Maven'],
            github: 'https://github.com/Foxiel/TeamBorder'
        },
        {
            id: 'staffgui',
            category: 'game',
            technologies: ['Kotlin', 'PaperMC', 'Maven'],
            github: 'https://github.com/Foxiel/Staff-GUI'
        },
        {
            id: 'todo',
            category: 'web',
            technologies: ['React', 'Firebase', 'Material UI'],
            status: 'private'
        },
        {
            id: 'datacopier',
            category: 'web',
            technologies: ['C#', 'ASP.NET MVC', 'SQL'],
            status: 'private'
        },
        {
            id: 'minesweeper',
            category: 'game',
            technologies: ['C#', 'Unity', 'Godot'],
            github: 'https://github.com/Foxiel/minesweeper'
        }
    ];
</script>

<div class="flex justify-center min-h-[80vh] px-4 py-12">
    <section class="w-full max-w-5xl">
        <header class="text-center">
            <h1 class="text-4xl font-bold text-white">{$t('projects.title')}</h1>
        </header>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            {#each projects as project, index}
                <article
                    class={`md:col-span-7 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'}`}
                >
                    <div class="flex items-center justify-between gap-4">

                        {#if project.status === 'private'}
                            <span class="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-400">
                                {$t('projects.private')}
                            </span>
                        {/if}
                    </div>

                    <h2 class="mt-4 text-3xl font-bold text-white">
                        {$t(`projects.items.${project.id}.title`)}
                    </h2>

                    <p class="mt-4 text-xl leading-relaxed text-zinc-300">
                        {$t(`projects.items.${project.id}.description`)}
                    </p>

                    <div class="mt-6 flex flex-wrap gap-3">
                        {#each project.technologies as technology}
                            <span class="rounded-md border border-zinc-700/60 bg-zinc-950 px-3 py-1.5 text-sm font-medium text-zinc-200">
                                {technology}
                            </span>
                        {/each}
                    </div>

                    {#if project.github || project.githubs}
                        <div class="mt-6 flex flex-wrap justify-center gap-3">
                            {#if project.github}
                                <a
                                    class="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/src/assets/icons/github.svg"
                                        alt=""
                                        class="size-5 invert"
                                        aria-hidden="true"
                                    />
                                    {$t('projects.view_code')}
                                </a>
                            {:else}
                                {#each project.githubs as github}
                                    <a
                                        class="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                                        href={github.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/src/assets/icons/github.svg"
                                            alt=""
                                            class="size-5 invert"
                                            aria-hidden="true"
                                        />
                                        {github.label}
                                    </a>
                                {/each}
                            {/if}
                        </div>
                    {/if}
                </article>
            {/each}
        </div>
    </section>
</div>