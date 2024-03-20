<script setup lang="ts">
import {useData} from 'vitepress';
const {frontmatter, title} = useData();
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="JustPyrrha/blog"
      data-repo-id="R_kgDOLi8hlQ"
      data-category="Comments"
      data-category-id="DIC_kwDOLi8hlc4CeGbG"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="transparent_dark"
      data-lang="en"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>