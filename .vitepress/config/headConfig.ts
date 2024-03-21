import type {HeadConfig} from "vitepress";

const headConfig: HeadConfig[] = [
    ['meta', {name: 'darkreader-lock'}],

    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],

    ['link', {rel: 'icon', type: 'image/png', href: '/icon.png'}],

    ['meta', {name: 'twitter:card', content: 'summary'}],
    ['meta', {name: 'twitter:site', content: '@JustPyrrha'}],
    ['meta', {name: 'twitter:creator', content: '@JustPyrrha'}],

    ['meta', {property: 'og:site_name', content: 'Py\'s Blog'}],
    ['meta', {property: 'og:description', content: 'Just a transbian on the internet.'}],
    ['meta', {property: 'og:locale', content: 'en_NZ'}],
    ['meta', {property: 'og:type', content: 'website'}]
];

export default headConfig;