# Belajar Electron JS Pembahasan Tentang BrowserWindow

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_browserwindow

## Pendahuluan

Di Electron, BrowserWindow adalah komponen utama.

Dengan BrowserWindow, kita bisa membuka file HTML berisi HTML tag, CSS, dan JavaScript untuk membentuk sebuah tampilan GUI yang kaya.

File HTML, CSS, dan JavaScript yang dibuka bisa bersumber dari file lokal maupun remote via URL.

Artinya, secara teoritis, dengan BrowserWindow kita bisa membuka situs WhatsApp web, kemudian memodifikasinya di Electron.

Entah itu dengan melakukan injeksi JavaScript tambahan atau yang lainnya.

Hal tersebut sangat menguntungkan pengguna Electron, karena mereka memiliki peluang untuk membuat bot dengan lebih mudah.

BrowserWindow juga memiliki parameter yang disebut web preferences saat objek BrowserWindow dibuat.

Dengan web preferences tadi, kita bisa menentukan apakah modul dari Node.js yang ada di dalam Electron bisa digunakan di dalam JavaScript-nya HTML yang dimuat.

## Lebih Lanjut tentang BrowserWindow

BrowserWindow adalah kelas utama dalam Electron.js yang digunakan untuk membuat dan mengelola jendela browser dalam aplikasi desktop.

Berikut adalah penjelasan tentang BrowserWindow:

Membuat Jendela Browser: Dengan BrowserWindow, Anda dapat membuat jendela browser dalam aplikasi desktop Anda. Jendela ini mirip dengan jendela browser yang biasa kita lihat dalam aplikasi web.

Kontrol Penciptaan dan Penampilan: Anda memiliki kendali penuh atas penampilan dan perilaku jendela browser yang dibuat dengan BrowserWindow. Anda dapat menentukan ukuran, posisi, judul, icon, dan berbagai properti lainnya untuk menyesuaikan jendela sesuai kebutuhan aplikasi Anda.

Kustomisasi UI dan Konten: Anda dapat menampilkan konten HTML, CSS, dan JavaScript dalam jendela browser yang dibuat dengan BrowserWindow. Ini memungkinkan Anda untuk membangun antarmuka pengguna kustom dan menampilkan konten web dalam konteks aplikasi desktop Anda.

Integrasi dengan Modul Lain: BrowserWindow dapat diintegrasikan dengan modul lain dalam Electron.js, seperti ipcMain dan ipcRenderer, untuk mendukung komunikasi antara proses utama dan proses renderer dalam aplikasi Anda.

Menangani Event dan Interaksi: Anda dapat menangani berbagai event yang terjadi dalam jendela browser yang dibuat dengan BrowserWindow, seperti event pembukaan, penutupan, pemfokusan, dan lainnya. Ini memungkinkan Anda untuk merespons interaksi pengguna dengan jendela browser.

Manajemen Siklus Hidup: BrowserWindow menyediakan metode untuk mengelola siklus hidup jendela, seperti membuat, menampilkan, menyembunyikan, menutup, dan menghancurkan jendela. Ini memungkinkan Anda untuk mengontrol bagaimana jendela berperilaku selama berjalannya aplikasi Anda.

Kompatibilitas Lintas-Platform: BrowserWindow dapat digunakan di berbagai sistem operasi, termasuk Windows, macOS, dan Linux. Ini memastikan bahwa aplikasi Anda dapat berjalan dan tampil dengan baik di berbagai lingkungan pengguna.

Secara keseluruhan, BrowserWindow adalah kelas yang penting dalam Electron.js yang memungkinkan Anda untuk membuat dan mengelola jendela browser dalam aplikasi desktop Anda.

Dengan fitur-fitur yang disediakan, Anda dapat dengan mudah mengontrol penampilan, perilaku, dan konten dari jendela browser dalam aplikasi Anda.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Membuat BrowserWindow kosong.
-   Membahas BrowserWindow lebih dalam lagi.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Untuk membuat BrowserWindow di tutorial ini, caranya sama dengan yang "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Di sini lebih dominan ke pembahasan BrowserWindow.

Kode yang digunakan dalam tutorial ini sama dengan tutorial tersebut dengan beberapa tambahan.

## Pembahasan

Terakhir kali kita membuat project Electron, kita telah memiliki kode ini, bukan?

