import {getCollection} from './firebase.js';
const divIframe = document.getElementById('iframeDiv');  

// Creamos nuestra aplicacion.
const miAplicacion = Vue.createApp({
    // DATOS de la aplicacion
    data() { return { 
            // card: 'miComponente',
            farmacias: []
        } },
            
    // Defino mis componentes
    // components: {
    //     // Este es el componente que se enlaza dinamicamente
    //     // con la etiqueta <component>
    //     'miComponente': {
    //         template:
    //             `<div class="flip-card" v-for="farmacia in farmacias">
    //                 <div class="flip-card-inner">
    //                     <div class="flip-card-front">
    //                         <h2>{{farmacia.nombre}}</h2>
    //                     </div>
    //                     <div class="flip-card-back">
    //                         <div>
    //                             <h3><i class="fa-solid fa-location-dot"></i> <span>Dirección:</span> Soy H3</h3>
    //                         </div>
    //                         <p><i class="fa-solid fa-phone"></i> <span>Teléfono:</span> parrafo</p>
    //                         <button>VER UBICACION</button>
    //                     </div>
    //                 </div>
    //             </div>`}
    // },
    created() {
        this.getColeccion();
    },
    // mount(){
    //     this.mostrarIFrame();
    // },
    methods: {
        async getColeccion() {
            // query to get all docs in 'countries' collection
            const querySnap = await getCollection('farmacias');
            
            // add each doc to 'countries' array
            querySnap.forEach((doc) => {
                this.farmacias.push(doc.data());
            });
        },

        // mostrarIFrame(){ 
        //     console.log(divIframe.innerHtml)                
        // }
    }
    
}).mount("#app")
