const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_55_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1bkptdEMza1NsRXZqcUtReTNzOTBxemFpYVNHQWJaMFBUcVlaNEg4TjBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFWnpPUXNVeFFRSy1Lc0JLbHp2WFhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkOTc2ODgzLTI2MDktNDE1Yy1iOTk4LWY0ZWNmMTA1OTYzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDE4MSxcbiAgICAgIDEzLFxuICAgICAgNTAsXG4gICAgICAxOTQsXG4gICAgICA4MyxcbiAgICAgIDg5LFxuICAgICAgMjUwLFxuICAgICAgMTYyLFxuICAgICAgMTE0LFxuICAgICAgMTAzLFxuICAgICAgMTU0LFxuICAgICAgMjI0LFxuICAgICAgMjA4LFxuICAgICAgMzksXG4gICAgICAyMTcsXG4gICAgICA1LFxuICAgICAgMTA1LFxuICAgICAgODIsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAxNzksXG4gICAgICAxNTksXG4gICAgICAxNTksXG4gICAgICA3NSxcbiAgICAgIDE4OSxcbiAgICAgIDM3LFxuICAgICAgMTg0LFxuICAgICAgMjYsXG4gICAgICAzMCxcbiAgICAgIDI3LFxuICAgICAgODYsXG4gICAgICAxNTIsXG4gICAgICAyMzYsXG4gICAgICAxMixcbiAgICAgIDI0NSxcbiAgICAgIDIxOSxcbiAgICAgIDMwLFxuICAgICAgMjUsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVRUR1daUDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNjIzOTczNTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjk5MTAxMzYyNTA0Njk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQblVvSUFHRVBhVnY3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZPTUxlTjdDWk8vYlprdDlhc2VKN21XOFNNUFJIdjlES2hDVzZla09BUnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUm5NZTFNQUgwMmV2WjFueDNGU0w2eEJWZnNSV3dxVHBSdERsZDdNbzVMckduSWQzOVV3UnFuakNCZ1hOM2g3a1NlR2tDczE1VFFvWHFwNkYyVm5sRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTE51aHoxQkxQKzJDMkpMMnVuVzBOeHBPOWpzWGVVZUtKV0lSYUUwVk0zNDhrUHR4RWx5L0VaaUZ0VlJlZW56TjMyM1RYMUdIWmU5UkVuQXZNS0tHQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE2MjM5NzM1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1Mzc5NzA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2QvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
