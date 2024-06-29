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

    // message box biasa
    await dialog.showMessageBox({
        message: "message box biasa",
    });

    // message box modal. jadi message box ini menutupi parent window nya.
    await dialog.showMessageBox(win, {
        message: "message box modal",
    });

    // message box error
    await dialog.showMessageBox({
        message: "message box error",
        type: "error",
    });

    // message box info
    await dialog.showMessageBox({
        message: "message box info",
        type: "info",
    });

    // return value dari message box
    const buttonID1 = await dialog.showMessageBox({
        message: "return value dari message box - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
    });
    console.log(buttonID1);

    // message box dengan checkbox
    const buttonID2 = await dialog.showMessageBox({
        message: "message box dengan checkbox - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
        checkboxLabel: "Coba Checkbox",
        checkboxChecked: false,
    });
    console.log(buttonID2);
});
