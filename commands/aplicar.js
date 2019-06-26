const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
  message.channel.send(`Verifique suas mensagens privadas, ${message.author}  📬!`).then(msg => msg.delete(10000));
  message.react("📚")
 
    await message.author.createDM();
    await message.author.createDM();
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Olá caros jogadores(as). Ficamos felizes em saber que você gostaria de se aplicar a nossa equipe! Isto mostra que você tem comprometimento, e esta apto a ajudar todos os jogadores. Bem, o processo de seleção em si é algo complicado. Aqui, você somente completa um formulário para que a equipe de superiores possa reconhecer sua capacidade e mais sobre você.\n\n :white_small_square: Ao tentar se ingressar a equipe do servidor, deverá saber que ajudante tem como principal função ajudar com dúvidas e problemas tanto dentro do servidor quanto em nosso Discord. Deve se focar principalmente nisso, ajudantes podem sim jogar no servidor mas se focar apenas no seu jogo poderá afetar seu desempenho na equipe.\n\n :white_small_square:  A mentira é algo que ocorre em muitas aplicações para que as pessoas escondam suas identidades pois, têm a vontade de ingressar à equipe, mas, contém um histórico ruim. Mentir irá fazer com que neguemos seu formulário de forma imediata, pois necessitamos de um formulário totalmente honesto.\n\n:white_small_square: Evite ser vago em suas respostas, tente ser o mais completo e o mais formal possível; dizer sobre seu processo seletivo fará que sua aplicação seja negada imediatamente; pedir ajuda para um membro de nossa equipe em sua aplicação fará com que ela seja negada imediatamente; tenha uma boa ortografia e um bom domínio da língua portuguesa; **Boa sorte**!\n\n👉 **Digite seu nome completo. l 10% ▮▯▯▯▯▯▯▯▯▯**" 
        }}); 
        var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer1.on('collect', r=> {
            let sugestao = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Nos servidores Fluzzy, não nos importamos com a idade de nossos candidatos, e sim, com a maturidade e responsibilidade, que cada um possui!\n\n:white_small_square: Visamos sempre a qualidade e o desempenho que cada um exerce dentro de nosso servidor!\n\n👉 **Digite sua idade. l 20% ▮▮▯▯▯▯▯▯▯▯**"
         }});
         var tazer2 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
         tazer2.on('collect', r=> {
         let motivo = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Para que você receba sua TAG futuramente dentro do servidor, nós da equipe Fluzzy precisamos saber quel é seu nome utilizado dentro do jogo (in-game).\n\n 👉 **Digite seu nickname: l 30% ▮▮▮▯▯▯▯▯▯▯**"
        }});
        var tazer3 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer3.on('collect', r=> {
        let nick = r.content;
       message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Hoje em dia, qualquer experiência adquirida dentro de qualquer servidor já atuado por cada um, tem muita importância dentro da aplicação e atuação de cada um!\n\n 👉 **Já integrou alguma equipe? Se sim fale qual o servidor, o tempo que permaneceu na equipe e a experiência que teve na mesma.** l 40% ▮▮▮▮▯▯▯▯▯▯"
        }});
        var tazer7 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer7.on('collect', r=> {
        let equipe = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Para que futuramente, você possa realizar alguma chamada com nossos superiores, ou até em algum atendimento com nossos jogadores, você precisará de um microfone...\n\n 👉 **Você possui microfone disponível?** l 50% ▮▮▮▮▮▯▯▯▯▯"
        }});
        var tazer8 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer8.on('collect', r=> {
        let microfone = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Caso você estude ou trabalhe, você deverá responder a questão abaixo, de acordo com o horário ocupado por cada um.\n\n 👉 **Em qual horário você estuda/trabalha?** l 60% ▮▮▮▮▮▮▯▯▯▯**"
        }});
        var tazer6 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer6.on('collect', r=> {
        let horario = r.content
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Para que nossa equipe possa dividir corretamente o tempo atuado por cada jogador em nosso servidor, você deverá responder a questão abaixo, com a parte do dia, em que você estará disponível para atuar/ajudar em nosso servidor!\n\n 👉 **Que parte do dia tem mais disponibilidade para entrar no servidor?** l 70% ▮▮▮▮▮▮▮▯▯▯"
        }});
        var tazer9 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer9.on('collect', r=> {
        let dia = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: O perído que cada membro da equipe deve atuar e importante para um bom controle de nossos superiores.\n\n :white_small_square: Abaixo você deve citar em qual período de tempo, você estará disponível para atuar em nosso equipe/servidor (in-game/out-game).\n\n👉 **Digite qual perído de tempo no dia você está disponível para atuar/ajudar em nosso servidor** l 80% ▮▮▮▮▮▮▮▮▯▯**"
        }});
        var tazer4 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer4.on('collect', r=> {
        let periodo = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Como qualquer um, nós possuímos características positivas e negativas, e nesta questão, você deverá informá-las, com o máximo de detalhes possíveis!\n\n 👉 **Fale-nos um pouco sobre sua pessoa.** l 90% ▮▮▮▮▮▮▮▮▮▯"
        }});
        var tazer10 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer10.on('collect', r=> {
        let carac = r.content;
        message.author.send({embed: {
description: "**✍ FORMULÁRIO:**\n\n :white_small_square: Você deve responder com sua total sinceridade, e o mais importante, por que quer ser da equipe. Uma resposta bem elaborada e organizada aumenta cada vez mais as chances de ser aceito.\n\n👉 **Qual seu objetivo ao ingressar a equipe do servidor?** l 100% ▮▮▮▮▮▮▮▮▮▮**"
        }});
        var tazer5 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
        tazer5.on('collect', r=> {
        let entrevista = r.content;
        
         message.author.send({embed: {description: ":white_small_square: Ótimo, tudo pronto! Sua aplicação está pronta para ser enviada para nossa equipe.\n\n:white_small_square: Recomendamos que verifique se está tudo como você deseja, caso contrário, edite sua mensagem, para que assim, sua aplicação seja enviada como você deseja.\n\n:white_small_square: Lembre-se: sua aplicação possui um tempo mínimo de leitura de 3 dias úteis, ou seja, nossos superiores não leram os formulários enviados, em feriados ou finais de semana, dependendo da situação.\n\n:white_small_square: Pedir para lerem seu formulário, ou perguntar se o mesmo já foi lido, irá diminuir suas chances de ingressar na equipe.\n\n👉 Se estiver tudo certo, digite **CONFIRMAR** para enviar a sugestão ou **CANCELAR** para cancelar."}})
         var confirm = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { max: 1 });
         confirm.on('collect', r=>{
          if (r.content.toLowerCase() == "confirmar") {
                message.author.send({embed: {description: "📚 **Aplicação enviada**.\n\n:white_small_square: Agradecemos por contribuir com o nosso servidor.\n:white_small_square: Nossa equipe irá analisar seu formulário atentamente.\n:white_small_square: Fique atennto a mensagens privadas em seu Discord.\n\nAtenciosamente, equipe **Fluzzy**!"}});
                let usuarioicone = message.author.displayAvatarURL;
                const form = new Discord.RichEmbed()
                .setTitle('**📚 Nova aplicação!**')
                .addField("Enviada por:", `${message.author.tag}`)
                .addField("Nome completo:", sugestao)
                .addField("Idade:", motivo)
                .addField("Nome do jogador in-game:", nick)
                .addField("Equipe atuada pelo jogador:", equipe)
                .addField("Possui microfone disponível?", microfone)
                .addField("Horário em que o jogador estuda ou trabalha:", horario)
                .addField("Período do dia disponível:", dia)
                .addField("Em qual perído o jogador atuará na rede:", periodo)
                .addField("Características do jogador:", carac)
                .addField("Por que deveríamos escolher você para nossa equipe?:", entrevista)
                .setThumbnail(usuarioicone)
                .setColor('#90EE90')
                let canal = client.channels.get("593240490908844034").send(form)
                .then(async (msg) => {
                  await msg.react("✔");
                  await msg.react("❌");
              });
                }
                if (r.content.toLowerCase() == "cancelar") {
                message.author.send({embed: {description: "O envio de sua aplicação foi cancelado!"}});                        
           
            }
 });
        });
        });
        });
        });
        });
        });
        });
              });
            })
        })};
 