# Belajar Electron JS Mengenal ipcMain Dan ipcRenderer

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_ipcmain_dan_ipcrenderer

## Pendahuluan

Konsep main dan renderer process sangat penting untuk dipahami.

Main dan renderer process sangat erat kaitannya dengan modul ipcMain dan ipcRenderer.

ipcMain dan ipcRenderer digunakan dalam komunikasi antara main process dengan renderer proces.

Itulah yang memberi kita peluang untuk memanggil native API dari HTML dan melakukan perubahan pada HTML melalui native API.

## Lebih Lanjut tentang ipcMain dan ipcRenderer

Dalam Electron.js, ipcMain dan ipcRenderer adalah dua modul yang digunakan untuk komunikasi antara proses utama (main process) dan proses renderer (renderer process).

Berikut adalah penjelasan tentang keduanya:

ipcMain:
Komunikasi dari Proses Utama: ipcMain adalah modul yang digunakan dalam proses utama (main process) untuk menerima dan menanggapi pesan dari proses renderer (renderer process).
Menerima Pesan: Dengan ipcMain.on(), proses utama dapat mendaftarkan penerimaan pesan dari proses renderer dengan menentukan nama pesan atau channel yang diinginkan.
Menanggapi Pesan: Setelah menerima pesan, proses utama dapat menanggapi pesan tersebut dengan mengirimkan balasan menggunakan event.reply() dengan channel yang sesuai.
Pemrosesan Pesan: Pesan yang diterima oleh ipcMain dapat diproses di dalam fungsi yang ditetapkan dalam ipcMain.on(), yang memungkinkan proses utama untuk melakukan berbagai tindakan berdasarkan pesan yang diterima.
ipcRenderer:
Komunikasi dari Proses Renderer: ipcRenderer adalah modul yang digunakan dalam proses renderer (renderer process) untuk mengirim pesan ke proses utama (main process) dan menerima balasan.
Mengirim Pesan: Dengan ipcRenderer.send(), proses renderer dapat mengirimkan pesan ke proses utama dengan menentukan nama pesan atau channel yang diinginkan bersama dengan data yang ingin dikirim.
Menerima Balasan: Setelah mengirim pesan, proses renderer dapat menunggu balasan dari proses utama dengan menggunakan ipcRenderer.on() untuk mendaftarkan penerimaan balasan dengan channel yang sesuai.
Pemrosesan Balasan: Balasan yang diterima oleh ipcRenderer dapat diproses di dalam fungsi yang ditetapkan dalam ipcRenderer.on(), yang memungkinkan proses renderer untuk menanggapi atau melakukan tindakan berdasarkan balasan yang diterima.
Peran dan Fungsi Utama:
Pemisahan Tugas: ipcMain digunakan untuk menerima dan menanggapi pesan di proses utama, sementara ipcRenderer digunakan untuk mengirim pesan dari proses renderer dan menerima balasan.
Komunikasi Antar-Proses: Kombinasi dari kedua modul ini memungkinkan untuk komunikasi antara proses utama dan renderer, yang penting untuk berbagai interaksi dan sinkronisasi dalam aplikasi Electron.js.
ipcMain dan ipcRenderer adalah modul penting dalam Electron.js yang memungkinkan komunikasi antara proses utama dan proses renderer.

Mereka memungkinkan untuk pertukaran pesan antara kedua proses, yang sangat penting dalam pengembangan aplikasi Electron.js yang kompleks dan interaktif.

Dengan menggunakan kedua modul ini, aplikasi dapat melakukan berbagai tindakan berdasarkan pesan yang diterima dan mempertahankan konsistensi dan sinkronisasi antara proses utama dan renderer.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami konsep ipcMain.
-   Pembaca memahami konsep ipcRenderer.
-   Pembaca memahami interaksi antara ipcMain dan ipcRenderer.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.
-   Telah membaca dan memahami cara menggunakan jQuery di Electron.

## Langkah-Langkah

Pertama, buatlah project Electron baru bernama "contoh_electron_ipcmain_dan_ipcrenderer".

Sebenarnya, namanya bebas, tapi lebih baik ikuti saya.

Di tutorial cara pembuatan project Electron sebelumnya, Anda telah memiliki file "index.js".

Kita akan menggunakan file tersebut dan menambah beberapa file tambahan.

Selain itu, gunakan jQuery dalam aplikasi ini. Caranya sudah dijelaskan di tutorial sebelumnya.

Bukalah file "index.js", kemudian isi dengan kode ini:

```
// file: index.js

// begin: import module
const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');
// end: import module

// buat variable win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
    // buat BrowserWindow dengan webPreferencesnya
    win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });

    //load index.html
    win.loadURL(`file:///${__dirname}/index.html`);
});

