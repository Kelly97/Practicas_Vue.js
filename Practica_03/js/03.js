const app = new Vue({
    el: "#app",
    data: {
        mensaje: "Hola soy Kelly",
        contador: 0
    },
    methods: {},
    computed: {
        invertirMensaje() {
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    }
});