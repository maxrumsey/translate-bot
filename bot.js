if (!process.env.TOKEN) {
  require('dotenv').config();
}
const config = global.config = require('./config.json')
process.env.GOOGLE_APPLICATION_CREDENTIALS = './My First Project-8181734a275f.json'
const discord = require('discord.js');
const Client = global.client = new discord.Client();

const framework = require('./framework/');

Client.on('message', framework.handlers.message);
Client.on('ready', framework.handlers.ready);
Client.on('error', e => {
  console.log(e);
})
Client.login(process.env.TOKEN, (e) => {
  if (e) {
    console.log(e);
    console.log('A fatal error occured. Exiting');
    process.exit(0);
  }
});
