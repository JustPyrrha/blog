import {defineConfig, loadEnv} from 'vitepress';

import headConfig from "./config/headConfig";
import generateOgImages from "./config/hooks/generateOgImages"
import generateMeta from "./config/hooks/generateMeta";

const env = loadEnv('', process.cwd());
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:5173';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Py's Blog",
    description: "Just a transbian on the internet.",
    lang: "en-NZ",
    head: headConfig,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Blog', link: '/blog/a-blog-appears'}
        ],

        sidebar: [
            {
                text: 'Posts',
                items: [
                    {text: 'A blog appears!', link: '/blog/a-blog-appears'},
                ]
            }
        ],

        socialLinks: [
            {
                icon: {svg: '<svg role="img" width="568" height="501" viewBox="0 0 568 501" xmlns="http://www.w3.org/2000/svg"><path d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"/></svg>'},
                link: 'https://bsky.app/profile/pyrrha.gay',
                ariaLabel: 'Bluesky'
            },
            {icon: 'twitter', link: 'https://twitter.com/JustPyrrha', ariaLabel: 'Twitter (X)'},
            {icon: 'github', link: 'https://github.com/JustPyrrha', ariaLabel: 'GitHub'},
            {icon: 'linkedin', link: 'https://linkedin.com/in/pyrrha-wills', ariaLabel: 'Linkedin'}
        ]
    },
    rewrites: {
        'blog/': 'blog/a-blog-appears.md'
    },
    lastUpdated: true,
    transformHead: async context => generateMeta(context, hostname),
    buildEnd: async (context) => {
        await generateOgImages(context)
    }
})
