<template>
  <div>
    <SectionIntroduction />
    <SectionProjects />
    <SectionTools />
    <SectionContact />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Neftali Aguilar - Full Stack Developer'
})
useSeoMeta({
  title: 'Neftali Aguilar - Full Stack Developer',
  ogTitle: 'Neftali Aguilar - Full Stack Developer',
  description: 'Hi, I am Neftali Aguilar. I develop projects with Vue, Nuxt and Laravel. By the way, I am located at Puerto Vallartta, Mexico',
  ogDescription: 'Hi, I am Neftali Aguilar. I develop projects with Vue, Nuxt and Laravel. By the way, I am located at Puerto Vallartta, Mexico',
  ogImage: 'https://media.licdn.com/dms/image/C4E03AQEyqKiLAcfY9g/profile-displayphoto-shrink_100_100/0/1629429786757?e=1693440000&v=beta&t=alvLLPFw_nud0G_5Eopq-m7_XeUlrTOKNm6XflOcG48',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.input {
  @apply border border-slate-100 bg-transparent p-5 max-w-full w-96
}

.label {
  @apply mt-5 mb-2 block text-xl
}

[data-message-type="validation"] {
  @apply text-red-500
}

button.formkit-input {
  @apply bg-white px-5 py-2 rounded-md text-black mt-5
}
</style>