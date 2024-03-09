	const fs = require("fs");
module.exports.config = {
	    name: "vĩnh biệt",
    version: "1.1.0",
    permission: 0,
    credits: "farhan",
    description: "noprefix",
    prefix: true,
    category: "No command marks needed",
    usages: "Goodbye Grandpa",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("By")==0 || (event.body.indexOf("by")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "👉বাই তো বললে সোজা অফলাইনে যাও, মেয়ে হলে অন্য কারো ইনবক্সে যেও না। গেলে আমার বস্ 𒄬𓆩๛⃝রিফাত‣᭄𓆪 এর ইনবক্সে যাও,😁🙈 .👉আর ছেলে হলে দূরে যাইয়া মর, 😼🥵",
				attachment: fs.createReadStream(__dirname + `/nayanmp4/farhan1.mp4`)
			}
						api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
