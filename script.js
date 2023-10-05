const {createApp} = Vue;



createApp({
  data(){
    return{

    contacts: [
            {
                name: 'Michele',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
                ultimoAccesso: "05/10/2023 15:50:00",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '05/10/2023 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
                ultimoAccesso: "04/10/2023 15:50:00",
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
                        date: '04/10/2023 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png',
                ultimoAccesso: "10/01/2020 15:50:00",
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
                        date: '05/10/2023 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png',
                ultimoAccesso: "10/01/2020 15:50:00",
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
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                ultimoAccesso: "10/01/2020 15:50:00",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                ultimoAccesso: "10/01/2020 15:50:00",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar8.png',
                ultimoAccesso: "10/01/2020 15:50:00",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'https://bootdey.com/img/Content/avatar/avatar8.png',
                ultimoAccesso: "03/10/2023 15:50:00",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '03/10/2023 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
            ],
      activeContact: -1,   // serve a sapere l'indice dell'oggetto selezionato
      chatSelezionata: false,
      nomeSelezionato: " ",
      ultimoAccesso: " ",
      imageSelezionata:" ",
      message:"",
      search:""

    }
  },
  methods:{

    clickChat(contact, index){
        this.activeContact=index;
        this.chatSelezionata = true;
        this.nomeSelezionato= contact.name;
        this.imageSelezionata= contact.avatar;

        const dateTime = luxon.DateTime; // libreria luxon
        const now = dateTime.now();
        const formattedDateNow = now.toFormat('dd/MM/yyyy'); // data di oggi formattata

        //console.log(this.calcolaGiorno("03/10/2023 15:50:00"));

        const giorno = this.calcolaGiorno(contact.ultimoAccesso);
        this.ultimoAccesso = giorno + " alle ore: " + this.calcolaData(contact.ultimoAccesso, "HH:mm"); 

    }, 

    addMessage(){
        
        const dateTime = luxon.DateTime; // libreria luxon
        const now = dateTime.now();
        const formattedDateNow = now.toFormat('dd/MM/yyyy HH:mm:ss');
        const object1={
            date: formattedDateNow,
            message: this.message,
            status: 'sent'
        };
        this.contacts[this.activeContact].messages.push(object1);
        this.message="";
        setTimeout(()=>{
            const newDate = now.plus({ seconds: 2 });
            const formattedDateNow2 = newDate.toFormat('dd/MM/yyyy HH:mm:ss');
            const object2={
                date: formattedDateNow2,
                message: "Ciao",
                status: 'received'
            }; 
            this.contacts[this.activeContact].messages.push(object2);
        }, 2000);
      
  
    },

    // per vedere se il giorno è ieri, oggi oppure data
    calcolaGiorno(data){
        const dateTime = luxon.DateTime;
        const now = dateTime.now();
        const dataCompleta = dateTime.fromFormat(data, 'dd/MM/yyyy HH:mm:ss');
        if( this.calcolaData(data, "dd/MM/yyyy") == now.toFormat('dd/MM/yyyy')){
            return "oggi";
        }
        else if (now.year==dataCompleta.year && now.month == dataCompleta.month && now.day==dataCompleta.day+1){
            return "ieri";
        }
        else{
            return this.calcolaData(data, "dd/MM/yyyy");
        }
        
    },

    calcolaData(data, format){
        const dateTime = luxon.DateTime; // libreria luxon
        const dataCompleta = dateTime.fromFormat(data, 'dd/MM/yyyy HH:mm:ss');
        return dataCompleta.toFormat(format);
    },

    searchChat(){
      this.contacts.forEach(contact => {
        if(contact.name.toLowerCase().includes(this.search.toLowerCase())){
          contact.visible = true;

        } else{
          contact.visible = false
        }
      });
      console.log(this.search);

    },

  },

  mounted(){
  }
}).mount('#app')



