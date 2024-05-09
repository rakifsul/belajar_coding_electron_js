// file: index.js

const { app, BrowserWindow } = require("electron");

let win;

app.on("ready", () => {
    // gunakan webPreferences ini.
    // jika versi electronnya beda, mungkin beda caranya juga.
    // jadi, jika gagal silakan cek di dokumentasinya.
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true,
        },
    });

    win.loadURL(`file:///${__dirname}/index.html`);
});
