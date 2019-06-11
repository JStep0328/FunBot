const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken)

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //!funbotstatus
    if(message.content.startsWith(`${prefix}funbotstatus`)){

        message.channel.send("I'm fucking ready to have fun, are you?")
    }
    //!funbot
    if(message.content.startsWith(`${prefix}funbot`)){

        message.channel.send("My name is FunBot! This is where the fun begins!")
    }
    
    
    //!tellem
    if(message.content.startsWith(`${prefix}tellem`)){

        //let member = message.mentions.members.first();
        message.channel.send(":wave: <@253988668564439040> is gay!")
        //message.channel.send(":wave: <@329801232229072901> is gay!")
    }
    //!yerd
    if(message.content.startsWith(`${prefix}yerd`)){

        message.channel.send('https://youtu.be/lgFmwbVL88g')
    }
    //!DanRo11a
    //if(message.content.startsWith(`${prefix}DanRo11a`)){

        //giphy.search('gifs', {"q": "boobs"})
           // .then((response) => {
               // var totalResponses = response.data.length;
               // var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
               // var responseFinal = response.data[responseIndex];
            
               // message.channel.send({
                   //files: [responseFinal.images.fixed_height.url]
               // })
        //}).catch(() => {
           // message.channel.send('Oof!');
       // })
   // }
    //gay
    if(message.content == 'gay'){

        giphy.search('gifs', {"q": "gay"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send('no u', {
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //GAY
    if(message.content == 'GAY'){

        message.channel.send("NO U")
    }
    //!blessed
    if(message.content.startsWith(`${prefix}blessed`)){

        message.channel.send(":headphones: I BLESSED THE RAINS DOWN IN AFRICA! :headphones:")
    }
    //!hotrod
    if(message.content.startsWith(`${prefix}hotrod`)){

        giphy.search('gifs', {"q": "Hot Rod Kimble"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!austinpowers
    if(message.content.startsWith(`${prefix}austinpowers`)){

        giphy.search('gifs', {"q": "Austin Powers"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!dumb
    if(message.content.startsWith(`${prefix}dumb`)){

        giphy.search('gifs', {"q": "Dumb and Dumber"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!thump
    if(message.content.startsWith(`${prefix}thump`)){

        giphy.search('gifs', {"q": "Trash"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send(":wave: <@402261774260240404> :heart:", {
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!negativeone
    if(message.content.startsWith(`${prefix}negativeone`)){

        giphy.search('gifs', {"q": "Mudvayne Negative One"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!arrested
    if(message.content.startsWith(`${prefix}arrested`)){

        giphy.search('gifs', {"q": "Arrested Development"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!brief
    if(message.content.startsWith(`${prefix}brief`)){

        giphy.search('gifs', {"q": "Arrested Development"})
        
        message.channel.send("https://i.imgur.com/8sNeUhk.gif")
    }
    //!kpop
    if(message.content.startsWith(`${prefix}kpop`)){

        giphy.search('gifs', {"q": "kpop"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //!ageeky
    if(message.content.startsWith(`${prefix}ageeky`)){

        giphy.search('gifs', {"q": "kawaii"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1 ) % totalResponses;
                var responseFinal = response.data[responseIndex];
            
                message.channel.send({
                    files: [responseFinal.images.fixed_height.url]
                })
        }).catch(() => {
            message.channel.send('Oof!');
        })
    }
    //FUTURE COMMAND
})

client.login(token);
