const app = Vue.createApp({
    data() {
        return {
            title: 'Leinorain Autida',
            age: 23,
            date: null,
            hour: null,
            greetings: null,
            colors: true
        }
    },
    mounted(){
        this.getDate()
    },
    methods: {
        getDate(){
            this.date = new Date()
            this.hour = this.date.getHours()
            if(this.hour < 11){
                this.greetings = "Good Morning"
            } else if (this.hour > 12 && this.hour < 18){
                this.greetings = "Good Afternoon"
            } else {
                this.greeings = "Good Eve"
            }
            if(this.hour > 6 && this.hour < 18){
                this.colors = false
            }
        }
    }
})



app.mount('#app')