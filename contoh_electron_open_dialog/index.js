// file: index.js

// begin: import modules
const { app, dialog, BrowserWindow } = require("electron");
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", async () => {
    // buat browser window
    win = new BrowserWindow();

    // dialog untuk membuka file
    const result1 = await dialog.showOpenDialog(win, {
        title: "Open Project File",
        properties: ["openFile"],
        filters: [
            {
                name: "Dokumen",
                extensions: ["pdf"],
            },
        ],
    });
    console.log(result1); //perhatikan hasilnya

    //dialog untuk membuka directory
    const result2 = await dialog.showOpenDialog(win, {
        title: "Open Project Folder",
        properties: ["openDirectory"],
    });
    console.log(result2); //perhatikan hasilnya
});
