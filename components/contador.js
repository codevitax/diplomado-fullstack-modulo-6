Vue.component(
    'contador',
    {
        template: "<div><p>contador de: {{titulo}} {{numero}}</p><p><button @click='numero += 1'>contador</button></p></div>",
        data: function(){
            return {
                numero:0
            }
        },
        props: ["titulo"],
        mounted() {
            this.numero = 10
        },
    }
);