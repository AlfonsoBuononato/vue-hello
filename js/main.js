/* Descrizione
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const app = new Vue({
    el: "#container",

    data: {
        title: "Benvenuti in VueJs",
        image: "https://www.luigisabbetti.it/wp-content/uploads/2018/04/guida-vue-js-italiano.png",
        image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1280px-JQuery-Logo.svg.png",
        classCenter: "center",
        classWidth: "width",
        classImg2: "img-2",
        classButton: "display-block"   
    },
    methods:{
        block: function(){
            /* if(this.classImg2 === "img-2"){
                this.classImg2 = "display-none";
            }else if(this.classImg2 === "display-none"){
                this.classImg2 = "img-2";
            } */
            this.classImg2 = (this.classImg2 === "img-2") ? "display-none" : "img-2"
        } 
    }
})