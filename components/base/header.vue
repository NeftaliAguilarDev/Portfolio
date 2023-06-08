<template>
  <div class="border-b bg-black sticky top-0">
    <header class="container mx-auto flex flex-wrap shadow-sm px-10 py-5 sticky text-white">
      <div class="w-8/12 md:w-4/12 my-auto">
        <span class="text-xl">Neftali Aguilar</span>
      </div>
      <div class="w-4/12 md:w-8/12 my-auto">
        <nav>
          <ul class="flex space-x-5 justify-end">
            <li>
              <NuxtLink class="text-sm" to="/">Home </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-sm" to="/uses">Uses</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>