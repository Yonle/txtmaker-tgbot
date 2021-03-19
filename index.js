const { Telegraf } = require("telegraf");
const { Readable } = require("stream");
const bot = new Telegraf("Y o u r  b o t  t o k e n");

bot.on('text', ctx => {
	var text = ctx.message.text;
	ctx.replyWithDocument({
		source: (() => new Readable.from(text.toString()))(),
		filename: `${ctx.message.from.first_name}.txt`
	}).catch(console.error);
});
bot.launch().then(() => console.log("Ready")).catch(console.error);
