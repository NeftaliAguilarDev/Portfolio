<template>
    <header class="container mx-auto flex flex-wrap shadow-sm px-10 py-5 bg-white sticky">
      <div class="w-8/12 md:w-4/12 my-auto">
        <span class="text-xl">Neftali Aguilar</span>
      </div>
      <div class="w-4/12 md:w-8/12 my-auto">
        <button class="border border-gray-400 px-3 py-2 rounded-md float-right block md:hidden">Menu</button>
        <nav class="hidden md:block">
          <ul class="flex space-x-5 justify-end">
            <li><NuxtLink class="text-sm" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="text-sm" to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink class="text-sm" to="/uses">Uses</NuxtLink></li>
            <li><NuxtLink class="text-sm" to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>