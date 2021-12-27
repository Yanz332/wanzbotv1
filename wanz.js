//MAU APA? MO EDIT DI SETTING.JSON AJA
//MAU YANG NO ENC? BUY DI GUA WA : 087828930441
const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
ChatModification,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
Browsers,
} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const ggs = require('google-it')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { jadibot, stopjadibot, listjadibot } = require ('./lib/jadibot');
const { uncache, nocache } = require('./lib/loader')
const { cmdadd } = require('./lib/totalcmd.js')
const { iklan } = require('./store/iklan.js')
const { iklan2 } = require('./store/iklan2.js')
const { iklan3 } = require('./store/iklan3.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { hole, api, beku, korak, petasan, es, mata, black, naga }= require('./lib/hole.js')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const { virtex, vipi } = require('./lib/virtex.js')
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let imagewanz =  fs.readFileSync("./media/wanz.jpg")
let fakeimage = fs.readFileSync("./media/wanz.jpg")
let thumb = fs.readFileSync("./media/wanz.jpg")
let imgcel = fs.readFileSync("./media/wanz.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

//FAKE NYA BANG
wanzfake = setting.wanzfake
fake = setting.fake
//Ganti No Owner Ok
const Tag = setting.tag

//setting lainya
bot = setting.bot
ig = setting.ig
wanzkey = setting.Wanzkey
owner = setting.owner
gamewaktu = setting.gamewaktu
gopay = setting.gopay
dana = setting.dana
ovo = setting.ovo
pulsa = setting.pulsa

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

//ADA LAH
offline = false
antitags = true

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

// Sticker Cmd
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = wanz = async (wanz, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		var num = "6287828930441@s.whatsapp.net"
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	    const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        let Verived = "0@s.whatsapp.net"
        const Bfake = fs.readFileSync ('./media/wanz.jpg','base64')
  
        const botNumber = wanz.user.jid
        const owner = setting.owner
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? wanz.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await wanz.chats.all()
		const groupMetadata = isGroup ? await wanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? wanz.user.jid : wanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? wanz.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBanned = ban.includes(sender)
        const isWelkom = isGroup ? welkom.includes(from) : false
        
//Button
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            wanz.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await wanz.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            wanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: mek,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return wanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam🏙'
}
            //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
wanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Tekan Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `DAFTAR`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = wanz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return wanz.relayWAMessage(po, {waitForAck: true})
        }
        const katalog = (teks) => {
            res = wanz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "Its Me Wanz Botz ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : Wanz Botz", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:meki})
            wanz.relayWAMessage(res)
        }        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagewanz, surface: 200, message: fake, orderTitle: 'Wanz Botz Boardcast', sellerJid: '0@s.whatsapp.net'} } }       

        const meki =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imgcel, surface: 200, message: fake, orderTitle: 'Its Me Wanz Botz ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : Wanz Botz', sellerJid: '0@s.whatsapp.net'} } }       
           
        const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: fakeimage, surface: 200, message: wanzfake, orderTitle: 'Its Me Wanz Botz ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : Wanz Botz', sellerJid: '0@s.whatsapp.net'} } } 
        function monospace(string) {
            return '```' + string + '```'
        }  
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const fyt = (teks) => {
            wanz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/J0YVFOD5QY4`}}})
        }    
        
        const fig = (teks) => {
            wanz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://www.instagram.com/p/CRNTp51AvjG/?utm_medium=copy_link   `}}})
        }
        const reply = (teks) => {
	      wanz.sendMessage(from, teks, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           wanz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? wanz.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wanz.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : wanz.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wanz.jpg')}, extendedText, { sendEphemeral: true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           wanz.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return wanz.sendMessage(from, teks, text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, thumbnail: fs.readFileSync('./media/wanz.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/wanz.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       wanz.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await wanz.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = wanz.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await wanz.groupRemove(to, [i])
        } else {
           await wanz.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
        let zero = fs.readFileSync ('./media/wanz.jpg')
        let costum = (pesan, tipe, target, target2) => {
			wanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
       const add = function(from, orangnya){
	       wanz.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       wanz.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
}
      const hideTag = async function(from, text){
	       let anu = await wanz.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       wanz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/wanz.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           wanz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           wanz.sendMessage(to, media, type, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6287828930441@g.us" }: {})},message:{"orderMessage":{"orderId":"6287828930441","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       wanz.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       wanz.sendMessage(from, hasil, type, options).catch(e => {
	       wanz.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await wanz.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = wanz.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await wanz.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await wanz.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = wanz.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await wanz.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = wanz.contacts[from] != undefined ? wanz.contacts[from].vname || wanz.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
//
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        //BUG TROL
       const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${ownerName}`,
						"orderTitle": `${ownerName}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
        //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                wanz.groupRemove(from, [sender])
            }
        }
        
        //RUNTIME BIO NYA
         let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await wanz.setStatus(`${botName} Aktif Selama: ${uptime} | Baterai : ${baterai}% ${charging ? 'lagi dicas' : 'ga dicas'}`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
        // Sewa
             _sewa.expiredCheck(wanz, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(wanz, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                wanz.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *@tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					wanz.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}			
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        wanz.chatRead(from, "read")
        
         // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
	              switch(command){  	                   
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!menu',buttonText:{displayText: 'MENU'},type:1},{buttonId:'!igowner',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Lupa Save Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await wanz.prepareMessageFromContent(from,{buttonsMessage},{})
               wanz.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await wanz.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
wanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      case 'patner':
               list = []
               listmenu = [`kizakixd`,`fauzan`,`dzz`,`akira`,`devil`,`vizz`,`Wanz`,`Devilni`,`rafata`,`kunz`,`bima`,`zyy`]
               listmenuu = [`𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`,`𝙁𝙖𝙭𝙭 𝙕𝙖𝙣`,`𝘿𝙯𝙯`,`𝘼𝙠𝙞𝙧𝙖`,`𝘿𝙚𝙫𝙞𝙡`,`𝙑𝙞𝙯𝙯𝘽𝙤𝙩𝙯`,`𝙒𝙖𝙣𝙯𝘽𝙤𝙩𝙯`,`𝘿𝙝𝙖𝙣𝙞𝘽𝙤𝙩𝙯`,`𝙧𝙖𝙛𝙖𝙩𝙖𝙗𝙤𝙩𝙯`,`𝙠𝙪𝙣𝙯𝘽𝙤𝙩𝙯`,`𝘽𝙞𝙢𝙖𝘽𝙤𝙩𝙯`,`𝙕𝙮𝙮𝘽𝙤𝙩𝙯`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Ini List patner Nya Kak >\\<`,`  `, list)
               break
   case 'kizakixd': 
               sendKontak(from, `6285878313791`, `𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`, 'Sibukk!!')
               break
   case 'fauzan': 
               sendKontak(from, `6289516004292`, `𝙁𝙖𝙭𝙭 𝙕𝙖𝙣`, 'Sibukk!!')
               break 
   case 'dzz': 
               sendKontak(from, `6288226487112`, `𝘿𝙯𝙯`, 'Sibukk!!')
               break
   case 'akira': 
               sendKontak(from, `6287705048235`, `𝘼𝙠𝙞𝙧𝙖`, 'Sibukk!!')
               break
   case 'devil': 
               sendKontak(from, `6281333603591`, `𝘿𝙚𝙫𝙞𝙡`, 'Sibukk!!')
               break  
   case 'Wanz': 
               sendKontak(from, `6287828930441`, `𝙒𝙖𝙣𝙯𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break  
   case 'vizz': 
               sendKontak(from, `62858840253594`, `𝙑𝙞𝙯𝙯 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break  
   case 'Devilni': 
               sendKontak(from, `6281333603591`, `𝘿𝙝𝙖𝙣𝙞 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break  
   case 'rafata': 
               sendKontak(from, `6287704764819`, `𝙧𝙖𝙛𝙖𝙩𝙖 𝙗𝙤𝙩𝙯`, 'Sibukk!!')
               break                                            
   case 'kunz': 
               sendKontak(from, `6287778886786`, `𝙠𝙪𝙣𝙯 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break
   case 'bima': 
               sendKontak(from, `6283849660579`, `𝘽𝙞𝙢𝙖 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break   
   case 'zyy': 
               sendKontak(from, `6289527058808`, `𝙕𝙮𝙮 𝘽𝙤𝙩𝙯`, 'Sibukk!!')
               break
      case 'bay':
      reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima tapi kalo lu balik harus donasi')
      break
      case 'selamatdatang':
      reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka\nSemoga betah👏')
      break      
case 'menu':
case 'help':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
timestampe = speed();
latensie = speed() - timestampe
gambar = fs.readFileSync('./media/wanz.jpg')
teks =
`𝗛𝗔𝗟𝗟𝗢... ${pushname}, ${ucapanWaktu}
𝗔𝗣𝗔 𝗞𝗔𝗕𝗔𝗥??  𝗦𝗘𝗠𝗢𝗚𝗔 𝗛𝗔𝗥𝗜𝗠𝗨 𝗦𝗨𝗥𝗔𝗠!

[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
𝙉𝙖𝙢𝙖 𝘽𝙤𝙩 : ${botName}
𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝘽𝙤𝙩 : ${setting.wanzfake}
𝙉𝙖𝙢𝙖 𝙊𝙬𝙣𝙚𝙧 : ${ownerName}
𝙉𝙤𝙢𝙚𝙧 𝙊𝙬𝙣𝙚𝙧 : ${owner}
𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
𝙎𝙥𝙚𝙚𝙙 : ${latensie.toFixed(4)} second
𝙇𝙞𝙗 : Baileys
𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚 : NodeJs

[ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ]
𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂
• ${prefix}bc
• ${prefix}tobc
• ${prefix}restart
• ${prefix}shutdown

𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗠𝗲𝗻𝘂
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}attp
• ${prefix}ttp
• ${prefix}spatrick
• ${prefix}stikermeme1
• ${prefix}stikermeme2
• ${prefix}stikermeme3
• ${prefix}tomp3
• ${prefix}tovideo

𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂
• ${prefix}tiktok
• ${prefix}ytmp4
• ${prefix}ytmp3
• ${prefix}tiktok
• ${prefix}fb
• ${prefix}twitter
• ${prefix}brainly

𝗦𝗲𝗿𝘁𝗶 𝗠𝗲𝗻𝘂
• ${prefix}sertiff1
• ${prefix}sertiff2
• ${prefix}sertiff3

𝗪𝗶𝗯𝘂 𝗠𝗲𝗻𝘂
• ${prefix}waifu
• ${prefix}husbu
• ${prefix}hentai
• ${prefix}loli
• ${prefix}cosplay

𝗔𝘀𝘂𝗽𝗮𝗻 𝗠𝗲𝗻𝘂
• ${prefix}jilbab
• ${prefix}random
• ${prefix}bocil

𝗦𝘁𝗼𝗿𝗮𝗴𝗲 𝗠𝗲𝗻𝘂
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed`

but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SC' }, type: 1 },
        ]
        sendButLocation(from, teks, wanzfake, gambar, but)
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
anu =`SILAHKAN PILIH SALAH SATU`
punten = [
          { buttonId: `${prefix}welcome enable`, buttonText: { displayText: 'ON' }, type: 1 },{ buttonId: `${prefix}welcome disable`, buttonText: { displayText: 'OFF' }, type: 1 },
        ]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By Wanz Botz',
buttons: punten,
headerType: 1
}
await wanz.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: mek})
}
break
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await wanz.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
wanz.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case "antivirtex":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`𝑱𝒂𝒅𝒊𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑫𝒖𝒍𝒖 𝑪𝒖𝒌 🗿`)
if (args[0] == "enable") {
if (isAntivirtex) return reply("𝑼𝒅𝒂𝒉 𝑨𝒌𝒕𝒊𝒇 𝑪𝒐𝒌 𝑵𝒈𝒂𝒑𝒂𝒊𝒏 𝑫𝒊 𝑼𝒍𝒂𝒏𝒈𝒊");
antivirtex.push(from);
fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex))
reply("Sukses mengaktifkan fitur antivirtex di group ini ✅")
} else if (args[0] == "disable") {
antivirtex.splice(from, 1);
fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex))
reply("Sukses menonaktifkan fitur antivirtex di group ini ✅")
} else {
anu =`SILAHKAN PILIH SALAH SATU`
punten = [
{ buttonId: `${prefix}antivirtex enable`, buttonText: { displayText: 'ON' }, type: 1 },{ buttonId: `${prefix}antivirtex disable`, buttonText: { displayText: 'OFF' }, type: 1 },
]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By Wanz Botz',
buttons: punten,
headerType: 1
}
await wanz.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: mek})
}
break       
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (args[0] == "enable") {
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
} else if (args[0] == "disable") {
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else {
anu =`SILAHKAN PILIH SALAH SATU`
punten = [
{ buttonId: `${prefix}antilink enable`, buttonText: { displayText: 'ON' }, type: 1 },{ buttonId: `${prefix}antilink disable`, buttonText: { displayText: 'OFF' }, type: 1 },
]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By Wanz Botz',
buttons: punten,
headerType: 1
}
await wanz.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: mek})
}
break
case 'group':
case 'grup':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
wanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
wanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await wanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
wanz.sendMessage(from, yeh, text, { quoted: mek })
break
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
wanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
wanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
wanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
wanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
wanz.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
wanz.groupUpdateSubject(from, `${body.slice(9)}`)
wanz.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
wanz.groupUpdateDescription(from, `${body.slice(9)}`)
wanz.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'hidetag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await wanz.downloadAndSaveMediaMessage(mek, './sticker/media_user')
await wanz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
wanz.updatePresence(from, Presence.composing)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
anu = await wanz.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await wanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
wanz.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await wanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
wanz.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await wanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
wanz.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
contentText: `${body.slice(4)}`,
footerText: '*_BROADCAST BY ©WANZ BOTZ_*',
buttons: buttons,
headerType: 1
}
await wanz.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: mek})
}
reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
}
break

