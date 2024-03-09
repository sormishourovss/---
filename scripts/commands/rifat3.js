module.exports.config = {
  name: "rifat3",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "rules",
  category: "rules",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/4xYVK00r/417818702-1042410460191416-904330810786117240-n.jpg"];

var callback = () => api.sendMessage({body:`➤⃚͜͡░⃟̎̎̎̎̐💞কা্ঁনা্ঁ»̶̶͓͓͓̽̽̽»̶̶͓͓͓̽̽̽মা্ঁছি্ঁ🐝⑅⃝✺❥᭄

যারা বক্সে সময় দিবেন না কলে ৩থেকে৪ ঘন্টা সময় দিতে পারবেন না বা কলে এসে ১ মিনিট থেকে নেমে যাবেন তারা নিজ দায়িত্বে Left নিবেন তা না হলে এডমিনরা আপনাদেরকে রিমুভ করতে বাধ্য হবে👍👍👍

✺⃟✿-ভা্ঁলো্ঁবা্ঁসা্ঁ-আ্ঁন্ঁলি্ঁমি্ঁটে্ঁড্ঁ-✿⃟✺

╔╦══•    •✠•❀•✠ •   •══╦╗
♥    𝙂𝙧𝙤𝙪𝙥☬𝙁𝙤𝙪𝙣𝙙𝙚𝙧   ♥ 
                      ☟                     
❤️⚘ཻ͜͡Alex Rishan Aqualit⚘ཻ͜͡ ♥
╚╩══•    •✠•❀•✠ •    •══╩╝`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
