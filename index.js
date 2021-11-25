const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "?";

const noNoWords = ["sex", "condum", "fuck", "sexy", "shit", "sucker", "motherfucker", "fucc"]

client.on("message", function(message) { 
  var content = message.content;
  var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            message.reply("Don't Send INAPROPRIATE messages. please read #rules📙📘📗📕🔗 for more information");
            break
        }
    }

  if (message.author.bot) return;  
  if (!message.content.startsWith(prefix)) return;
  
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  
  if (command === "pong") {
     const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);                      
  }  
  
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  
});

require('http').createServer((_, res) => res.end("Nothing here! This is for a discord bot. Join My discord server: https://discord.com/invite/SrGJhjbqaY")).listen(8080)
client.login(config.BOT_TOKEN);
