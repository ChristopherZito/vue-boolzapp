//user è l'utente a cui scrivo, io sono owner
var wApp = new Vue (
    {
        el: "#chats",
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
                        message:"messaggio da scrivere",
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
                        message:"messaggio da scrivere",
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
                        message:"messaggio da scrivere",
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
                        message:"messaggio da scrivere",
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
        },
    }
);