# Belajar Electron JS Pembahasan Tentang loadURL

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_loadurl

## Pendahuluan

Method BrowserWindow yang bernama loadURL ini memiliki fungsi ganda.

Pertama, ia bisa me-load alamat web secara remote.

Kedua, ia bisa me-load file HTML lokal.

Penggunaan loadURL adalah sangat sering saat kita menggunakan framework Electron, karena tampilan dari aplikasi Electron dibuka melalui method tersebut.

Walaupun demikian, ada method BrowserWindow yang bernama loadFile yang bisa menggantikan loadURL untuk membuka file HTML lokal.

Tapi itu untuk versi Electron yang agak baru.

## Lebih Lanjut tentang loadURL

Fungsi loadURL() dalam objek BrowserWindow milik Electron.js adalah metode yang digunakan untuk memuat konten HTML atau URL ke dalam jendela browser.

Berikut adalah penjelasan tentang loadURL():

Memuat Konten HTML atau URL: Fungsi loadURL() memungkinkan Anda untuk memuat konten HTML lokal atau URL eksternal ke dalam jendela browser yang ditentukan. Ini bisa berupa halaman web, aplikasi web, atau halaman HTML lokal di sistem file.

Akses ke Halaman Web: Dengan menggunakan loadURL(), Anda dapat menavigasi ke berbagai halaman web atau aplikasi web yang diinginkan langsung dari aplikasi Electron.js Anda. Ini memungkinkan Anda untuk menampilkan konten web dalam konteks aplikasi desktop.

Pembaruan Konten: Ketika Anda menggunakan loadURL() untuk memuat URL eksternal, konten yang ditampilkan dalam jendela browser akan diperbarui secara otomatis ketika URL tersebut berubah atau di-refresh oleh pengguna.

Akses ke Konten Lokal: Selain memuat URL eksternal, Anda juga dapat menggunakan loadURL() untuk memuat konten HTML lokal yang ada di sistem file. Ini memungkinkan Anda untuk menyertakan halaman HTML, CSS, JavaScript, dan sumber daya lainnya yang terkait dengan aplikasi Anda.

Integrasi dengan Protokol Khusus: loadURL() juga mendukung integrasi dengan protokol khusus, seperti file:/// untuk memuat halaman HTML lokal, atau protokol khusus lainnya yang mungkin Anda tentukan dalam aplikasi Anda.

Kustomisasi dan Pengaturan Tambahan: Selain memuat URL atau konten HTML, Anda dapat mengatur berbagai opsi tambahan saat memanggil loadURL(), seperti opsi untuk mengatur ukuran jendela, mengaktifkan atau menonaktifkan devtools, dan konfigurasi lainnya.

Penanganan Kesalahan: loadURL() juga memberikan mekanisme untuk menangani kesalahan yang terjadi saat memuat konten, seperti kesalahan jaringan atau kesalahan parsing HTML. Anda dapat menangani kesalahan ini dengan menggunakan event yang disediakan oleh objek BrowserWindow.

Secara keseluruhan, fungsi loadURL() dalam objek BrowserWindow milik Electron.js adalah alat yang kuat untuk menampilkan konten HTML atau URL ke dalam jendela browser aplikasi Anda.

Dengan fitur-fitur yang diberikan, Anda dapat dengan mudah mengakses dan menampilkan berbagai jenis konten web atau lokal dalam aplikasi desktop Anda dengan Electron.js.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami fungsi loadURL pada BrowserWindow.
-   Pembaca memahami fungsi loadFile pada BrowserWindow.
-   Pembaca dapat membuka file HTML lokal dengan loadURL.
-   Pembaca dapat membuka HTML secara remote via URL yang diberikan.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah project Electron baru bernama "contoh_electron_loadurl".

Sebenarnya, namanya bebas, tapi lebih baik ikuti saya.

Di tutorial "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)" sebelumnya, Anda telah memiliki file "index.js", bukan?

Nah. Kita akan menggunakan itu.

Sekarang, buka file "index.js", kemudian isi dengan kode ini:

