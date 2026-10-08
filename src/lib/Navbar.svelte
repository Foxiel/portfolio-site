<script>
    let activeTab = $state('projecten');

    const navItems = [
        { id: 'projects', label: 'Projects' },
        { id: 'aboutme', label: 'About me' },
        { id: 'contact', label: 'Contact' },
    ];
</script>

<header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="/" class="flex items-center gap-2 group cursor-pointer">
            Foxie portfolio
        </a>

        <nav class="hidden sm:flex items-center gap-2">
            {#each navItems as item}
                <button class="px-4 py-2 rounded-xl text-sm font-medium transition duration-150 cursor-pointer border {activeTab === item.id
            ? 'bg-slate-900 text-orange-400 border-slate-700/80 shadow-inner'
            : 'text-slate-400 border-transparent hover:text-slate-100 hover:bg-slate-900/50'}"
                >
                    {item.label}
                </button>
            {/each}
        </nav>
    </div>
</header>