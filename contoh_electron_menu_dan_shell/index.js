// file: index.js

// begin: import modules
const { app, Menu, BrowserWindow } = require("electron");
const { shell } = require("electron");
// end: import modules

// definisi menu.
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                role: "quit",
            },
        ],
    },
    {
        label: "Edit",
        submenu: [
            {
                role: "undo",
            },
            {
                role: "redo",
            },
            {
                type: "separator",
            },
            {
                role: "cut",
            },
            {
                role: "copy",
            },
            {
                role: "paste",
            },
            {
                role: "pasteandmatchstyle",
            },
            {
                role: "delete",
            },
            {
                role: "selectall",
            },
        ],
    },
    {
        label: "View",
        submenu: [
            {
                role: "reload",
            },
            {
                role: "forcereload",
            },
            {
                role: "toggledevtools",
            },
            {
                type: "separator",
            },
            {
                role: "togglefullscreen",
            },
        ],
    },
    {
        role: "window",
        submenu: [
            {
                role: "minimize",
            },
            {
                role: "close",
            },
        ],
    },
    {
        label: "Belajar Electron",
        submenu: [
            {
                label: "Shell Open External",
                click() {
                    // buka default web browser ke Google.
                    shell.openExternal("https://www.google.com");
                },
            },
            {
                label: "Shell Open Path",
                click() {
                    // buka drive C:
                    shell.openPath("C:\\");
                },
            },
            {
                label: "Shell Open Path",
                click() {
                    // buka file test.txt yang ada di folder project ini.
                    shell.openPath(".\\test.txt");
                },
            },
            {
                label: "Shell Show Item in Folder",
                click() {
                    // tunjukkan file hosts di explorer
                    shell.showItemInFolder("C:\\Windows\\System32\\drivers\\etc\\hosts");
                },
            },
            {
                label: "Shell Beep",
                click() {
                    // bunyikan beep
                    shell.beep();
                },
            },
        ],
    },
];

// variabel untuk menyimpan objek BrowserWindow
let win;

// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow
    win = new BrowserWindow();

    // buka file index.html
    win.loadFile("index.html");

    // terapkan menu di atas pada BrowserWindow
    Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));
});
