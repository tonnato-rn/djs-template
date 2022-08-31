const { Client } = require("discord.js")
const client = new Client({'intents': [1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536],'partials': [0,1,2,3,4,5,6]})
client.login("token")

client.on("messageCreate", async message => {
 const mention = await message.mentions.members.get(client.user.id)
 if(Object.keys(mention).length!=0) {
  //processing
 }
});
