// file: index.js

// begin: import modules
const { app, dialog, BrowserWindow } = require("electron");
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", async () => {
    // buat BrowserWindow
    win = new BrowserWindow();

    // buka save dialog
    // judulnya: Judul Dialog
    // path default nya: D:
    // filter untuk jenis file JavaScript
    const result = await dialog.showSaveDialog(win, {
        title: "Judul Dialog",
        defaultPath: "D:\\",
        filters: [
            {
                name: "JavaScript",
                extensions: ["js"],
            },
        ],
    });

    console.log(result); // perhatikan hasilnya
});
