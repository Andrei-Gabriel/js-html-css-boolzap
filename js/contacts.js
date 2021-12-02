const app = new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'E vorrei sapere perché mi chiamo Luisa anche se sono un uomo',
                        status: 'received'
                    },
                ],
            },
        ],
        // name: 'Michele',
        // avatar: '_1',
        // visible: true,
        // messages: [
        //     {
        //         date: '10/01/2020 15:30:55',
        //         message: 'Hai portato a spasso il cane?',
        //         status: 'sent'
        //     }, q. messages > 1
        // ],
        contactsIndex: 0,
        searchContactText: "",
        inputText: "",
    },
    methods: {
        // Stampa nel div.contatto-info l'ultimo accesso del contatto
        lastLog: function(j){
            // Controlla partendo dall'ultimo elemento se c'è un status received. Quando lo trova ritorna il valore
            for(let i = this.contacts[j].messages.length - 1; i >= 0; i--){
                if(this.contacts[j].messages[i].status == "received"){
                    return this.contacts[j].messages[i].date;
                };
            };
        },
        selectedContact: function(i){
            this.contactsIndex = i;
        },
        // Aggiunge un elemento *all'array messages dentro l'oggetto contacts*
        addMex: function(i){
            if(this.inputText != ""){
                this.contacts[i].messages.push({date: dayjs().format("DD/MM/YYYY HH:mm:ss"), message: this.inputText, status: 'sent'});
                // Dopo l'aggiunta pulisce l'input text
                this.inputText = "";

                // Dopo un secondo aggiunge un elem ** con status received (la data in contatto-info cambierà)
                setTimeout(() => {
                    this.contacts[i].messages.push({date: dayjs().format("DD/MM/YYYY HH:mm:ss"), message: "ok", status: 'received'});
                }, 1000);
            };
        },
        searchContact: function(){
            // Cerca in contacts se il valore name == searchContactText
            for(let i = 0; i < this.contacts.length; i++){
                if(this.searchContactText == this.contacts[i].name){
                    this.contactsIndex = i;
                    this.searchContactText = "";
                }
            }
        },
    },

});

// dayjs().format("DD/MM/YYYY HH:mm:ss")