```
// file: index.js

// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on('ready', () => {
    // buat BrowserWindow
    win = new BrowserWindow();

    // load dengan input URL di web
    // win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    win.loadURL(`file:///${__dirname}/index.html`);
})
```

Sekarang, jalankan aplikasi tersebut dengan:

```
npm run dev
```

Nanti di BrowserWindow akan tampil:

```
Load URL dari file HTML.
```

Itu adalah file HTML yang kita buat tadi.

Jika Anda uncomment dan comment bagian ini (kebalikan yang sebelumnya):

```
    // load dengan input URL di web
    win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    // win.loadURL(`file:///${__dirname}/index.html`);
```

Maka saat aplikasi tersebut di-restart (close dulu, kemudian):

```
npm run dev
```

Yang tampil adalah halaman homepage dari duckduckgo.

## Pembahasan

Pada file index.html, kita membuat halaman web sederhana dengan teks "Load URL dari file HTML".

File itu ada di komputer lokal, tepatnya di dalam folder "contoh_electron_loadurl".

File itu di-load dengan fungsi BrowserWindow loadURL dengan menyertakan protokol file:

```
    // load dengan input URL di file lokal
    win.loadURL(`file:///${__dirname}/index.html`);
```

Penggunaan file:/// dalam URL sama dengan membuka file lokal.

\_\_dirname itu sendiri adalah nama folder di mana script "index.js" berada, yakni di dalam folder "contoh_electron_loadurl".

Karena file "index.html" juga ada di dalam folder "contoh_electron_loadurl" maka input tersebut valid dan isi "index.html" akan di-render ke aplikasi Electron kita.

Sebagai catatan, di Electron versi terbaru ada sebuah fungsi baru yang bernama loadFile.

Fungsinya sama dengan yang tadi, tapi penggunaannya lebih sederhana.

Cukup lakukan:

```
win.loadFile("index.html");
```

Karena cukup sederhana, saya sertakan saja pembahasannya di sini.

Sekarang, saya akan membahas file "index.js".

Di bagian ini, kita meng-import modul yang dibutuhkan:

```
// begin: import modules
const {
    app,
    BrowserWindow
} = require('electron');
// end: import modules
```

Hanya app dan BrowserWindow saja yang dibutuhkan, karena loadURL adalah salah satu method dari BrowserWindow.

Di bagian ini, kita menggunakan variabel bernama win untuk menyimpan objek BrowserWindow:

```
// buat variabel win untuk menyimpan objek BrowserWindow
let win;
```

Dan saat app ready:

```
// ketika app ready
app.on('ready', () => {
    // buat BrowserWindow
    win = new BrowserWindow();
```

Buat BrowserWindow, kemudian assign ke variabel bernama win tadi.

Selanjutnya:

```
    // load dengan input URL di web
    // win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    win.loadURL(`file:///${__dirname}/index.html`);
```

Buka file "index.html".

Catat bahwa duckduckgo tidak akan dibuka karena kodenya di-comment.

Untuk membuka duckduckgo, uncomment dulu bagian ini:

```
    // load dengan input URL di web
    // win.loadURL("https://duckduckgo.com");
```

Dan comment bagian ini:

```
    // load dengan input URL di file lokal
    win.loadURL(`file:///${__dirname}/index.html`);
```

Sehingga hasilnya jadi terbalik:

```
    // load dengan input URL di web
    win.loadURL("https://duckduckgo.com");

    // load dengan input URL di file lokal
    // win.loadURL(`file:///${__dirname}/index.html`);
```

Menurut dokumentasinya, ada beberapa parameter yang bisa diberikan pada method loadURL:

-   url: string berisi path dari halaman web. bisa berupa file lokal maupun remote dengan protokol http atau https seperti yang telah dijelaskan sebelumnya
-   options yang berupa objek ber-property:
    -   httpReferrer: referrer dari pembuka halaman.
    -   userAgent: user agent dari pembuka halaman.
    -   extraHeaders: http header tambahan saat halaman web dibuka
    -   postData: untuk membuka url dengan method POST.
    -   baseURLForDataURL: base URL untuk file yang akan di-load oleh data URL.

## Penutup

Sekarang, Anda sudah tahu tentang loadURL.

Bahwa loadURL bisa digunakan untuk membuka URL remote maupun file lokal.

Bahwa loadFile bisa menggantikan loadURL untuk membuka file lokal.

Saran saya, jika Anda menggunakan versi Electron terbaru, gunakan loadFile saja untuk membuka HTML karena lebih rapi.
