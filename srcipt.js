// Vue empieza a trabajar en la caja con id="app"
const { createApp } = Vue;

createApp({
    // DATA: guardamos todas las variables
    data() {
        return {
            indiceActual: 0, // se empieza en la primera tarjeta
            mostrarRespuesta: false, // Ocultamos la respuesta al inicio un interruptor booleano para alternar entre ver la pregunta o la respuesta
            tarjetas: [ //un interruptor booleano para alternar entre ver la pregunta o la respuesta
                { pregunta: "¿Qué es la ganadería?", respuesta: "Es la actividad de criar animales para producción." },
                { pregunta: "¿Qué es el pastoreo?", respuesta: "Es la práctica de alimentar al ganado en pastizales." },
                { pregunta: "¿Qué es un hato?", respuesta: "Es el conjunto de animales de una finca." }
            ]
        }
    },

    // COMPUTED: cálculos automáticos como el de la barra de progreso
    computed: {
        porcentajeProgreso() {
            // Calcula el porcentaje matemáticamente 33%, 66%, 100%
            return ((this.indiceActual + 1) / this.tarjetas.length) * 100;
        }
    },

    // METHODS: lo que pasa cuando al dar click
    methods: {
        siguiente() {
            // Si no está en la última tarjeta avanzamos
            if (this.indiceActual < this.tarjetas.length - 1) {
                this.indiceActual++;
                this.mostrarRespuesta = false; // se oculta la respuesta de la anterior
            }
        },
        anterior() {
            // Si no está en la primera, se retrocede
            if (this.indiceActual > 0) {
                this.indiceActual--;
                this.mostrarRespuesta = false;
            }
        }
    }

}).mount("#app"); // se conecta todo con el HTML
