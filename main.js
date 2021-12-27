const { WAConnection, MessageType, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const { uncache, nocache } = require('./lib/loader')
const figlet = require('figlet')
const { wait, forks, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
const chalk = require('chalk');
const colors = require('colors');
const spin = require('spinnies');
const async = require('async');
const CFonts = require('cfonts');
const os = require('os');
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
baterai = 'unknown'
charging = 'unknown'

CFonts.say('Wanz Botz', {
  font: 'block',
  color: 'candy',
  align: 'center',
  gradient: ["red","magenta"],
  lineHeight: 3
})

CFonts.say(`THANKS TO`, {
  font: 'simple',
  align: 'center',
  color: 'red'
})

CFonts.say(`DEVILBOTZ\nWANZ\nARIFI RAZZAQ\nDHANI BOTZ\nZERO YT7`, {
  font: 'tiny',
  align: 'center',
  gradient: ['#f80', '#3456ff']
})
//setting
ownerNumber = setting.ownerNumber
ownerName = setting.ownerName
owner = setting.owner
botName = setting.botName
//nocache
require('./wanz.js')
nocache('../wanz.js', module => console.log(color('[UPDATE]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))

const starts = async (wanz = new WAConnection()) => {
	wanz.logger.level = 'warn'
	wanz.version = [2, 2140, 12]
	console.log(color('[ WANZ BOTZ ]', 'cyan'), color('Owner is online now!', 'green'))
	console.log(color('[ WANZ BOTZ ]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'green'))
	wanz.browserDescription = ["Wanz Botz", "Desktop", "3.0.0"];

	// Menunggu QR
	wanz.on('qr', () => {
	console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan QR Nya Bro jangan lupa Subs Wanz Botz'))
	})

	// Menghubungkan
	fs.existsSync(`./wanz.json`) && wanz.loadAuthInfo(`./wanz.json`)
	wanz.on('connecting', () => {
		console.log(color('[ WAIT ]', 'cyan'), color('Loading Bang Sabar Napa.......'));
	})

	//connect
	wanz.on('open', () => {
		console.log(color('[ WAIT ]', 'cyan'), color('Bot online. silahkan pake jangan lupa subscribe Wanz Botz!'));
	})

	// session
	await wanz.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./wanz.json`, JSON.stringify(wanz.base64EncodedAuthInfo(), null, '\t'))
    console.log(color('\n\n「 INFO BUAT OWNER 」','red'));
    console.log(color('Jangan Lupa Subscribe Channel ','red'));
    console.log(color('YouTube : Wanz Botz','yellow'));
    console.log(bgcolor('Agar Kamu Bisa Mengetahui','red'));
    console.log(color('Kapan Update Script Bot Terbaru Nantinya','red'));
    console.log(color('Sending Info Bot to Owner & Developer\n\n\n','red'));
  	wanz.sendMessage(`${ownerNumber}`, `Hai Owner ${ownerName}👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR ${ownerName}*\n[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
    wanz.sendMessage(`${owner}@s.whatsapp.net`, `---DATABASE BOT---\n\n•NAMA BOT : ${botName}\n•OWNER BOT : ${ownerName}\n•NOMER OWNER : wa.me/${owner}\n•Platform : ${os.platform()}\n•Hostname : ${os.hostname()}\n•Device: ${wanz.user.phone.device_model}\n•Wa Version: ${wanz.user.phone.wa_version}\n•Browser : chrome\n\n[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak ${ownerName} Scriptnyaa Moga Berkembang Terus]`, MessageType.extendedText, {sendEphemeral: true, })
    start('2',colors.bold.white('\nMenunggu Pesan Baru..'));
	//return Wanz
    
	// Baterai
	wanz.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	wanz.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	wanz.on('group-participants-update', async (anu) => {
		await welcome(wanz, anu)
	})

	wanz.on('chat-update', async (message) => {
		require('./wanz.js')(wanz, message)
	})
}

starts()