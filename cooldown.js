// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();

if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
    
    let cooldown = 43200000; // 12 hours in ms

  let lastDaily = await db.fetch(`daily_${message.author.id}`);

  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    // If user still has a cooldown
    let timeObj = ms(cooldown - (Date.now() - lastDaily)); // timeObj.hours = 12
} else {
    // Otherwise they'll get their daily
  }
