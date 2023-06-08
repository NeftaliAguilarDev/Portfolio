<template>
    <div class="bg-gradient-to-b from-black to-zinc-900">
        <section
            class="container mx-auto px-10 py-[15vh] flex flex-col items-center md:flex-row md:justify-center text-white">
            <div class="w-full text-center md:w-7/12 my-auto">
                <h1 class="text-3xl xl:text-6xl mb-2">Hi! I'm Neftali Aguilar</h1>
                <h2 class="text-2xl xl:text-5xl mb-5">A Full Stack Developer</h2>
                <p class="text-lg xl:text-xl">I enjoy developing interactive websites and
                    discovering my own potential that I have as an Engineer. My main stack is Laravel + Vue using Inertia
                    for
                    monolithic projects.</p>
                <i class="devicon-adonisjs-original"></i> 

                <i class="devicon-devicon-plain-wordmark"></i>

                <ul class="flex space-x-5 justify-center mt-5 mb-2">
                    <li v-for="({ icon, link, new_window }, index) in socialMediaLinks" :key="index">
                        <NuxtLink :to="link" :target="new_window ? '_blank' : '_self'" class="text-2xl"><font-awesome-icon
                                :icon="icon" /></NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="w-full md:w-5/12 my-auto">
                <img class="rounded-full w-60 md:w-96 mx-auto block"
                    src="https://media.licdn.com/dms/image/C4E03AQEyqKiLAcfY9g/profile-displayphoto-shrink_800_800/0/1629429786757?e=1691020800&v=beta&t=IGcJeZEe8Hr_JUJBoPeTHURhHRPCSKW6w4VSAWJUn18"
                    alt="Neftali Aguilar">
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

type SocialLinks = {
    icon: string,
    link: string,
    new_window?: Boolean
}

const socialMediaLinks: SocialLinks[] = [
    {
        icon: 'fa-brands fa-github',
        link: 'https://github.com/NeftaliAguilarDev',
        new_window: true
    },
    {
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/neftaliaguilaralvarez/',
        new_window: true
    },
    {
        icon: 'fa-brands fa-twitter',
        link: 'https://twitter.com/NeftaliAguilar_',
        new_window: false
    },
]
</script>

<style scoped></style>