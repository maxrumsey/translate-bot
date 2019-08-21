const translate = require('./translate.js')
exports.message = async msg => {
  if (global.config.watched.includes(msg.channel.id)) {
    const translated = await translate(msg.content);
    msg.client.channels.get(global.config.output).send({embed: {
      description: translated,
      fields: [
        {
          name: 'Author',
          value: msg.author + ''
        },
        {
          name: 'Channel',
          value: msg.channel + ''
        }
      ]
    }})
  }
  if (!msg.content.startsWith(global.config.prefix)) return;
  let cleaned = msg.content.split('')
  for (var i = 0; i < global.config.prefix.length; i++) {
    cleaned.shift();
  }
  cleaned = cleaned.join('').split(' ')
  const command = cleaned[0];
  cleaned.shift()
  const args = cleaned.join(' ')
  if (command == 'help') {
    msg.channel.send('Check your DMs.')
    msg.author.send([
      'Translation Bot. Prefix: ' + global.config.prefix,
      'Commands: ',
      global.config.prefix + 'help',
      global.config.prefix + 'about',
      global.config.prefix + 'translate <MSG>'
    ].join('\n'))
  } else if (command == 'translate') {
    const translated = await translate(args);
    msg.channel.send('Output: ' + translated);
  } else if (command == 'about') {
    msg.channel.send('Made by the ProCord team. `Darth Maul#2237`. https://discord.gg/auHudND');
    msg.channel.send('Source Code: https://github.com/maxrumsey/translate-bot');
  }
}
exports.ready = () => {
  console.log("Bot has started.")
}
