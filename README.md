# What you need
- Discord bot token
- Discord Developer Portal
- Replit (Repl.It)
- UptimeRobot

You will need Replit and UptimeRobot to make the bot active even a year.

# Making a Discord Bot
1. In the Discord Developer Portal, Create a new application.
2. 
3. Name the bot like Safety is our Priority.
4. upload  the pfp for your new bot
5. in the Build-A-Bot section find the word token.
6. click to reveal the token
7. go to the url displayed.
8. Copy the token after its done.  The token must not be exposed to others. It should looks lik this.
ODAxNjE0OTgzODg4MTA5NTY4.YAjQIQ.FTXq6C1uNgTYQLlcwbYRxuLiHqE
10. Open [Replit.com][1] [1]: https://replit.com in your browser and create a new repl.
11. the language will be node.js
12. Switch the console to shell and type these.
13. ```npm init```

To install discord.js packages.
```
npm install discord.js
```
```
npm install discord.js axios dotenv
```

6. In the ```index.js``` file, type the following code. This can delete messages, send warning message.
Next to ```message.reply```, feel free to replace the warning text in the brackets. (line 17)
You can add more bad words in ```const noNoWords``` (line 8)
You can change the slash commands in ```const prefix``` (line 6) The default slash commands is ```?```.

7. Add a file called ```config.json``` and type the following code. Replace ```BOT TOKEN``` with your token that you've just copied.
8. Now test it. using the command ```?pong``` ```?sum```. make sure you've run the repl
9. Now test it if the message with bad words is deleted then the bot will send the warning text.
10. Go back to Replit.
11. Re-run the script. 
12. Copy the link at the top of a blank page.
13. Go to [UptimeRobot][1] [1]: https://uptimerobot.com .
14. create a new monitor.
15. paste the link you've copied from replit.
16. save the monitor.
