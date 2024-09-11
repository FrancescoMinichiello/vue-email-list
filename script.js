const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.emails.push(response.data.response)
                }
                );
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getRandomEmail();
        }
    },
}).mount('#app')