<template>
    <div class="bg-gradient-to-b from-black to-zinc-900 pb-36">
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
                    <template v-if="!isSending || !submitted">
                        <FormKit type="submit" label="Send message" />
                    </template>
                    <template v-else>
                        Sending message ...
                    </template>
                </form>
                <div v-if="submitted">
                    <h2>Thank you. I will reply your message as soon as possible</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import emailjs from '@emailjs/browser';

const submitted = ref(false)
const isSending = ref(false)
const form = ref(null);
const sendEmail = (form: any) => {
    isSending.value = true;
    emailjs.sendForm(import.meta.env.EMAILJS_SERVICE_ID, import.meta.env.EMAILJS_TEMPLATE_ID, form, import.meta.env.EMAILS_PUBLIC_KEY)
        .then((result) => {
            submitted.value = true
            isSending.value = false;
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>

<style scoped></style>