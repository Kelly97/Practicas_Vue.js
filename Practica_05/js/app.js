const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de Vue'
    },
    beforeCreate() {
        console.log('BeforeCreate');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
});