// di sini kita meng-handle event "button-click" yang dikirimkan dari renderer process
ipcMain.on('button-click', (event, args) => {
    console.log("my name is " + args.name + " and my age is: " + args.age);

    // reply ke pemanggil
    event.reply('button-click-reply', 'reply from main process (button-click)');

    // reply dengan webContents.send
    win.webContents.send('from-win-webcontents-send', 'reply from win.webContents.send');
});
```

Selanjutnya, buat file "renderer.js" dan isi dengan kode ini:

```
// file: renderer.js
// dimuat dari index.html

// begin: import modules
const {
    ipcRenderer
} = require('electron');
// end: import modules

// ketika dokumen html ready
$(document).ready(function () {

    // ketika button dengan id: btn-send-to-main-process diklik
    $('#btn-send-to-main-process').click(function () {
        // kirim event ke main process
        ipcRenderer.send('button-click', { name: "swlrnshw-200", age: "30an" });
    })

    // balasan dari main process (dengan event.reply di main process)
    ipcRenderer.on('button-click-reply', (event, args) => {
        alert(args);
    });

    // balasan dari main process (dengan webContents.send)
    ipcRenderer.on('from-win-webcontents-send', (event, args) => {
        alert(args);
    });
});
```

Selanjutnya, buat file "index.html", kemudian isi dengan kode ini:

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
    <h1>IPCMain dan IPCRenderer</h1>
    <button id="btn-send-to-main-process">Send to Main Process</button>
    <script>
        window.jQuery = require("./jquery.min.js");
        window.$ = window.jQuery;
    </script>
    <script src="renderer.js"></script>
</body>

</html>
```

Setelah selesai, jalankan Electron dengan:

```
npm run dev
```

Kemudian klik tombol "Send to Main Process".

Nanti di console PowerShell akan muncul teks:

```
my name is swlrnshw-200 and my age is 30an
```

Di BrowserWindow juga akan memunculkan popup dua kali.

## Pembahasan

Pembahasan akan kita mulai dari "index.html".

Di "index.html" ada sebuah tombol yang jika diklik maka akan mengirimkan sinyal ke main process.

Teks tombol tersebut adalah "Send to Main Process":

```
<button id="btn-send-to-main-process">Send to Main Process</button>
```

Perhatikan baik-baik id-nya.

Di situ, id dari tombol tadi adalah "btn-send-to-main-process" yang akan menghandle event click. Bisa dilihat dari script "renderer.js" ini:

```
    // ketika button dengan id: btn-send-to-main-process diklik
    $('#btn-send-to-main-process').click(function () {
        // kirim event ke main process
        ipcRenderer.send('button-click', { name: "swlrnshw-200", age: "30an" });
    })
```

Saat tombol diklik, maka kirim sinyal "button-click" ke main process.

Data yang dikirim adalah name dan age.

Sementara itu di main process:

```
// di sini kita meng-handle event "button-click" yang dikirimkan dari renderer process
ipcMain.on('button-click', (event, args) => {
    console.log("my name is " + args.name + " and my age is: " + args.age);

    // reply ke pemanggil
    event.reply('button-click-reply', 'reply from main process (button-click)');

    // reply dengan webContents.send
    win.webContents.send('from-win-webcontents-send', 'reply from win.webContents.send');
});
```

Kita menangani "button-click" yang telah dikirimkan tadi.

Response nya adalah mem-print teks di console PowerShell:

```
console.log("my name is " + args.name + " and my age is: " + args.age);
```

Dilanjutkan dengan reply kembali ke renderer process:

```
    // reply ke pemanggil
    event.reply('button-click-reply', 'reply from main process (button-click)');

    // reply dengan webContents.send
    win.webContents.send('from-win-webcontents-send', 'reply from win.webContents.send');
```

Dengan kode di atas, maka renderer process akan meresponnya dengan popup:

```
    // balasan dari main process (dengan event.reply di main process)
    ipcRenderer.on('button-click-reply', (event, args) => {
        alert(args);
    });

    // balasan dari main process (dengan webContents.send)
    ipcRenderer.on('from-win-webcontents-send', (event, args) => {
        alert(args);
    });
```

Isi args dari popup pertama adalah:

```
reply from main process (button-click)
```

Isi args dari popup kedua adalah:

```
reply from win.webContents.send
```

Jadi ada dua cara untuk melakukan reply.

Yang pertama dengan menggunakan event.reply dan yang kedua dengan win.webContents.send.

## Penutup

Sekarang Anda telah dijelaskan tentang ipcMain, ipcRenderer dan interaksi di antara keduanya.

Saran saya, coba eksplorasi method-method lain dari ipcMain dan ipcRenderer dan coba di project Anda sendiri.
