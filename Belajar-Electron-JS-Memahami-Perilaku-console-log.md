# Belajar Electron JS Memahami Perilaku console.log

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_perilaku_console_log

## Pendahuluan

Perilaku console.log berbeda-beda di Electron.

Tergantung dari apakah console.log tersebut dijalankan di main process atau renderer process.

Pemahaman konsep main process dan renderer process adalah sangat penting dalam menggunakan Electron.

Ini adalah cara untuk menyadarkan Anda, bahwa main process adalah process yang berbeda dengan renderer process, walaupun masih dalam satu aplikasi Electron.

## Lebih Lanjut tentang console.log

Dalam framework Electron, console.log() berperan sama seperti di lingkungan JavaScript biasa.

Namun, ada beberapa hal yang perlu diperhatikan ketika menggunakan console.log() dalam aplikasi Electron:

Output: Ketika Anda menggunakan console.log() dalam aplikasi Electron, keluaran log akan ditampilkan dalam dua lokasi terpisah, tergantung pada mode aplikasi Anda:

Mode Main: Di mode Main, keluaran log akan ditampilkan dalam konsol dari text editor Anda.

Mode Renderer: Di mode Renderer, keluaran log akan ditulis ke tab console dari devtools.

Remote Debugging: Electron juga mendukung remote debugging melalui DevTools Chromium. Ini memungkinkan Anda untuk mengakses dan memeriksa output dari console.log() dan juga melihat informasi debug lainnya dari jendela aplikasi Electron Anda, bahkan jika itu sedang berjalan di mesin yang berbeda.

Event-driven Nature: Seperti JavaScript pada umumnya, console.log() di Electron dapat membantu Anda melacak aliran logik aplikasi Anda, membantu dalam debugging, dan memahami perilaku aplikasi secara keseluruhan.

Dalam pengembangan aplikasi Electron, console.log() tetap menjadi salah satu alat paling penting untuk pemantauan dan debugging. Baik Anda bekerja di mode pengembangan maupun produksi, menggunakan console.log() dengan bijaksana akan membantu Anda memahami dan memperbaiki masalah dengan lebih cepat.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca mampu memahami perilaku console.log di renderer process.
-   Pembaca mampu memahami perilaku console.log di main process.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buat project Electron baru bernama "contoh_electron_perilaku_console_log".

Anda bisa gunakan project Electron yang telah Anda buat di bagian ini.

Sekarang, buka file "index.js", kemudian isi dengan kode ini:

```
// file: index.js

// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules

// variabel yang menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
    // buat Browser Window
    win = new BrowserWindow();

    // buka URL dari index.html
    win.loadURL(`file:///${__dirname}/index.html`);

    // ini dilakukan di main process. akan tampil di command line Anda. jika tanda komentar dihapus.
    // console.log("console.log di main process");
})
```

Selanjutnya, buat file "renderer.js" dan isi dengan kode ini:

```
// file: renderer.js

// mem-print teks di renderer process.
console.log("console.log di renderer process")
```

Selanjutnya, buat file "index.html" dan isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Console Log</h1>

    <script src="renderer.js"></script>
</body>

</html>
```

Sekarang, jalankan aplikasi ini dengan:

```
npm run dev
```

Nanti, setelah BrowserWindow terbuka, buka dev tools atau inspect elemen melalui menu utama aplikasi Electron Anda di "View" > "Toggle Developer Tools".

Kemudian pada dev tools, buka tab console.

Nanti di tab tersebut akan tampil teks:

```
console.log di renderer process
```

Selanjutnya, setelah Anda melihat itu, tutup aplikasi Electron Anda.

Kemudian uncomment kode di file "index.js" bagian ini:

```
    // ini dilakukan di main process. akan tampil di command line Anda. jika tanda komentar dihapus.
    // console.log("console.log di main process");
```

Sehingga menjadi:

```
    // ini dilakukan di main process. akan tampil di command line Anda. jika tanda komentar dihapus.
    console.log("console.log di main process");
```

Kembali jalankan ini sambil memperhatikan layar PowerShell Anda:

```
npm run dev
```

Nanti di PowerShell akan muncul

```
console.log di main process
```

Kira-kira seperti itu.

## Pembahasan

Kali ini, ada dua file JS yang kita buat: "index.js" dan "renderer.js".

File "index.js" berperan sebagai script untuk main process.

Adapun file "renderer.js" berperan sebagai script untuk renderer process.

Oleh karena itulah, "renderer.js" harus diimpor via script tag di "index.html":

```
<body>
    <h1>Console Log</h1>

    <script src="renderer.js"></script>
</body>
```

Apakah nama script-nya harus "renderer.js"?

Tentu tidak.

Anda bisa menamainya "kelinci.js" asalkan nanti di tag script di "index.html" nama script-nya disesuaikan.

console.log yang dilakukan di renderer process outputnya akan keluar di dev tools.

Adapun console.log yang dilakukan di main process output-nya akan keluar di terminal, console, PowerShell atau aplikasi command line apapun yang menjalankan aplikasi ini.

## Penutup

Sekarang, Anda telah memahami perilaku console.log di main process dan renderer process.

Ini adalah awal untuk memahami main process dan renderer process lebih lanjut.
