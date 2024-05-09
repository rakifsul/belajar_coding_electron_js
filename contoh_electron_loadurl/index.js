// file: index.js

// begin: import modules
const { app, BrowserWindow } = require("electron");
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", () => {
    // buat BrowserWindow
    win = new BrowserWindow();

    // load dengan input URL di web
    // win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    win.loadURL(`file:///${__dirname}/index.html`);
});
