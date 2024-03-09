module.exports.config = {
  name: "goiadmin3",
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
  if (event.senderID !== "100093703661837") {
    var aid = ["100093703661837"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস রিফাত এর বউ এর নাম..!😠🥰⛏️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
