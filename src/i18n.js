import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));
register('nl', () => import('./locales/nl.json'));

const supportedLocales = ['en', 'de', 'nl'];
const navigatorLocale = getLocaleFromNavigator()?.toLowerCase().split(/[-_]/)[0];
const initialLocale = supportedLocales.includes(navigatorLocale) ? navigatorLocale : 'en';

init({
    fallbackLocale: 'en',
    initialLocale,
});