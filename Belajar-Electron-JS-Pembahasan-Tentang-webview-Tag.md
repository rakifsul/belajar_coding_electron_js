# Belajar Electron JS Pembahasan Tentang webview Tag

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_webview

## Pendahuluan

Dengan maraknya framework untuk me-render DOM melalui JavaScript seperti React, Vue dan sebagainya, maka pembuatan aplikasi scraper menjadi semakin menantang.

Dulu, HTML bersifat statis atau setidaknya apa adanya sehingga untuk melakukan ekstraksi data cukup dengan menggunakan library untuk request HTTP biasa.

Tapi bayangkan jika dalam sebuah website cuma ada tag div yang diisi struktur HTML via JavaScript. Itu sangat merepotkan.

Untuk melakukan scraping pada website semacam itu biasanya dibutuhkan web automation seperti Selenium dan Puppeteer.

Tapi menurut saya itu kurang ideal karena bersifat terpisah dari aplikasi utamanya.

Untungnya, di Electron ada webview tag.

Webview tag tersebut berperan sebagaimana web browser yang bisa memproses JavaScript dan mem-parse DOM yang dibuatnya.

Webview tag ini benar-benar menyerupai web browser pada umumnya, bahkan bisa melakukan inspect element atau membuka devtools.

Pada Electron versi terbaru, saat ini juga ada alternatif webview tag yang bernama BrowserView.

Bedanya, BrowserView merupakan bagian dari main process sementara webview tag merupakan bagian dari renderer process.

Namun, di sini saya tidak membahas BrowserView, melainkan webview tag.

Mungkin di lain kesempatan saya akan membahasnya.

Sekarang, mari kita pelajari apa itu webview tag dan bagaimana cara menggunakannya untuk membuat aplikasi web browser sederhana.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami apa itu webview tag.
-   Pembaca dapat menggunakan webview tag untuk membuat web browser sederhana.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah sebuah project Electron dengan nama "contoh_electron_webview".

Anda bisa membuatnya dengan cara yang dijelaskan pada "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Jika Anda telah mengikuti tutorial tersebut, pasti ada file bernama "index.js" di dalam folder project Anda.

Bukalah file "index.js" dan isi dengan kode ini:

```
// file: index.js

// begin: import modules
const { app, BrowserWindow } = require("electron");
// end: import modules

// variabel untuk menyimpan objek BrowserWindow
let win;

// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow berukuran 1024x768
    // enable fitur webview tag
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            webviewTag: true,
        },
    });

    // buka file index.html
    win.loadFile("index.html");
});
```

Selanjutnya, buat file "index.html" dan isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebView Tag Example</title>

  <style>
    #wv-main {
      position: absolute;
      width: 50%;
      top: 0px;
      bottom: 0px;
    }

    #control {
      position: absolute;
      width: 50%;
      left: 52%;
      top: 0px;
      bottom: 0px;
      overflow-y: scroll;
    }

    #control input {
      left: 50%;
      width: 95%;
    }

    #control textarea {
      left: 50%;
      width: 95%;
    }
  </style>
</head>

