//user è l'utente a cui scrivo, io sono owner
var wApp = new Vue (
    {
        el: "#main-body",
        data:{
            utenti: [
                //oggetto 1
                {
                    nome: "Michele",
                    avatar: "img/avatar_1.jpg",
                    lastAcces:"11/09/2001",
                    visible:true,
                    research:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Michele",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 1",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                    ],
                },
                 //oggetto 2
                {
                    nome: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    research:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Fabio",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 2",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                    ],
                },
                 //oggetto 3
                {
                    nome: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    research:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Samuele",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 3",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                    ],
                },
                 //oggetto 4
                {
                    nome: "Luisa",
                    avatar: "img/avatar_4.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    research:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Luisa",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 4",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        infoDelet:false,
                        },
                    ],
                },
                
            ],
            display:"",
            newMessage:"",
            searchUser:"",
        },
        //visualizzare l'ultimo messaggio di ogni chat "da fare" SuperBonus
        computed:{
            lastMsg(){
                let message = [];
                this.utenti.forEach(msg => {
                    //console.log(msg.chat[msg.chat.length - 1].message);  legge l'ultimo messaggio dell'array chat
                    message.push(msg.chat[msg.chat.length - 1].message);                
                    return message;
                })
                //console.log(message); mostra un array con l'ultimo messaggio di ogni oggetto
                return 
            }
        },

        methods:{
            //milestone 2 switch tra chat
            changeChat(whoChat){
                this.utenti.forEach(chiVedo => {
                    return chiVedo.visible = false;
                });

                this.utenti[whoChat].visible = true;
            },
            //milestone 3, utilizzo della chat
            sendNewMessage(were){
                //console.log(were); indica la chat in cui sto scrivendo

                //creazione nuovo oggetto
                let newChat = {
                    message: this.utenti[were].chat.message = this.newMessage,
                    whoSend: "owner",
                    timeSend: "11:54 11/09/2002",
                    infoDelet:false,
                };

                //push nell'array chat
                this.utenti[were].chat.push(newChat);

                //reset input bar
                this.newMessage = " "; 

                //risposta del computer "ok" _-_
                setTimeout(() => {
                    let botChat = {
                        message: "ok",
                        whoSend: "user",
                        timeSend: "11:54 11/09/2002",
                        infoDelet:false,
                    };
                    this.utenti[were].chat.push(botChat);
                }, 1000);
            },
            //milestone 4, ricerca degli user
            cercaUser(text){
                const names = [];
                this.utenti.forEach(nameNew => {
                    names.push(nameNew.nome)
                    return
                })
                //array con i nomi da cercare       console.log("array nomi: ", names);
                //controllo lettere inserite        console.log("lettere scritte: ", text); 
                //ciclo per la ricerca, la prima lettera deve essere maiuscola
                for(let i = 0; i < names.length; i++){
                    let oneName = names[i];
                    let x = names[i].toLowerCase();
                    //console.log(x);
                    //console.log("oneName ", oneName);
                    if(oneName.indexOf(text) > -1 || x.indexOf(text) > -1 ) {
                        // console.log("prima",this.utenti[i].research);
                        this.utenti[i].research = false;
                        // console.log(`ti vedi ${names[i]},
                        // dopo sei ${ this.utenti[i].research}
                        // `);
                        
                    }else{
                        this.utenti[i].research = true;
                        // console.log(`non ti vedi ${names[i]},
                        //   sei ${ this.utenti[i].research}
                        //   `);
                    }
                }
            },

            //milestone 5, elimina messaggio "da fare"
            info(msg, index){
                //indicano il numero del messaggio(msg) e la chat (index) console.log(msg, index);
                if(this.utenti[index].chat[msg].infoDelet === false){
                    this.utenti[index].chat[msg].infoDelet = true
                }else{
                    this.utenti[index].chat[msg].infoDelet = false
                }
            },  
            deleteMsg(msg, index){
                //selezionare il messaggio da eliminare console.log(this.utenti[index].chat[msg]);
                this.utenti[index].chat.splice(msg, 1);
            } 
            //milestone 6, mettere la data attuale ai messaggi   
        },
    }
);
