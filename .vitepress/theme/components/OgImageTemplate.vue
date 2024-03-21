<script setup lang="ts">
defineProps<{ title: string, description?: string, dir?: string}>();
</script>

<template>
  <div tw="w-full h-full bg-white flex flex-col"
    style="background:linear-gradient(45deg, rgb(245, 169, 184), rgb(91, 206, 250))">
    <div tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
      <div tw="w-full flex justify-between items-center text-4x1 font-medium">
        <div tw="flex items-center">
          <div tw="text-slate-900 ml-2 mt-1 font-semibold">
            Pys Blog
          </div>
        </div>
        <div v-if="dir" tw="flex items-center text-slate-600">
          <div v-if="dir" tw="text-4x1 font-semibold mr-2" v-html="dir" />
          <svg v-if="dir === 'Blog'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path></svg>
        </div>
      </div>
      <div tw="w-full pr-56 flex flex-col items-start justify-end">
        <div tw="text-6x1 font-bold text-slate-900" v-html="title" />
        <div v-if="description" tw="mt-2 text-4x1 text-slate-600" v-html="description" />
      </div>
    </div>
    <div tw="shrink-0 h-2 w-full flex" style="background-color: #8c222f"/>
  </div>
</template>