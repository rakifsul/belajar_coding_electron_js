// mulai: meng-import module
const { app, BrowserWindow } = require("electron");
// selesai: meng-import module

// buat variabel untuk menyimpan BrowserWindow, namanya adalah "win".
let win;

// saat app ready...
app.on("ready", () => {
    // buat objek BrowserWindow, dengan begini window kosong akan tampil.
    win = new BrowserWindow();
});