<body>
  <webview id="wv-main" src="https://github.com"></webview>
  <div id="control">
    <h1>Control</h1>
    <label for="url">URL</label>
    <br>
    <input type="text" id="url" value="https://www.google.com" placeholder="Masukkan URL di sini!" />
    <br>
    <button id="load-url">Load URL</button>
    <button id="go-back">Go Back</button>
    <button id="go-forward">Go Forward</button>
    <button id="stop">Stop</button>
    <button id="reload">Reload</button>
    <button id="open-dev-tools">Open Dev Tools</button>

    <p></p>

    <label for="script">Script</label>
    <br>
    <textarea id="script" rows="10" cols="50">window.open("https://www.google.com/search?q=site%3Asfrfrlnc.com","_self");0</textarea>
    <br>
    <button id="inject-script">Inject</button>
  </div>
  <script>
    // mengambil element untuk nantinya meng-handle event.
    const wvMain = document.getElementById("wv-main");
    const btnLoadUrl = document.getElementById("load-url");
    const btnGoBack = document.getElementById("go-back");
    const btnGoForward = document.getElementById("go-forward");
    const btnStop = document.getElementById("stop");
    const btnReload = document.getElementById("reload");
    const btnOpenDevTools = document.getElementById("open-dev-tools");
    const btnInjectScript = document.getElementById("inject-script");
    const txaScript = document.getElementById("script").value;

    // saat tombol Load URL diklik
    btnLoadUrl.onclick = function() {
      const url = document.getElementById("url").value;
      wvMain.loadURL(url);
    }

    // saat tombol Go Back diklik
    btnGoBack.onclick = function() {
      wvMain.goBack();
    }

    // saat tombol Go Forward diklik
    btnGoForward.onclick = function() {
      wvMain.goForward();
    }

    // saat tombol Stop diklik
    btnStop.onclick = function() {
      wvMain.stop();
    }

    // saat tombol Reload diklik
    btnReload.onclick = function() {
      wvMain.reload();
    }

    // saat tombol Open Dev Tools (inspect element) diklik
    btnOpenDevTools.onclick = function() {
      wvMain.openDevTools();
    }

    // saat tombol Inject diklik
    btnInjectScript.onclick = function() {
      wvMain.executeJavaScript(txaScript);
    }
  </script>
</body>

</html>
```

Sekarang, Electron siap dijalankan:

```
npm run dev
```

Nanti akan muncul BrowserWindow yang terdiri dari 2 bagian.

Bagian kiri adalah web page dan bagian kanan adalah kontrolnya.

## Pembahasan

Sekarang, saya akan membahas dari "index.js" terlebih dahulu, karena ini yang paling sederhana.

Pada bagian ini:

```
// begin: import modules
const { app, BrowserWindow } = require("electron");
// end: import modules
```

Kita mengimpor modul yang diperlukan.

Hanya perlu app dan BrowserWindow.

Selanjutnya, kita menyiapkan sebuah variabel bernama win untuk menyimpan objek BrowserWindow:

```
// variabel untuk menyimpan objek BrowserWindow
let win;
```

Saat app ready, buat BrowserWindow:

```
// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow berukuran 1024x768
    // enable fitur webview tag
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            webviewTag: true,
        },
    });
```

Ukuran BrowserWindow-nya adalah 1024x768 pixel dengan webview tag di-enable.

Gunakan parameter tersebut agar kita bisa menggunakan webview tag.

Selanjutnya, buka file "index.html":

```
    // buka file index.html
    win.loadFile("index.html");
```

Sekarang, bagaimana dengan "index.html"?

File tersebut saya bagi menjadi dua bagian: struktur dan script.

Untuk strukturnya:

```
<webview id="wv-main" src="https://github.com"></webview>
  <div id="control">
    <h1>Control</h1>
    <label for="url">URL</label>
    <br>
    <input type="text" id="url" value="https://www.google.com" placeholder="Masukkan URL di sini!" />
    <br>
    <button id="load-url">Load URL</button>
    <button id="go-back">Go Back</button>
    <button id="go-forward">Go Forward</button>
    <button id="stop">Stop</button>
    <button id="reload">Reload</button>
    <button id="open-dev-tools">Open Dev Tools</button>

    <p></p>

    <label for="script">Script</label>
    <br>
    <textarea id="script" rows="10" cols="50">window.open("https://www.google.com/search?q=site%3Asfrfrlnc.com","_self");0</textarea>
    <br>
    <button id="inject-script">Inject</button>
  </div>