case 'sticker':
case 'stiker':
case 's':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await wanz.downloadAndSaveMediaMessage(encmedia, './sticker/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jan Lupa Subs Wanz Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await wanz.downloadAndSaveMediaMessage(encmedia, './sticker/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await wanz.downloadAndSaveMediaMessage(encmedia, './sticker/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
wanz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'sertiff1':
lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti1/img.php?nama=${q}`)
wanz.sendMessage(from, lol, image, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'sertiff2':
lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti2/img.php?nama=${q}`)
wanz.sendMessage(from, lol, image, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'sertiff3':
lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti3/img.php?nama=${q}`)
wanz.sendMessage(from, lol, image, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
let inilist = []
for (let i of ownerNumber) {
let vname = wanz.contacts[i] != undefined ? wanz.contacts[i].vname || wanz.contacts[i].notify : undefined
inilist.push({
"displayName": 'WanzBotz',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await wanz.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tt', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await wanz.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: mek})
break      
case 'report':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek })
var nomor = mek.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
wanz.sendMessage(`6287828930441@s.whatsapp.net`, options, text, { quoted: mek })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/Wanz Botz`
wanz.sendMessage(from, teks, text, {quoted: mek})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/wanz_store_05`
wanz.sendMessage(from, teks, text, {quoted: mek})
break
case 'tt':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@wanz_botz`
wanz.sendMessage(from, teks, text, {quoted: mek})
break
case 'tobc':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
wanz.updatePresence(from, Presence.composing)
anu = await wanz.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await wanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
wanz.sendMessage(_.jid, buff, audio, { quoted: mek })
}
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await wanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
wanz.sendMessage(_.jid, buff, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
} else{
reply('reply sticker/audio')
}
break
case 'sourcecode':
case 'script':
case 'sc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
teks = `[ 𝗜𝗡𝗙𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧 ]
Creator : Wanz Botz
Script : Belom Rilis Cok`
wanz.sendMessage(from, teks, text, {quoted : mek})
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOAD ]━━━━━━━━━━━━━━━━━//
case 'ttdl':
case 'tiktok':
case 'tiktokdl':
case 'tiktoknowm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n?? *Desc*: ${data.result.title}`
buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
imageMsg = ( await wanz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
contentText:`${result}`,buttons,headerType:4}
prep = await wanz.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wanz.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'tt1':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_url = args[0]
ini_url = `https://wanz-apikeyyyy.herokuapp.com/api/tiktok?url=${q}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.nowm)
await wanz.sendMessage(from, ini_buffer, video, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'ttaudio': 
case 'tiktokmusic': 
case 'tiktokaudio':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
ini_url = args[0]
ini_url = `https://wanz-apikeyyyy.herokuapp.com/api/tiktok?url=${q}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.nowm)
await wanz.sendMessage(from, ini_buffer, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
break
break
case 'fb':
case 'facebook':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
try {
anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=WanzBotz`)
sendMediaURL(from, anu.result.hd)
} catch (e) {
console.log(e)
reply(`${e}`)
}
break
case 'twitter':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
if (!q) return reply('Linknya?')
ten = args[0]
var res = await twitterGetUrl(`${ten}`)
.then(g => {
ren = `${g.download[2].url}`
sendMediaURL(from,ren,'Done')
})
break
case 'brainly':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
reply(mess.wait)
brainly(args.join(" ")).then(res => {
hmm = '────────────\n'
for (let Y of res.data) {
hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
reply(hmm)
console.log(res)
})
break
case 'premium': 
if (!isOwner) return reply(mess.only.owner)
if (args[0] === 'add') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
} else {                         
premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
} else if (args[0] === 'del') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
} else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
reply(mess.success)
}
} else {
reply(mess.wrongFormat)
}
break
case 'premiumcheck':
case 'cekpremium': 
if (!isPremium) return reply(mess.only.premium)
const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
break
case 'listprem':
case 'listpremium':          
let txt = `「 *PREMIUM USER LIST* 」\n\n`
let men = [];
for (let i of _premium){
men.push(i.id)
const checkExp = ms(i.expired - Date.now())
txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
mentions(txt, men, true)
break
case 'ssweb':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
reply(mess.wait)
ini_link = args[0]
ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
await wanz.sendMessage(from, ini_buffer, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}} })
break
case 'nhentai':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
reply(mess.wait)
henid = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
get_result = get_result.result
ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
ini_txt += `Title Native : ${get_result.title_native}\n`
ini_txt += `Read Online : ${get_result.read}\n`
get_info = get_result.info
ini_txt += `Parodies : ${get_info.parodies}\n`
ini_txt += `Character : ${get_info.characters.join(", ")}\n`
ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
ini_txt += `Artist : ${get_info.artists}\n`
ini_txt += `Group : ${get_info.groups}\n`
ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
ini_txt += `Categories : ${get_info.categories}\n`
ini_txt += `Pages : ${get_info.pages}\n`
ini_txt += `Uploaded : ${get_info.uploaded}\n`
reply(ini_txt)
break
case 'ytmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=u&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await wanz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await wanz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `youtube.mp4`, quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'ytmp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${setting.lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await wanz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await wanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `youtube.mp4`, quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'ytsearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${setting.lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'playmp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${settings.lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${settings.lolkey}&url=${c}/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await wanz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: caption })
get_audio = await getBuffer(result.link)
await wanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek})
})
})
break
case 'playmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${settings.lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${settings.lolkey}&url=${c}/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await wanz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: caption })
get_audio = await getBuffer(result.link)
await wanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek})
})
})
break
case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
image = fs.readFileSync('./media/wanz.jpg')
teks =
`Silahkan Pilih Tipe File Yg Mau Di Download`
but = [
{ buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },{ buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: 'MUSIC' }, type: 1 }
]
sendButLocation(from, teks, faketeks, image, but)
break
//wibu menu by wanz botz
case 'loli':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await fetchJson (`https://melcanz.com/${command}?apikey=fh2HGkDe`)
buff = await getBuffer(anu.result)
await wanz.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
case 'hentai':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await fetchJson (`https://api-wanz.herokuapp.com/docs/nsfw/hentai?apikey=WanzBotz`)
buff = await getBuffer(anu.result)
await wanz.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'manga':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson (`https://rest-wanz.herokuapp.com/api/manga?search=${q}&apikey=wanz`)
get_result = get_result.result
ini_txt1 = `Name Manga : ${get_result.name}`
ini_txt2 = `Author : ${get_result.author}`
ini_txt3 = `Genre : ${get_result.genre}`
ini_txt4 = `Rating : ${get_result.rating}`
ini_txt5 = `Rilis : ${get_result.released}`
ini_txt = `Description : ${get_result.description}`
thumbnail = await getBuffer(get_result.thumb)
await wanz.sendMessage(from, thumbnail, image, { quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ini_txt })
break
case 'loli':
case 'husbu':
case 'milf':
case 'waifu':
case 'cosplay':
case 'wallml':
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = ( await wanz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wanz.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
wanz.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
//Random Text
case 'quotes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
quotes = await fetchJson(`https://rest-wanz.herokuapp.com/api/randomquote?apikey=wanz`)
quotes = quotes.result
author = quotes.author
quotes = quotes.quotes
reply(`_${quotes}_\n\n*― ${author}*`)
break
//Asupan Menu by Wanz Botz
case 'bocil':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await getBuffer (`https://api-wanz.herokuapp.com/docs/asupan/bocil?apikey=WanzBotz`)
wanz.sendMessage(from, anu, video, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'jilbab':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await getBuffer (`https://api-wanz.herokuapp.com/docs/asupan/ukhty?apikey=WanzBotz`)
wanz.sendMessage(from, anu, video, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
case 'random':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
anu = await getBuffer (`https://api-wanz.herokuapp.com/docs/asupan/gheayubi?apikey=WanzBotz`)
wanz.sendMessage(from, anu, video, {quoted: mek, caption: 'Nih Jangan Lupa Subscribe Wanz Botz'})
break
//convert
case 'tomp3':
wanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await wanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
wanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await wanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
wanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Wanz Botz' })
fs.unlinkSync(ran)
})
break
//donasi
case 'donasi':
dona = fs.readFileSync('./media/wanz.jpg')
doni =`
──「 𝖬𝖤𝖭𝖴 𝖣𝖮𝖭𝖠𝖳𝖤 」──\n\nHi ${pushname} 👋🏻\n\`\`\`GOPAY : 087828930441\`\`\`\n\`\`\`DANA : 087828930441\`\`\`\n\`\`\`PULSA : 087828930441 (XL)\`\`\`\n𝖳𝖾𝗋𝗂𝗆𝖺𝗄𝖺𝗌𝗂𝗁 𝗎𝗇𝗍𝗎𝗄 𝗄𝖺𝗆𝗎 𝗒𝖺𝗇𝗀 𝗌𝗎𝖽𝖺𝗁 𝖽𝗈𝗇𝖺𝗌𝗂 𝗎𝗇𝗍𝗎𝗄 𝗉𝖾𝗋𝗄𝖾𝗆𝖻𝖺𝗇𝗀𝖺𝗇 𝖻𝗈𝗍 𝗂𝗇𝗂 \n──「 𝖳𝖧𝖷 𝖥𝖮𝖱 𝖸𝖮𝖴 ! 」──`
wanz.sendMessage(from, dona, image, { quoted: mek, thumbnail: dona, caption: doni })
break
case 'sewabot':
wanz.sendMessage(from, iklan(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
break
case 'payment':
wanz.sendMessage(from, iklan2(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
break
case 'iklan3':
wanz.sendMessage(from, iklan3(prefix), MessageType.text, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
break
//verify
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `
╭─❒ 「 Verify 」 ❒
│ Nama : ${pushname}
│ Nomor : @${sender.split('@')[0]}
│ Seri: ${serialUser}
│ Pengguna: ${_registered.length}
└❏「 ${setting.bot} 」❒`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await wanz.prepareMessage(from, fakeimage, image, {thumbnail: fakeimage})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_© wanz_*', 
buttons: gbutsan,
headerType: 4
}
wanz.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:mek, contextInfo: { mentionedJid: [sender]}})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
break
//Akhir Dari Semua Menu
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return wanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
