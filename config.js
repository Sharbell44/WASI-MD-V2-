//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "923135673658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Z1UUFBVTFWcXpaaHdFZ0Jxc1B0TjFFbVVmRFpMWTN6ckk4bkNJZ0cyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpUaHYrK2NSNEwrbjNtSnpOaEpFYXA1dFNsRDFtYXA0NWhGM3ZiYUNWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR25oTis4OFZxNWxmYWhUQ2dBTVB3S0swQm9XdXBaaHFFUWQwTUpPaFc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvODdEdG1Hek5uWVF1N21SU0p1MDU2TG9UZXltYTFoZFozUHdNbDBhdlZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJWndtZiswazdzK0JYWXRhbUFnRjBvaTFwL1JMS1FKajY1LzBURGlKWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhHUVZvUWtSRFdIbTdQR0dLVWtBTW1lMnZmQW1BeGdjbmpqVE8wYTBrdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZnN1NCNytYclc5ajd0S05UUWZUTDBBRkJ2YXB4Wll0YUNtMVE4TnZucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTJ5SHFVVVBxZVQyQTM2NGhNTzhrbldpcEg3ajZudks3TVRPbldGMVBBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQRUlqOUY4SlUzUGJ3aVl5TVpMejd3V1Z1bTNzRUdrdFE0RmcxdlEyY2FqY3djM21Oa0RGWmJMRmRvdFM5RUk5VVN3YTRkUXJlTTVNVWN1SzN0UWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IlFzYnVicXZ2LzJEbVRST0xtd05TTnB2c3dSVWJiU1Y2OWlLeUZHS3ZHNHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTM4MTcyMjY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlFNDZGRjdERTlBMkZERDg0NzYyMEVDNDI1RjNEOUVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgyNTMwMTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUzODE3MjI2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNzA4RkZEMDVBRkRCQzA1RTJBMzI1Q0JGNUJGNDlGQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MjUzMDExfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzM1MzgxNzIyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTlGRDJCRjFDNUNDRTA5RTRCMDJFRTM1NjM5QkMzMzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODI1MzAxNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTM4MTcyMjY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcwMUE5QTA3REMyMUY5OTU4RkYwQjEzMzZGODdDMzZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgyNTMwMTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imx2NExYQVZEVGgybTY5VGkyTS1oOWciLCJwaG9uZUlkIjoiMzE3NDg1ZjUtMTBhMS00NDQxLWFiMDktNjg5MTk4Nzk3Y2Y2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZxbGc2TmIzMFpzakNSYkNzMEtmaXoxOFU5OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3N3N3OVk5UWQxWHp0REJ6ak9KdlkwS00vems9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzc5NUhSWUQiLCJtZSI6eyJpZCI6IjIzMzUzODE3MjI2NzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdvZCdzIEdvb2QgTmV3c/CfmIcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0krVjg4a0RFTVNZakxnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IklrRC9uSUhvSmsxeGxDUnlNUm5EaTFGazNDWnpyZjZOb1F1cUJaS093Z1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhYVkZEeGZkR0p4YWREOVBrM2c2N0U5ZDQ5K1Z3ZTFRL1pOQ3NPc0tTQ2gvN0xPd3RwL0trVzJmSW8rdDVYWDZVbVFxOUMrbXRHbWxLVzErOGIrU0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEUDdFL1ZWNG1GMDN4VU5hVVo1NW9wLzNOU0x4V1JPdmtDbHVGc1pqWFhJbVFXakpTRit2SVpHV3RHaGpkVlNROEx3TGU2eTlnL0VRelA3Q2QzaWFqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzODE3MjI2NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNKQS81eUI2Q1pOY1pRa2NqRVp3NHRSWk53bWM2MytqYUVMcWdXU2pzSUcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgyNTMwMDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkdJIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
