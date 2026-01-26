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
    <div class="container">
        <form @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" v-model="formData.name" placeholder="Your Name" required>
            <label>Email</label>
            <input type="email" v-model="formData.email" placeholder="Your Email" required>
            <label>Message</label>
            <textarea v-model="formData.message" cols="30" rows="5" placeholder="Message" required></textarea>

            <input type="submit" value="Send">
        </form>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}
</style>