```

Kita menggunakan webview tag di bagian atas kode, yang nantinya akan ada di sebelah kiri dari BrowserWindow.

Adapun div di bawahnya adalah kontrol. Nantinya ada di sebelah kanan BrowserWindow.

Penempatan itu tentunya dilakukan dengan CSS.

Selain itu, kontrol tersebut terdiri dari beberapa tombol untuk navigasi dan sebuah textarea yang berisi script untuk melakukan injeksi JavaScript ke dalam website target.

Sekarang bagian script-nya.

Kodenya adalah sebagai berikut:

```
  <script>
    // mengambil element untuk nantinya meng-handle event.
    const wvMain = document.getElementById("wv-main");
    const btnLoadUrl = document.getElementById("load-url");
    const btnGoBack = document.getElementById("go-back");
    const btnGoForward = document.getElementById("go-forward");
    const btnStop = document.getElementById("stop");
    const btnReload = document.getElementById("reload");
    const btnOpenDevTools = document.getElementById("open-dev-tools");
    const btnInjectScript = document.getElementById("inject-script");
    const txaScript = document.getElementById("script").value;

    // saat tombol Load URL diklik
    btnLoadUrl.onclick = function() {
      const url = document.getElementById("url").value;
      wvMain.loadURL(url);
    }

    // saat tombol Go Back diklik
    btnGoBack.onclick = function() {
      wvMain.goBack();
    }

    // saat tombol Go Forward diklik
    btnGoForward.onclick = function() {
      wvMain.goForward();
    }

    // saat tombol Stop diklik
    btnStop.onclick = function() {
      wvMain.stop();
    }

    // saat tombol Reload diklik
    btnReload.onclick = function() {
      wvMain.reload();
    }

    // saat tombol Open Dev Tools (inspect element) diklik
    btnOpenDevTools.onclick = function() {
      wvMain.openDevTools();
    }

    // saat tombol Inject diklik
    btnInjectScript.onclick = function() {
      wvMain.executeJavaScript(txaScript);
    }
  </script>
```

Di bagian ini, kita mengambil elemen-elemen kontrol dengan getElementById:

```
    // mengambil element untuk nantinya meng-handle event.
    const wvMain = document.getElementById("wv-main");
    const btnLoadUrl = document.getElementById("load-url");
    const btnGoBack = document.getElementById("go-back");
    const btnGoForward = document.getElementById("go-forward");
    const btnStop = document.getElementById("stop");
    const btnReload = document.getElementById("reload");
    const btnOpenDevTools = document.getElementById("open-dev-tools");
    const btnInjectScript = document.getElementById("inject-script");
    const txaScript = document.getElementById("script").value;
```

Event handler-nya ada di sini:

```
    // saat tombol Load URL diklik
    btnLoadUrl.onclick = function() {
      const url = document.getElementById("url").value;
      wvMain.loadURL(url);
    }

    // saat tombol Go Back diklik
    btnGoBack.onclick = function() {
      wvMain.goBack();
    }

    // saat tombol Go Forward diklik
    btnGoForward.onclick = function() {
      wvMain.goForward();
    }

    // saat tombol Stop diklik
    btnStop.onclick = function() {
      wvMain.stop();
    }

    // saat tombol Reload diklik
    btnReload.onclick = function() {
      wvMain.reload();
    }

    // saat tombol Open Dev Tools (inspect element) diklik
    btnOpenDevTools.onclick = function() {
      wvMain.openDevTools();
    }

    // saat tombol Inject diklik
    btnInjectScript.onclick = function() {
      wvMain.executeJavaScript(txaScript);
    }
```

Sepertinya komentar di atas cukup menjelaskan apa yang terjadi.

Untuk bagian injeksi script, teks script yang akan diinjeksi ada di variabel txaScript yang isinya berasal dari elemen textarea di bagian strukturnya.

Perhatikan bahwa webview sudah memiliki sebagian besar API yang dibutuhkan.

Yang artinya, pembuatan aplikasi ini semakin mudah.

## Penutup

Sekarang, seharusnya Anda telah memahami apa itu webview tag dan bagaimana cara menggunakannya untuk membuat web browser sederhana.

Selanjutnya giliran Anda untuk mengembangkannya lebih lanjut.
