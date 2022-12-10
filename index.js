const rpc = require("discord-rpc");
const colors = require("colors");
const config = require("./configuration/config.json");

const ID = config.clientId; //Id of your application
const details = config.details; //Your descriptions
const largeImageKey = config.largeImageKeyName; // Key to the large image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
const smallImageKey = config.smallImageKeyName; // Key to the small image (https://discord.com/developers/applications -> Rich Presence -> Art Assets)
const largeImageText = config.largeImageText; //Text when you put your mouse on the large image
const smallImageText = config.smallImageText; //Text when you put your mouse on the small image
const buttonOne = config.buttonOneText; //Name of the button
const buttonOneUrl = config.buttonOneURL; //URL of the button
const buttonTwo = config.buttonTwoText; //Name of the button
const buttonTwoUrl = config.buttonTwoURL; //URL of the button

rpc.register(ID);
const client = new rpc.Client({ transport: "ipc" });

client.on("ready", () => {
  console.clear();
  process.title = "Discord Custom RPC by @almightybtw";
  console.log("Discord custom rpc status made by".bgBlack, "@almightybtw" .blue .bgBlack);
  console.log("Status loaded succesfully." .bgBlack);
  console.log(`RPC connected` .green);
  client.setActivity({
    details: config.details,
    largeImageKey: config.largeImageKeyName,
    largeImageText: config.largeImageText,
    smallImageKey: config.smallImageKeyName,
    smallImageText: config.smallImageText,
    buttons: [
      {
        label: buttonOne,
        url: buttonOneUrl,
      },
      {
        label: buttonTwo,
        url: buttonTwoUrl,
      },
    ],
    startTimestamp: new Date(),
  });
});

const clientId = ID;
client.login({ clientId });
