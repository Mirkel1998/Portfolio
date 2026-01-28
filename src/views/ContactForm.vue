<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactUs',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
                honeypot: ''
            },
            isSubmitting: false,
            lastSubmitTime: null,
            submitCount: 0,
            cooldownPeriod: 60000, // 1 minute in milliseconds
            maxSubmissions: 3 // Max 3 submissions per hour
        }
    },
    mounted() {
        // Load submission data from localStorage
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const { lastSubmitTime, submitCount } = JSON.parse(savedData);
            this.lastSubmitTime = lastSubmitTime;
            this.submitCount = submitCount;

            // Reset count if more than 1 hour has passed
            const oneHour = 3600000;
            if (Date.now() - lastSubmitTime > oneHour) {
                this.submitCount = 0;
            }
        }
    },
    methods: {
        checkRateLimit() {
            const now = Date.now();

            // Check if user has exceeded max submissions per hour
            if (this.submitCount >= this.maxSubmissions) {
                const savedData = JSON.parse(localStorage.getItem('contactFormData'));
                const timeSinceFirst = now - savedData.lastSubmitTime;
                const oneHour = 3600000;

                if (timeSinceFirst < oneHour) {
                    const remainingTime = Math.ceil((oneHour - timeSinceFirst) / 60000);
                    alert(`You've reached the submission limit. Please try again in ${remainingTime} minutes.`);
                    return false;
                }
                // Reset if hour has passed
                this.submitCount = 0;
            }

            // Check cooldown between submissions (1 minute)
            if (this.lastSubmitTime) {
                const timeSinceLast = now - this.lastSubmitTime;
                if (timeSinceLast < this.cooldownPeriod) {
                    const remainingSeconds = Math.ceil((this.cooldownPeriod - timeSinceLast) / 1000);
                    alert(`Please wait ${remainingSeconds} seconds before submitting again.`);
                    return false;
                }
            }

            return true;
        },

        updateRateLimit() {
            this.lastSubmitTime = Date.now();
            this.submitCount++;

            // Save to localStorage
            localStorage.setItem('contactFormData', JSON.stringify({
                lastSubmitTime: this.lastSubmitTime,
                submitCount: this.submitCount
            }));
        },

        sendEmail() {
            // Check honeypot
            if (this.formData.honeypot !== '') {
                console.log('Bot detected!');
                return;
            }

            // Check rate limit
            if (!this.checkRateLimit()) {
                return;
            }

            // Prevent double submission
            if (this.isSubmitting) {
                return;
            }

            this.isSubmitting = true;
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

                    // Update rate limit
                    this.updateRateLimit();

                    // Reset form
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                    this.formData.honeypot = '';
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again.');
                })
                .finally(() => {
                    this.isSubmitting = false;
                });
        },
    }
}
</script>

<template>
    <section class="flex justify-center center-items pb-10 pt-10">
        <div class="contact-wrapper max-w-3xl w-full mx-auto px-4">
            <h1 class="text-5xl text-purpleRain font-bold titleFont text-center mb-12">
                GET IN TOUCH
            </h1>

            <div class="bg-darkGray p-8 rounded-lg shadow-sm">
                <p class="text-pinkyWhite mb-6 text-center">
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <form @submit.prevent="sendEmail" class="space-y-6">
                    <!-- Honeypot field -->
                    <div class="honeypot-field">
                        <label for="website">Website</label>
                        <input type="text" id="website" name="website" v-model="formData.honeypot" tabindex="-1"
                            autocomplete="off">
                    </div>

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
                        <button type="submit" :disabled="isSubmitting"
                            :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                            class="bg-darkGray hover:bg-hoverPink text-pinkyWhite font-bold py-3 px-8 rounded titleFont transition-colors border border-purpleRain">
                            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
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

.honeypot-field {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
}
</style>