# Belajar Electron JS Pembahasan Menu Dan Shell

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_menu_dan_shell

## Pendahuluan

Menu adalah sesuatu yang sering ditemukan pada aplikasi desktop.

Ini adalah elemen GUI bercabang yang biasanya terletak di bagian atas jendela aplikasi desktop.

Meskipun menu dapat dibuat menggunakan HTML di Electron, yang saya maksud kali ini adalah menu asli.

Yaitu, menu yang menggunakan native API Electron atau yang ada di main process.

Contohnya termasuk “File,” “Edit,” "View," "Help," dan lainnya.

Selain itu, di artikel ini saya juga membahas penggunaan Shell.

Saya menggunakan Shell dalam tutorial ini sebagai respons terhadap pemilihan item menu.

Shell adalah modul yang berguna bagi Electron untuk integrasi dengan desktop.

Tidak heran jika manfaat Shell meliputi membuka browser ke URL tertentu, membuka penjelajah ke folder tertentu, dan bahkan membunyikan beep.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami konsep menu dan dapat memodifikasi menu bawaan pada Electron.
-   Pembaca memahami konsep shell dan dapat menggunakannya.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah sebuah project Electron dengan nama "contoh_electron_menu_dan_shell".

Anda bisa membuatnya dengan cara yang dijelaskan pada tutorial sebelumnya.

Jika Anda telah mengikuti tutorial tersebut, pasti ada file bernama "index.js" di dalam folder project Anda.

Bukalah file "index.js" dan isi dengan kode ini:

```
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
```

Selanjutnya, buat file "index.html", kemudian isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu & Shell Example</title>

  <style>

  </style>
</head>

<body>
  <h1>Klik salah satu item pada menu "Belajar Electron".</h1>
  <script>

  </script>
</body>

</html>
```

Kemudian, buat file "test.txt" di dalam folder "contoh_electron_menu_dan_shell" dan isi dengan teks ini:

```
isi file text.txt yang kemungkinan dibuka via menu Electron.
```

Selanjutnya, jalankan Electron dengan perintah:

```
npm run dev
```

Nanti akan muncul BrowserWindow dengan menu item terkanan yang berjudul "Belajar Electron".

Di sub-menu-nya ada beberapa pilihan penggunaan Shell.

Silakan dicoba satu per satu.

## Pembahasan

Sekarang, saya akan membahas yang paling mudah dulu, yakni "index.html".

Kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu & Shell Example</title>

  <style>

  </style>
</head>

<body>
  <h1>Klik salah satu item pada menu "Belajar Electron".</h1>
  <script>

  </script>
</body>

</html>
```

Hanya berisi pesan saja yang isinya:

```
Klik salah satu item pada menu "Belajar Electron".
```

Sekarang, bagian yang lebih rumit.

Yakni "index.js".

Kode bagian ini:

```
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
```

Adalah definisi dari struktur menu yang akan diterapkan pada BrowserWindow.

Struktur tersebut disimpan dalam sebuah konstanta bernama "mainMenuTemplate".

Nanti di bagian ini:

```
    // terapkan menu di atas pada BrowserWindow
    Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));
```

Kita akan menerapkannya di BrowserWindow.

Sekarang, kita akan membahas tentang Shell.

Kode ini:

```
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
```

Menunjukkan bahwa sub-menu dari menu item "Belajar Electron" menggunakan beragam jenis method Shell.

-   shell.openExternal("https://www.google.com"); akan membuka Google.
-   shell.openPath("C:\\"); akan membuka drive C:
-   shell.openPath(".\\test.txt"); akan membuka file test.txt yang ada di folder project ini.
-   shell.showItemInFolder("C:\\Windows\\System32\\drivers\\etc\\hosts"); akan membuka Explorer dan menyorot file "hosts".
-   shell.beep(); akan membunyikan speaker dengan suara beep.

## Penutup

Sekarang seharusnya Anda telah memahami menu dan shell pada Electron.

Selanjutnya, Anda bisa mencoba memodifikasi menu dan shell yang saya buat tadi dan melihat hasilnya.
