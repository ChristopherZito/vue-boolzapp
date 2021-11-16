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
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                        message:"messaggio da scrivere Michele",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                            message:"messaggio da scrivere",
                            whoSend:"user",
                            timeSend:"11:54 11/09/2001",
                        },
                    ],
                },
                 //oggetto 2
                {
                    nome: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                        message:"messaggio da scrivere Fabio",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                            message:"messaggio da scrivere",
                            whoSend:"user",
                            timeSend:"11:54 11/09/2001",
                        },
                    ],
                },
                 //oggetto 3
                {
                    nome: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                        message:"messaggio da scrivere Samuele",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                            message:"messaggio da scrivere",
                            whoSend:"user",
                            timeSend:"11:54 11/09/2001",
                        },
                    ],
                },
                 //oggetto 4
                {
                    nome: "Luisa",
                    avatar: "img/avatar_4.jpg",
                    lastAcces:"11/09/2001",
                    visible:false,
                    chat: [
                        {
                        message:"messaggio da scrivere",
                        whoSend:"user",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                        message:"messaggio da scrivere Luisa",
                        whoSend:"owner",
                        timeSend:"11:54 11/09/2001",
                        },
                        {
                            message:"messaggio da scrivere",
                            whoSend:"user",
                            timeSend:"11:54 11/09/2001",
                        },
                    ],
                },
                
            ],
            display:"",
            newMessage:"",
        },
        methods:{
            changeChat(whoChat){
                this.utenti.forEach(variabile => {
                    return variabile.visible = false;
                });

                this.utenti[whoChat].visible = true;
            },
            sendNewMessage(were){
                //console.log(were); indica la chat in cui sto scrivendo

                //creazione nuovo oggetto
                let newChat = {
                    message: this.utenti[were].chat.message = this.newMessage,
                    whoSend: "owner",
                    timeSend: "11:54 11/09/2002"
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
                        timeSend: "11:54 11/09/2002"
                    };
                    this.utenti[were].chat.push(botChat);
                }, 1000);
            }

        },
    }
);

