// file: index.js

// begin: import module
const { app, BrowserWindow, ipcMain } = require("electron");
// end: import module

// buat variable win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", () => {
    // buat BrowserWindow dengan webPreferencesnya
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true,
        },
    });

    //load index.html
    win.loadURL(`file:///${__dirname}/index.html`);
});

// di sini kita meng-handle event "button-click" yang dikirimkan dari renderer process
ipcMain.on("button-click", (event, args) => {
    console.log("my name is " + args.name + " and my age is: " + args.age);

    // reply ke pemanggil
    event.reply("button-click-reply", "reply from main process (button-click)");

    // reply dengan webContents.send
    win.webContents.send("from-win-webcontents-send", "reply from win.webContents.send");
});
