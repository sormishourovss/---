module.exports.config = {
	name: "video2",
	version: "1.0.3",
	Permssion: 0,
	credits: "Farhan",
	description: "Random video",
 prefix: true,
	Category: "mcs-team",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("╭•┄┅══𝐅𝐀𝐑𝐇𝐀𝐍 𝐈𝐒𝐋𝐀𝐌══┅┄•╮\n\n★★★★╰┈►𝐀𝐥𝐥-𝐕𝐈𝐃𝐄𝐎-𝐋𝐈𝐒𝐓◄┈╯★★★★\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n❶ 𝐂𝐏𝐌-𝐕𝐈𝐃𝐄𝐎\n❷ 𝐒𝐇𝐎𝐑𝐓-𝐕𝐈𝐃𝐄𝐎\n❸ 𝐒𝐀𝐃-𝐕𝐈𝐃𝐄𝐎\n❹ 𝐒𝐓𝐀𝐓𝐔𝐒-𝐕𝐈𝐃𝐄𝐎\n❺ 𝐒𝐇𝐀𝐈𝐑𝐈-𝐕𝐈𝐃𝐄𝐎\n❻ 𝐁𝐀𝐁𝐀𝐘-𝐕𝐈𝐃𝐄𝐎\n❼ 𝐀𝐍𝐈𝐌𝐄-𝐕𝐈𝐃𝐄𝐎\n❽ 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍-𝐕𝐈𝐃𝐄𝐎\n❾ 𝐈𝐒𝐋𝐀𝐌-𝐕𝐈𝐃𝐄𝐎\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n★★★𝐇𝐎𝐓-𝐕𝐈𝐃𝐄𝐎-𝐋𝐈𝐒𝐓★★★\n ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n❶⓿ 𝐇𝐎𝐓-𝐕𝐈𝐃𝐄𝐎\n❶❶ 𝐈𝐓𝐄𝐌-𝐕𝐈𝐃𝐄𝐎\n❶❷ 𝐂𝐎𝐏𝐄𝐗-𝐕𝐈𝐃𝐄𝐎\n❶❸ 𝐂𝐎𝐏𝐄𝐗2-𝐕𝐈𝐃𝐄𝐎\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nএই বার্তাটি রিপ্লে করে আপনি কতগুলি\n ভিডিও নাম্বর দেখতে চান তা আমাকে বলুন৷\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n★★★ 𝐀𝐏𝐈-𝐁𝐘-𝐅𝐀𝐑𝐇𝐀𝐍-𝐈𝐒𝐋𝐀𝐌 ★★★\n\n╰•┄┅══ https://www.facebook.com/FarhanIslamImon.official?mibextid=ZbWKwL ═┅┄•╯", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "╭•┄┅══𝐅𝐀𝐑𝐀𝐍-𝐈𝐒𝐋𝐀𝐌══┅┄•╮\n\n এই যে নিন আপনার চয়েস করা ভিডিও\n\n╰•┄┅══ফারহান - ইসলাম══┅┄•╯",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var   h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/cpl";
        else if ("2" == a.body)
         var   h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/short";
        else if ("3" == a.body)
          var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/sadvideo";
        else if ("4" == a.body)
          var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/status";
        else if ("5" == a.body)
          var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/shairi";
        else if ("6" == a.body)
          var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/baby";
        else if ("7" == a.body)
          var  h = "https://videos-api--xaikon4y4n.repl.co/video/anime";
        else if ("8" == a.body)
         var   h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/humaiyun";
        else if ("9" == a.body)
         var  h = "https://videos-api--xaikon4y4n.repl.co/video/islam";
         else if ("10" == a.body)
         var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/copex";
        else if ("11" == a.body)
         var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/copex2";
         else if ("12" == a.body)
         var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/hot";
        else if ("13" == a.body)
         var  h = "https://b3d9l-ap1.b4d9lap1.repl.co/video/item";
        return { p, h };
    }
};
