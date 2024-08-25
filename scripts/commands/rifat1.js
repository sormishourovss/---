module.exports.config = {
  name: "shourov1",
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
var link = ["https://i.postimg.cc/13j22KWT/Messenger-creation-91412df6-6e58-45b4-967c-4f320da81804.jpg"];

var callback = () => api.sendMessage({body:`আসসালামু আলাইকুম সকল মেম্বার ❤️👈

আশা করি সকলেই ভালো আছেন🥰

প্রতিটা মেম্বারদের উদ্দেশ্য করে বলছি 
আপনারা সবাই কলে সময় দিবেন।
☞প্রতিদিন মিনিমাম ২-৩ ঘন্টা কলে সময় দিবেন এবং এস এস দিবেন।


☞আর সবার বাধ্যতামূলক ১ ঘন্টার কলের এস এস দিতে হবে। 

☞আর প্রতিদিন আমরা ১০+ একটা সস নিব।

সকল মেম্বার প্রতিদিন রাত ৮ থেকে ৯ টা পর্যন্ত কলে থকবেন🥰🥰❤️

ধন্যবাদ সবাইকে ভালোবাসা অবিরাম 🥰🥰🥰👈`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