```
// mulai: meng-import module
const {
    app,
    BrowserWindow
} = require('electron');
// selesai: meng-import module

// buat variabel untuk menyimpan BrowserWindow, namanya adalah "win".
let win;

// saat app ready...
app.on('ready', () => {
    // buat objek BrowserWindow, dengan begini window kosong akan tampil.
    win = new BrowserWindow();
});
```

Pada bagian ini:

```
// mulai: meng-import module
const {
    app,
    BrowserWindow
} = require('electron');
// selesai: meng-import module
```

Kita meng-import modul-modul yang dibutuhkan untuk menjalankan BrowserWindow.

Baik app dan BrowserWindow sebenarnya diimport dari package bernama electron yang telah kita npm install sebelumnya.

Package tersebut diinstall dengan parameter --save-dev agar saat release tidak disertakan.

Tapi anehnya, jika saat release package electron tidak disertakan, bagaimana aplikasinya bisa berjalan?

Hal itu disebabkan karena saat melakukan build aplikasi electron dari kode ke paket siap release, kita akan meng-embed script buatan kita dalam package electron tersebut.

Jadi, saat melakukan build, mindset-nya adalah bukan script yang meng-include electron, tapi electron-lah yang meng-include script custom kita.

Beda dengan saat development.

Saat development, kita tidak ter-include dalam electron, karena kita hanya menggunakan NPM.

Dengan NPM kita meminjam paket electron yang ada di dalam node_modules untuk menjalankan script kita yang custom itu.

Sekarang jelaslah kenapa kita menggunakan parameter --save-dev saat melakukan npm install electron.

Sekarang, perhatikan kode ini:

```
// saat app ready...
app.on('ready', () => {
    // buat objek BrowserWindow, dengan begini window kosong akan tampil.
    win = new BrowserWindow();
});
```

Di kode tadi, kita membuat BrowserWindow dengan parameter default.

Sebenarnya itu bisa diisi dengan yang lain.

Seperti ini misalnya:

```
new BrowserWindow({
            parent: null,
            modal: false,
            title: "Aplikasi Saya",
            titleBarStyle: "default",
            frame: true,
            show: false,
            width: 800,
            height: 600,
            minWidth: 800,
            minHeight: 600,
            webPreferences: {
                webviewTag: true,
                enableRemoteModule: true,
                nodeIntegration: true,
                contextIsolation: false
            }
        });
```

Menurut dokumentasinya, beberapa parameter ada pada constructornya.

Berikut ini adalah sebagian penjelasannya berdasarkan dokumentasi Electron:

-   parent: apakah browser window ini memiliki parent. ini sangat berpengaruh saat kita menjadikan browser window sebagai modal window. jika parent tidak null maka child akan menghalangi parent saat window child tampil.
-   modal: apakah browser window ini modal. modal artinya, saat parent dari modal tidak null, maka saat child tampil, ia akan menghalangi akses ke parent-nya.
-   title: judul yang ada pada title bar window
-   titleBarStyle: style dari title bar
-   frame: apakah memiliki frame atau frameless. jika true maka memiliki frame.
-   show: apakah window ditampilkan saat dibuat.
-   width: lebar window dalam pixel.
-   height: tinggi window dalam pixel.
-   minWidth: lebar minimum window dalam pixel. minHeight tinggi minimum window dalam pixel.
-   webPreferences: setting untuk fitur dari web page yang di-load. ini berupa objek.
-   webPreferences.webviewTag: apakah tag di-enable.
-   webPreferences.enableRemoteModule: apakah remote module di-enable. sudah kadaluwarsa di versi 14.
-   webPreferences.nodeIntegration: apakah node integration di-enable.
-   webPreferences.contextIsolation: apakah context isolation di-enable. jadi, apakah preload script dan Electron internal logic dijalankan dalam context terpisah.
-   Perlu diingat bahwa parameter-parameter tersebut dapat berubah seiring adanya update pada framework Electron. Jadi, sering-seringlah mengecek dokumentasinya.

Selain itu, perlu diingat juga bahwa BrowserWindow hanya bisa digunakan setelah app mengirimkan event ready.

## Penutup

Sekarang, Anda telah dijelaskan mengapa saat meng-install package electron parameter --save-dev diberikan.

Selain itu, Anda juga sudah dijelaskan bahwa BrowserWindow dapat menerima beberapa parameter seperti web preferences dan lain-lain.

Saran saya, cobalah bereksperimen dengan menerapkan parameter-parameter tadi di project Anda dan lihat hasilnya.
