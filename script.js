const { createApp } = Vue;

createApp({
    data() {
        return {
            email: [],
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.email = (response.data.response)
                }
                );
        }
    },
    mounted() {
        this.getRandomEmail();
    },
}).mount('#app')