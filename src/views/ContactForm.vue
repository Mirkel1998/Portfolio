<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactUs',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        sendEmail() {
            console.log('Sending data:', this.formData);

            emailjs.send(
                'service_tk7qzlc',
                'template_yhf26lk',
                {
                    name: this.formData.name,
                    email: this.formData.email,
                    message: this.formData.message
                },
                'RW_uLsS4xSjsa2Kx6'
            )
                .then((result) => {
                    console.log('SUCCESS!', result);
                    alert('Message sent successfully!');

                    // Reset form field
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again.');
                });
        },
    }
}
</script>

<template>
    <section class="flex justify-center center-items pb-10 pt-10">
        <div class="contact-wrapper max-w-3xl w-full mx-auto px-4">
            <h1 class="text-5xl text-purpleRain font-bold titleFont text-center mb-8">
                GET IN TOUCH
            </h1>

            <div class="bg-darkGray p-8 rounded-lg shadow-sm">
                <p class="text-pinkyWhite mb-6 text-center">
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <form @submit.prevent="sendEmail" class="space-y-6">
                    <div class="form-group">
                        <label for="name" class="text-pinkyWhite font-bold mb-2 block">Name</label>
                        <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required
                            class="w-full p-3 rounded bg-black text-pinkyWhite border border-gray-700 focus:border-purpleRain focus:outline-none transition">
                    </div>

                    <div class="form-group">
                        <label for="email" class="text-pinkyWhite font-bold mb-2 block">Email</label>
                        <input type="email" id="email" v-model="formData.email" placeholder="your.email@example.com"
                            required
                            class="w-full p-3 rounded bg-black text-pinkyWhite border border-gray-700 focus:border-purpleRain focus:outline-none transition">
                    </div>

                    <div class="form-group">
                        <label for="message" class="text-pinkyWhite font-bold mb-2 block">Message</label>
                        <textarea id="message" v-model="formData.message" cols="30" rows="6"
                            placeholder="Your message..." required
                            class="w-full p-3 rounded bg-black text-pinkyWhite border border-gray-700 focus:border-purpleRain focus:outline-none transition resize-vertical"></textarea>
                    </div>

                    <div class="flex justify-center">
                        <button type="submit"
                            class="bg-darkGray hover:bg-hooverPink text-pinkyWhite font-bold py-3 px-8 rounded titleFont transition-colors border border-purpleRain">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-wrapper {
    max-width: 900px;
}

.form-group {
    margin-bottom: 1.5rem;
}

input:focus,
textarea:focus {
    box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2);
}
</style>