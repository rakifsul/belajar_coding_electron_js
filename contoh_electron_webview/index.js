// file: index.js

// begin: import modules
const { app, BrowserWindow } = require("electron");
// end: import modules

// variabel untuk menyimpan objek BrowserWindow
let win;

// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow berukuran 1024x768
    // enable fitur webview tag
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            webviewTag: true,
        },
    });

    // buka file index.html
    win.loadFile("index.html");
});
