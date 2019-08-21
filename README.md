# Translate Bot
What is Translate Bot?
Translate Bot is a Discord bot written in NodeJS with the discord.js library. It automatically translates messages from predefined channels and sends them to an output channel. It also has a manual t!translate command.

## Files
### config.json
```
{
  "watched": [
    "Discord Channel ID with foreign messages 1",
    "Discord Channel ID with foreign messages 2"
  ],
  "output": "Discord Channel ID of output channel",
  "prefix": "t!"
}
```
### .env
```
TOKEN=Discord Bot Token
PROJECTID=Google Web Console Project ID
```
### api.json
JSON file containing API keys.

## Hosting
1. Set out the files listed above, except for `api.json`.
2. Create a Google Cloud Platform Account.
3. Enable the Google Translate ML API.
4. Create a service account.
5. Download the JSON API key file.
6. Paste into project directory as `api.json`.
7. `node bot.js`
