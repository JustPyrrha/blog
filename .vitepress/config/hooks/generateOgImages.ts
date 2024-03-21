import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from "node:url";
import {createContentLoader} from "vitepress";
import type {ContentData, SiteConfig} from "vitepress";
import {type SatoriOptions, satoriVue} from "x-satori/vue";
import {renderAsync} from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __fonts = resolve(__dirname, '../../fonts');

async function generateOgImages(config: SiteConfig) {
    const pages = await createContentLoader('**/*.md', {excerpt: true}).load()
    const template = await readFile(resolve(__dirname, '../../theme/components/OgImageTemplate.vue'), 'utf-8');

    const fonts: SatoriOptions['fonts'] = [
        {
            name: 'NotoSans',
            data: await readFile(resolve(__fonts, 'NotoSans-Regular.ttf')),
            weight: 400,
            style: 'normal'
        },
        {
            name: 'NotoSans',
            data: await readFile(resolve(__fonts, 'NotoSans-Medium.ttf')),
            weight: 500,
            style: 'normal'
        },
        {
            name: 'NotoSans',
            data: await readFile(resolve(__fonts, 'NotoSans-SemiBold.ttf')),
            weight: 600,
            style: 'normal'
        },
        {
            name: 'NotoSans',
            data: await readFile(resolve(__fonts, 'NotoSans-Bold.ttf')),
            weight: 700,
            style: 'normal'
        }
    ]

    const filteredPages = pages.filter(p => p.frontmatter.image === undefined);

    for (const page of filteredPages) {
        await generateImage({
            page,
            template,
            outDir: config.outDir,
            fonts,
        })
    }
}

export default generateOgImages

interface GenerateImageOptions {
    page: ContentData,
    template: string,
    outDir: string,
    fonts: SatoriOptions['fonts']
}

function getDir(url: string): string | undefined {
    if (url.startsWith('/blog/'))
        return 'Blog';

    return undefined;
}

async function generateImage({page, template, outDir, fonts}: GenerateImageOptions) {
    const {frontmatter, url} = page;

    const options: SatoriOptions = {
        width: 1200,
        height: 628,
        fonts,
        props: {
            title:
                frontmatter.layout === 'home'
                    ? frontmatter.hero.name ?? frontmatter.title
                    : frontmatter.customMEtaTitle ?? frontmatter.title,
            description:
                frontmatter.layout === 'home'
                    ? frontmatter.hero.tagline ?? frontmatter.description
                    : frontmatter.description,
            dir: getDir(url)
        }
    };

    const svg = await satoriVue(options, template);
    const render = await renderAsync(svg, {
       fitTo: {
           mode: 'width',
           value: 1200
       }
    });

    const outputFolder = resolve(outDir, url.substring(1).replace('index.html', '').replace('.html', ''), '__og_image__');
    const outputFile = resolve(outputFolder, 'og.png');

    await mkdir(outputFolder, {recursive: true});

    return await writeFile(outputFile, render.asPng());
}