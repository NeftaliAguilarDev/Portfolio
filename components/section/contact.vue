<template>
    <div>
        <div class="bg-gradient-to-b to-black from-zinc-900 pb-36 -mt-1">
            <section class="container mx-auto px-10 text-white text-center">
                <h2 class="text-2xl xl:text-5xl mb-10">Drop a message</h2>
                <p class="text-lg">Feel free to send me a message if you have a project that I can help with</p>
                <div class="w-full">
                    <form ref="form" @submit.prevent="sendEmail">
                        <FormKit name="name" type="text" label="Your name" placeholder="Jane Doe" validation="required"
                            maxlength="10" :classes="{
                                input: {
                                    'input': true,
                                },
                                label: {
                                    'label': true
                                }
                            }" />
                        <FormKit name="email" type="text" label="Your email" placeholder="jane@example.com"
                            validation="required|email" :classes="{
                                input: {
                                    'input': true
                                },
                                label: {
                                    'label': true
                                }
                            }" />

                        <FormKit name="message" type="textarea" label="Your Message" rows="10" :classes="{
                            input: {
                                'input': true
                            },
                            label: {
                                'label': true
                            }
                        }" />
                        <template v-if="isSending">
                            Sending message ...
                        </template>
                        <template v-if="isSending || !submitted">
                            <FormKit type="submit" label="Send message" />
                        </template>
                    </form>
                    <div v-if="submitted" class="mt-2">
                        <h2>Thank you. I will reply your message as soon as possible</h2>
                    </div>
                </div>
            </section>
        </div>
        <footer class="text-center py-4 text-white bg-black">All rights are reserved. ©Neftali Aguilar Dev</footer>
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import emailjs from '@emailjs/browser';

const submitted = ref(false)
const isSending = ref(false)
const form = ref(null);
const runtimeConfig = useRuntimeConfig();

const sendEmail = () => {
    isSending.value = true;
    emailjs.sendForm(runtimeConfig.public.EMAILJS_SERVICE_ID, runtimeConfig.public.EMAILJS_TEMPLATE_ID, form.value, runtimeConfig.public.EMAILJS_PUBLIC_KEY)
        .then((result) => {
            submitted.value = true
            isSending.value = false;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>

<style scoped></style>