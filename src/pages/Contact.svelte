<script>
    import {t} from 'svelte-i18n';
    import emailIcon from '../assets/icons/email.svg';
    import githubIcon from '../assets/icons/github.svg';
    import linkedinIcon from '../assets/icons/linkedin.svg';
</script>

<header class="p-8 text-center">
    <h1 class="text-4xl font-bold">{$t('contact.title')}</h1>
</header>
<section>
    <div class="mx-auto flex w-full max-w-md flex-col items-center gap-8">
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl" href="mailto:fabianverhagen2011@gmail.com"
               target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" style:filter="invert(100%)" class="w-16 h-16"/>
                E-mail
            </a>
        </div>
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl" href="https://github.com/Foxiel" target="_blank"
               rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" style:filter="invert(100%)" class="w-16 h-16"/>
                Github
            </a>
        </div>
        <div class="flex w-full justify-center">
            <a class="flex items-center justify-center gap-2 text-3xl"
               href="https://www.linkedin.com/in/fabian-verhagen/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" style:filter="invert(100%)" class="w-16 h-16"/>
                LinkedIn
            </a>
        </div>
    </div>
</section>