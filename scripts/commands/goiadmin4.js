module.exports.config = {
  name: "goiadmin4",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100048969000715") {
    var aid = ["100048969000715"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রিফাত এর ভাইয়া এর নাম..!😠🥰⛏️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
