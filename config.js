import { watchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))

/*⭑⭒━━━✦❘༻☾⋆⁺₊✧ 𝓿𝓪𝓻𝓮𝓫𝓸𝓽 ✧₊⁺⋆☽༺❘✦━━━⭒⭑*/

global.prefisso = '!'
global.sam = ['212679283897',]
global.owner = [
  ['212679283897', 'endy', true],
  ['12343764029', 'estreia', true],
  ['5511967898841', 'ksav', true],
  ['212722652082', 'medalis', true],
  ['393926427789', 'cristian', true],
  ['393518077116', 'xyra', true],
  ['628999029018', 'drali', true],
  ['212786300182', 'gabry', true],
  ['212612902096', 'askey', true],
  ['212775270361', 'zyno', true],

]
global.mods = ['393514357738', '393511082922', '393392645292']
global.prems = ['393514357738', '393511082922', '212614769337']

/*⭑⭒━━━✦❘༻🩸 INFO BOT 🕊️༺❘✦━━━⭒⭑*/

global.nomepack = '𝐙𝚬𝑌𝐍𝟎 𝚩𝚯𝚃'
global.nomebot = '𝐙𝚬𝑌𝐍𝟎 𝚩𝚯𝚃'
global.wm = '𝐙𝚬𝑌𝐍𝟎 𝚩𝚯𝚃'
global.autore = '乇几ᗪㄚ'
global.dev = '乇几ᗪㄚ'
global.testobot = `ꫀꪀᦔ-᥇ꪮꪻ`
global.versione = pkg.version
global.errore = '⚠️ *Errore inatteso!* Usa il comando `.segnala <errore>` per avvisare lo sviluppatore.'

/*⭑⭒━━━✦❘༻� LINK 🌐༺❘✦━━━⭒⭑*/

global.repobot = 'https://github.com/Endy14-sudo/Qira-bot'
global.gruppo = 'https://chat.whatsapp.com/EYakbP0qa2RJkSodReJExC?mode=hqctcla'
global.canale = 'https://whatsapp.com/channel/0029Vb7DfzZ7Noa0LayyC90q'
global.insta = 'https://www.instagram.com/zynobot.md?igsh=bHdvcG10bGFoeHo2'

/*⭑⭒━━━✦❘🗝️ API KEYS 🌍༺❘✦━━━⭒⭑*/

// Le keys con scritto "varebot" vanno cambiate con keys valide
// Nel README.md ci sono i vari link per ottenere le keys

global.APIKeys = {
    spotifyclientid: 'varebot',
    spotifysecret: 'varebot',
    browserless: 'varebot',
    tmdb: 'varebot',
    ocrspace: 'jjjsheu',
    assemblyai: 'varebot',
    google: 'varebot',
    googleCX: 'varebot',
    genius: 'varebot',
    removebg: 'varebot',
    openrouter: 'varebot',
    sightengine_user: 'varebot',
    sightengine_secret: 'varebot',
    lastfm: 'varebot',
}

/*⭑⭒━━━✦❘༻🪷 SISTEMA XP/EURO 💸༺❘✦━━━⭒⭑*/

global.multiplier = 1

/*⭑⭒━━━✦❘༻📦 RELOAD 📦༺❘✦━━━⭒⭑*/

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href

const reloadConfig = async () => {
  console.log(chalk.bgHex('#3b0d95')(chalk.white.bold("File: 'config.js' Aggiornato")))
  try {
    await import(`${fileUrl}?update=${Date.now()}`)
  } catch (e) {
    console.error('[ERRORE] Errore nel reload di config.js:', e)
  }
}

watchFile(filePath, reloadConfig)