What you need:
Tutorial video
Discord bot token
Discord Developer Portal
Replit
UptimeRobot

You will need Replit and UptimeRobot to make the bot active even a year.
Watch Here How to make a Discord Bot using node.js. Video Credits: freeCodeCamp
https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/

1. Make a new bot in Discord developer portal
2. Name the bot like Safety is our Priority.
3. upload  the pfp for your new bot
4. Copy the token after its done. go to link above for specific tutorial. The token must not be exposed to public.
5. Open Replit.com in your browser and create a new repl.
6. the language will be node.js
7. Switch the console to shell and type these.
npm init
Install discord.js packages.
npm install discord.js
npm install discord.js axios dotenv

6. In the index.js file, type the following code. This can delete messages, send warning message.
Next to message.reply, feel free to replace the warning text in the brackets. (line 17)
You can add more badd words in const noNoWords (line 8)
You can change the slash commands in const prefix (line 6) The default slash commands is ?.

7. Add a file called config.json and type the following code. Replace BOT TOKEN with your token that you've just copied.
8. Now test it. using the command ?pong ?sum.
9. Now test it if the message with bad words is deleted then the bot will send the warning text.
10. Go back to the video to make it active forever.
