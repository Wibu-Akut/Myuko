const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    zahwa: 'https://api.zahwazein.xyz'
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    'https://api.zahwazein.xyz': 'zenzkey_af49663f77' // https://api.zahwazein.xyz
}
global.lolhuman = 'APOLOZEA' // https://api.lolhuman.xyz
global.keyai = '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' // https://platform.openai.com/account/api-keys
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'MyokuBotz-MD' // terserah sih 
global.namaowner = 'Xezx' // ganti juga 

//—————「 Setting Owner 」—————//
global.owner = ['6285740392651'] // ganti aja
global.ownernomer = "6285740392651" // ganti 
global.premium = ['6285740392651'] // ganti jadi nomor mu
global.ultah = 'Mei 24, 2023' // ulang tahun bot nya

//—————「 Setting Donasi 」—————//
global.dana = '6285740392651' // ganti terserah sih

//—————「 Set Kebutuhan Button 」—————//
global.email = 'naufalwijaya438@gmail.com' // bebas
global.namaweb = 'TikTok' // isi pake akun tiktok mu
global.myweb = 'https://tiktok.com/@FallXD425' //bebas
global.region = 'Indonesia' 
global.github = 'https://github.com/FallEzz' //terserah 
global.mygc = 'https://chat.whatsapp.com/KCYr0YwODJTEEFUlPxuNXQ' // link gc 
global.myig = 'https://instagram.com/fallxd789' // terserah 

//—————「 Set Wm 」—————//
global.packname = 'sᴛɪᴄᴋᴇʀ ʙʏ xᴇᴢᴢ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴\n𝚈𝚃:FallXD425'
global.botname = 'MyokuBotz V1' // terserah 
global.akulaku = 'MyokuBotz By Xezz' // terserah 
global.ttname = 'TikTok Kepvo'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#', '$', ',']

//—————「 Set Simbol 」—————//
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//—————「 Set Image 」—————//
//global.thumb = 'https://telegra.ph/file/9b9e2898d5ecfd9b374d8.jpg'
global.thumb = fs.readFileSync('./media/logo.png')
global.kurome = { url: 'https://a.uguu.se/faLPPBPP.mp4' }
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
