// begin: import modules
const { app, Menu, Tray, BrowserWindow } = require("electron");
const { shell } = require("electron");
// end: import modules

// variabel untuk menyimpan objek BrowserWindow
let win;

// variabel untuk menyimpan objek Tray
let tray;

// definisi context menu
const contextMenuTemplate = [
    {
        label: "Open Google",
        click() {
            shell.openExternal("https://www.google.com");
        },
    },
    {
        label: "Open GitHub",
        click() {
            shell.openExternal("https://github.com");
        },
    },
];

// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow dan simpan objeknya di variabel win
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // buka file index.html
    win.loadFile("index.html");

    // buat tray dengan icon tray-icon.ico yang sudah disediakan
    tray = new Tray("./tray-icon.ico");

    // build context menu
    const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

    // buat tooltip dari tray dengan teks "Tray Example"
    tray.setToolTip("Tray Example");

    // assign context menu tadi ke Tray
    tray.setContextMenu(contextMenu);
});
