const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on('ready', () => {
    console.log('Fluzzy online, com sucesso.')
    let status = [{
        name: '👮 Moderando o Fluzzy Games.',
        type: 'PLAYING',
        url: 'https://twitch.tv/fluzzy'
      },
      {
        name: '💼 Estamos sempre trabalhando em atualizações!',
        type: 'STREAMING',
        url: 'https://twitch.tv/fluzzy'
      },
      {
        name: '🙋 Precisa de ajuda? Digite /ajuda!',
        type: 'PLAYING',
        url: 'https://twitch.tv/fluzzy'
      },
      {
        name: '🎉 Novidades em breve!',
        type: 'STREAMING',
        url: 'https://twitch.tv/fluzzy'
      },
      {
        name: '✍ Alguma sugestão? Digite /sugerir!',
        type: 'WATCHING',
        url: 'https://twitch.tv/fluzzy'
      },
      {
        name: '📰 Fluzzy Games l v1.0 BETA',
        type: 'PLAYING',
        url: 'https://twitch.tv/fluzzy'
      },
    ];
    function setStatus() {
      let randomStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setPresence({
        game: randomStatus
      });
    }
    setStatus();
    setInterval(() => setStatus(), 100000);
  });


  client.on("message", message => {

    if (message.author.bot) return;
    if (message.content.indexOf(config.prefixo) !== 0) return;
  
    const args = message.content.slice(config.prefixo.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  });
  
  client.login(process.env.BOT_TOKEN);
