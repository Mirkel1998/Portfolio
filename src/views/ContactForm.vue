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
    <section class="contact-section">
        <div class="contact-wrapper">
            <h1 class="contact-title">
                // GET IN TOUCH //
            </h1>

            <div class="form-container">
                <p class="form-description">
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
                        <label for="name" class="form-label">► NAME:</label>
                        <input type="text" id="name" v-model="formData.name" placeholder="ENTER YOUR NAME" required
                            class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">► EMAIL:</label>
                        <input type="email" id="email" v-model="formData.email" placeholder="YOUR.EMAIL@EXAMPLE.COM"
                            required class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label">► MESSAGE:</label>
                        <textarea id="message" v-model="formData.message" cols="30" rows="6"
                            placeholder="TYPE YOUR MESSAGE HERE..." required
                            class="form-input form-textarea"></textarea>
                    </div>

                    <div class="button-container">
                        <button type="submit" :disabled="isSubmitting" :class="{ 'button-disabled': isSubmitting }"
                            class="submit-button">
                            {{ isSubmitting ? '>> SENDING...' : '>> SEND MESSAGE' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    min-height: 100vh;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-wrapper {
    max-width: 800px;
    width: 100%;
}

.contact-title {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: #00FFFF;
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.8;
    text-shadow:
        3px 3px 0px #000033,
        0 0 10px #00FFFF,
        0 0 20px #00FFFF;
    animation: neonFlicker 2s infinite alternate;
}

@keyframes neonFlicker {

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
        opacity: 1;
    }

    20%,
    24%,
    55% {
        opacity: 0.8;
    }
}

.form-container {
    background: #1a1a3e;
    border: 4px solid #FF00FF;
    padding: 2.5rem;
    box-shadow:
        8px 8px 0px #000033,
        0 0 30px rgba(255, 0, 255, 0.5);
    position: relative;
}

.form-container::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: -8px;
    bottom: -8px;
    border: 2px solid rgba(255, 0, 255, 0.3);
    pointer-events: none;
}

.form-description {
    font-family: 'VT323', monospace;
    color: #F8F8FF;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    font-family: 'Press Start 2P', cursive;
    color: #FFFF00;
    font-size: 0.7rem;
    margin-bottom: 0.75rem;
    line-height: 1.8;
    text-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
}

.form-input {
    width: 100%;
    padding: 1rem;
    background: #000033;
    color: #00FFFF;
    border: 3px solid #00FFFF;
    font-family: 'VT323', monospace;
    font-size: 1.1rem;
    transition: all 0.1s steps(2);
    box-shadow:
        inset 0 2px 4px rgba(0, 0, 0, 0.5),
        0 0 10px rgba(0, 255, 255, 0.3);
}

.form-input::placeholder {
    color: rgba(0, 255, 255, 0.4);
    font-family: 'VT323', monospace;
}

.form-input:focus {
    outline: none;
    border-color: #FFFF00;
    box-shadow:
        inset 0 2px 4px rgba(0, 0, 0, 0.5),
        0 0 20px rgba(255, 255, 0, 0.6);
    background: rgba(255, 255, 0, 0.05);
}

.form-textarea {
    resize: vertical;
    min-height: 150px;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.submit-button {
    background: #000033;
    color: #00FF00;
    padding: 1rem 2.5rem;
    border: 4px solid #00FF00;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.1s steps(2);
    box-shadow:
        8px 8px 0px #000033,
        0 0 20px rgba(0, 255, 0, 0.5);
    line-height: 1.8;
    text-transform: uppercase;
}

.submit-button:hover:not(.button-disabled) {
    background: #00FF00;
    color: #000033;
    transform: translate(-4px, -4px);
    box-shadow:
        12px 12px 0px #000033,
        0 0 30px rgba(0, 255, 0, 0.8);
}

.submit-button:active:not(.button-disabled) {
    transform: translate(0, 0);
    box-shadow:
        4px 4px 0px #000033,
        0 0 15px rgba(0, 255, 0, 0.5);
}

.button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.honeypot-field {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
}

@media (max-width: 768px) {
    .contact-title {
        font-size: 0.8rem;
    }

    .form-container {
        padding: 1.5rem;
    }

    .form-label {
        font-size: 0.6rem;
    }

    .submit-button {
        font-size: 0.6rem;
        padding: 0.75rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .contact-section {
        padding: 3rem 1rem;
    }

    .form-container {
        padding: 1.25rem;
    }

    .form-description {
        font-size: 1rem;
    }

    .form-input {
        padding: 0.75rem;
        font-size: 1rem;
    }

    .button-container {
        justify-content: stretch;
    }

    .submit-button {
        width: 100%;
    }
}
</style>