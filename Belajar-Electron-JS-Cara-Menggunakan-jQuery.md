# Belajar Electron JS Cara Menggunakan jQuery

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_jquery

## Pendahuluan

jQuery adalah library JavaScript yang memudahkan kita untuk menangani DOM.

Penggunaan jQuery di website atau aplikasi web normal adalah sangat mudah.

Lalu bagaimana dengan penggunaannya di Electron?

Ternyata memerlukan sedikit trik.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca mampu menggunakan jQuery pada renderer process Electron.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah project Electron bernama "contoh_electron_jquery" berdasarkan "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Sampai di sini, kita sudah punya file "index.js". Buka file tersebut kemudian isi dengan kode ini:

```
// file: index.js

const {
    app,
    BrowserWindow
} = require('electron');

let win;

app.on('ready', () => {
    // gunakan webPreferences ini.
    // jika versi electronnya beda, mungkin beda caranya juga.
    // jadi, jika gagal silakan cek di dokumentasinya.
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });

    win.loadURL(`file:///${__dirname}/index.html`);
});
```

Selanjutnya, buat file "renderer.js" dan isi dengan kode ini:

```
$(document).ready(function () {
    alert("Hello World!")
});
```

Kemudian, buat file "index.html" dan isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">
<!-- file: index.html -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Import JQuery</h1>
    <script>
        // cara mengimpor jQuery di Electron
        window.jQuery = require("./jquery.min.js"); // require
        window.$ = window.jQuery; // assign
    </script>
    <script src="renderer.js"></script>
</body>

</html>
```

Selanjutnya, download jQuery yang sudah di-minified dari website resminya.

Setelah selesai di-download masukkan file script jQuery tadi ke dalam folder project ini dan rename menjadi "jquery.min.js" jika namanya belum seperti itu.

Sekarang, jalankan Electron dengan:

```
npm run dev
```

Nanti, akan muncul popup bertuliskan "Hello World".

Itu tandanya bahwa Anda berhasil menggunakan jQuery di Electron.

## Pembahasan

Sebenarnya, jika dibahas semuanya, maka tutorial ini akan melebar.

Karena menyangkut BrowserWindow, loadURL dan lain-lain yang akan dijelaskan pada tutorial-tutorial selanjutnya.

Jadi, di sini saya hanya membahas ini:

```
    <script>
        // cara mengimpor jQuery di Electron
        window.jQuery = require("./jquery.min.js"); // require
        window.$ = window.jQuery; // assign
    </script>
```

Dan ini:

```
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });
```

Bahwa itulah dua blok kode yang digunakan saat Anda ingin menggunakan jQuery di Electron.

Sementara telan saja dulu cara tersebut.

Mungkin setelah Anda membaca tutorial-tutorial selanjutnya, Anda akan lebih paham.

## Penutup

Sekarang, Anda telah tahu cara menggunakan jQuery di Electron.

Harap ingat baik-baik cara ini karena kemungkinan tutorial ke depannya akan banyak menggunakan jQuery.
