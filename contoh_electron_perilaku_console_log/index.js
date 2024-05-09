// file: index.js

// begin: import modules
const { app, BrowserWindow } = require("electron");
// end: import modules

// variabel yang menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", () => {
    // buat Browser Window
    win = new BrowserWindow();

    // buka URL dari index.html
    win.loadURL(`file:///${__dirname}/index.html`);

    // ini dilakukan di main process. akan tampil di command line Anda. jika tanda komentar dihapus.
    // console.log("console.log di main process");
});
