import { mount } from 'svelte'
import {waitLocale} from "svelte-i18n";
import './app.css'
import App from './App.svelte'
import './i18n.js'

waitLocale().then(() => {
  mount(App, {
    target: document.getElementById('app'),
  });
});
