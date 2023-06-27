<template>
    <div class="bg-gradient-to-b from-black to-zinc-900">
        <section
            class="container mx-auto px-10 py-[15vh] flex flex-col items-center md:flex-row md:justify-center text-white">
            <div class="w-full text-center">
                <h1 class="text-3xl xl:text-6xl mb-2">Skills and Experience</h1>
                <h2>These are the skills I have knowledge</h2>
                <ul class="mt-10">
                    <li v-for="(skill, index) in skills" :key="index" class="mb-10">
                        <span class="block uppercase text-3xl mb-2"> {{ skill.level }}</span>
                        <ul>
                            <li v-for="tool in skill.tools" :key="tool" v-text="tool"
                                class="bg-gray-600 px-2 py-1 rounded-lg inline-block mr-2 my-2"></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

const skills = [
    {
        level: 'Expert',
        tools: ['Bootstrap', 'Tailwind', 'Wordpress',]
    },
    {
        level: 'Proficient',
        tools: ['Laravel', 'Vue', 'Inertia', 'Javascript', 'Git', 'UX/UI', 'Responsive design']
    },
    {
        level: 'Beginner - Proficient',
        tools: ['Nuxt', 'Typescript', 'GraphQl', 'Pinia', 'Formkit', 'AWS', 'Digital Ocean', 'SSH', 'SQL', 'Strapi', 'Figma', 'Adobe XD', 'Adobe Illustrator']
    }
]

</script>

<style scoped></style>