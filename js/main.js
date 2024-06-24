// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// estrapolo il metodo del framework che ci permette di creare app Vue
const { createApp } = Vue;

// creo l'istanza di un'app VUE e la collogo all'ID contenitore 
createApp ({
    data(){
        return {
            message : "Titolo della pagaina"
        }
    }
}).mount("#app");