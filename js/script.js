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
                console.log(were);//indica la chat in cui sto scrivendo
                console.log(this.newMessage, "hai");
                let newChat = {
                    message: this.utenti.chat = this.newMessage,
                    whoSend: "owner",
                    timeSend: "11:54 11/09/2002"
                };
                console.log(newChat);
                /* this.utenti[were].chat.push(newChat);*/
                /* this.newMessage = ""; */ 
            }

        },
    }
);
/*
 addObj(){
    //creazione nuovo oggetto da inserire nell'array
   
    if(this.newTextObj != "" && this.newTextObj.length > 4){
        let newObj = {
        text: this.object.text = this.newTextObj,
        done: this.object.done = false,
        };
        // console.log("text: ",this.newTextObj);
        // console.log(newObj);

        this.object.push(newObj)
        //reset testo input
        this.newTextObj = "";
    }
    
}, 
*/
