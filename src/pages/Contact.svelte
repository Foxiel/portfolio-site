<script>
    import {t} from 'svelte-i18n';
</script>

<header class="p-8 text-center">
    <h1 class="text-4xl font-bold">{$t('contact.title')}</h1>
</header>
<section>
    <div class="mx-auto flex w-full max-w-md flex-col items-center gap-8">
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl" href="mailto:fabianverhagen2011@gmail.com"
               target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/icons/email.svg" alt="Email" style:filter="invert(100%)" class="w-16 h-16"/>
                E-mail
            </a>
        </div>
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl" href="https://github.com/Foxiel" target="_blank"
               rel="noopener noreferrer">
                <img src="/src/assets/icons/github.svg" alt="GitHub" style:filter="invert(100%)" class="w-16 h-16"/>
                Github
            </a>
        </div>
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl"
               href="https://www.linkedin.com/in/fabian-verhagen-0b1b4b1b9/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn" style:filter="invert(100%)" class="w-16 h-16"/>
                LinkedIn
            </a>
        </div>
    </div>
</section>