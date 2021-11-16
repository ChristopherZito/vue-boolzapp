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
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Michele",
                        whoSend:"owner",
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 1",
                        whoSend:"user",
                        timeSend:"11:54",
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
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Fabio",
                        whoSend:"owner",
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 2",
                        whoSend:"user",
                        timeSend:"11:54",
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
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Samuele",
                        whoSend:"owner",
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 3",
                        whoSend:"user",
                        timeSend:"11:54",
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
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere Luisa",
                        whoSend:"owner",
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                        {
                        message:"messaggio da scrivere 4",
                        whoSend:"user",
                        timeSend:"11:54",
                        infoDelet:false,
                        },
                    ],
                },
                
            ],
            display:"",
            newMessage:"",
            searchUser:"",
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
                
                //Milestone 6, creazione data UTC
                var orario = new Date();
                let day = parseInt(orario.getUTCDate());
                let month = parseInt(orario.getUTCMonth() +1);
                let year = parseInt(orario.getUTCFullYear());
                let hour = parseInt(orario.getHours());
                let minute = parseInt(orario.getMinutes());
                let time = `${hour}:${minute}`;
                let today = `${day}/${month}/${year}`;
                //console.log(time);

                //creazione nuovo oggetto
                if(this.newMessage.length != 0 && this.newMessage != " " && this.newMessage != "  " && this.newMessage != "   "){

                    let newChat = {
                        message: this.utenti[were].chat.message = this.newMessage,
                        whoSend: "owner",
                        timeSend: time,
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
                            timeSend: time,
                            infoDelet:false,
                        };
                        this.utenti[were].chat.push(botChat);
                        this.utenti[were].lastAcces = `Ultimo accesso il ${today} alle ${time}` ;
                    }, 1000);
                }

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
                    let down = names[i].toLowerCase();
                    let up = names[i].toUpperCase();
                    //console.log(x);
                    //console.log("oneName ", oneName);
                    if(up.indexOf(text) > -1 || down.indexOf(text) > -1 ) {
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
        },
    }
);
