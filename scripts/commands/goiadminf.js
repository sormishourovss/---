const fs = require("fs");
module.exports.config = {
	    name: "fackull13",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "commands",
    usages: "goiadmin",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mim")==0 || event.body.indexOf("MIM")==0 || event.body.indexOf("@Ew'r Mim")==0 || event.body.indexOf("farhan ar bow")==0) {
		var msg = {
				body: " খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস ফারহান এর বউ এর নাম..!😠🥰⛏️",
				attachment: fs.createReadStream(__dirname + `/noprefix/mim.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
