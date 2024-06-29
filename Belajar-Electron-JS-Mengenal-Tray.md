# Belajar Electron JS Mengenal Tray

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_tray

## Pendahuluan

Apa Itu Tray?

Tray adalah ikon interaktif yang terletak di taskbar Windows 11, biasanya di pojok kanan bawah layar komputer.

Pada Windows 11, ikon tray dari aplikasi yang belum pernah dijalankan sebelumnya disembunyikan di balik ikon panah ke atas di pojok kanan bawah layar.

Di pengaturan Windows 11, kita bisa memperluas ikon panah tersebut sehingga ikon tray tidak lagi tersembunyi.

Tray berfungsi untuk memberi tahu pengguna bahwa aplikasi yang menggunakan tray masih berjalan di latar belakang meskipun jendelanya sudah ditutup.

Apa Kegunaan BrowserWindow dalam Proyek Tutorial Ini?

Penggunaan BrowserWindow dalam tutorial ini adalah untuk menunjukkan lokasi tray kepada Anda.

Dengan kata lain, file HTML-nya hanya berisi panduan saja.

Perlu diingat bahwa tray yang dijelaskan di sini hanya diuji di Windows 11.

Saya tidak menjamin bahwa contoh proyek ini akan berjalan dengan normal di sistem operasi lainnya.

## Lebih Lanjut tentang Tray

Electron.js adalah sebuah framework open-source yang memungkinkan pengembang untuk membuat aplikasi desktop lintas platform menggunakan teknologi web seperti HTML, CSS, dan JavaScript.

Salah satu konsep kunci dalam pengembangan aplikasi desktop dengan Electron.js adalah "Tray."

Dalam bagian ini, kita akan membahas konsep Tray dalam Electron.js tanpa menggunakan kode, dengan fokus pada pemahaman konsep, implementasi, dan manfaat yang ditawarkan oleh Tray.

### Pengertian Konsep Tray

Tray adalah sebuah konsep yang digunakan dalam pengembangan aplikasi desktop untuk menyajikan ikon atau notifikasi di area tray atau systray pada sistem operasi.

Area tray adalah bagian kecil yang biasanya terletak di bilah tugas atau menu bar pada sistem operasi, yang menyediakan akses cepat dan notifikasi terhadap aplikasi yang berjalan di latar belakang.

Dalam Electron.js, Tray memungkinkan pengembang untuk menyematkan ikon aplikasi ke area tray dan memberikan fungsionalitas tertentu seperti menu kontekstual dan notifikasi.

### Fungsionalitas Utama Tray

#### Menyematkan Ikon Aplikasi

Fungsi utama dari Tray adalah menyematkan ikon aplikasi ke area tray. Ikon ini biasanya merepresentasikan aplikasi dan memberikan akses cepat ke fungsionalitas atau informasi tertentu.

#### Menu Kontekstual

Tray memungkinkan pengembang untuk menyediakan menu kontekstual yang muncul saat pengguna mengklik ikon di area tray. Menu ini dapat berisi opsi dan perintah yang berhubungan dengan aplikasi.

#### Notifikasi

Tray dapat digunakan untuk memberikan notifikasi kepada pengguna. Notifikasi ini dapat berupa pemberitahuan visual atau suara yang memberi tahu pengguna tentang peristiwa atau status tertentu.

#### Interaksi Pengguna

Tray menyediakan cara bagi pengguna untuk berinteraksi dengan aplikasi tanpa harus membuka jendela utama. Ini membantu dalam memberikan akses cepat dan penggunaan yang efisien.

#### Status Aplikasi

Tray dapat mencerminkan status atau kondisi aplikasi. Ikon atau warna di area tray dapat berubah untuk memberi tahu pengguna tentang kondisi tertentu, seperti penerimaan pesan baru atau koneksi yang sedang aktif.

### Implementasi Tray dalam Electron.js

#### Pendefinisian Tray

Untuk menggunakan Tray dalam Electron.js, pengembang perlu membuat instance dari kelas Tray. Ini melibatkan menyediakan path untuk ikon yang akan digunakan dalam tray.

#### Menyematkan Ikon

Setelah Tray didefinisikan, ikon aplikasi dapat disematkan ke area tray dengan menggunakan metode setToolTip dan setContextMenu untuk menyematkan tooltip dan menu kontekstual.

#### Menambahkan Notifikasi

Tray juga dapat digunakan untuk menambahkan notifikasi yang akan muncul ketika pengguna mengklik atau berinteraksi dengan ikon tray.

#### Menanggapi Klik Tray

Pengembang dapat menanggapi klik pada ikon tray dengan menentukan fungsi yang akan dijalankan saat ikon di area tray diklik.

#### Mengelola Siklus Hidup Aplikasi

Pengembang perlu memastikan bahwa Tray diinisialisasi dan dihapus sesuai dengan siklus hidup aplikasi. Tray biasanya dihapus ketika aplikasi ditutup.

### Contoh Penggunaan Tray

#### Notifikasi Pesan Baru

Tray dapat digunakan untuk memberikan notifikasi kepada pengguna saat pesan baru diterima dalam aplikasi pesan instan. Ikon tray dapat berkedip atau berubah warna untuk menarik perhatian.

#### Pemantauan Koneksi

Jika aplikasi bergantung pada koneksi jaringan, Tray dapat menampilkan status koneksi saat ini. Ikon yang berubah warna atau tooltip yang memberikan informasi tentang koneksi dapat membantu pengguna.

#### Pemberitahuan Tugas Latar Belakang

Jika aplikasi memiliki tugas latar belakang, Tray dapat memberikan notifikasi ketika tugas selesai atau ada peristiwa penting.

#### Pengelolaan Aplikasi

Tray dapat menyediakan opsi untuk mengelola aplikasi, seperti membuka atau menutup jendela utama, membuka pengaturan, atau mematikan aplikasi.

#### Monitoring Status Aplikasi

Tray dapat mencerminkan status aplikasi, seperti apakah aplikasi sedang aktif, dalam mode istirahat, atau dalam mode tersembunyi.

### Manfaat Penggunaan Tray

#### Akses Cepat

Tray memberikan akses cepat ke fungsionalitas aplikasi tanpa perlu membuka jendela utama. Ini meningkatkan efisiensi penggunaan aplikasi.

#### Notifikasi Tanpa Mengganggu

Tray memungkinkan pengguna untuk menerima notifikasi tanpa mengganggu pekerjaan yang sedang dilakukan. Notifikasi dapat muncul sebagai tooltip atau pemberitahuan kecil.

#### Interaksi Minimal

Pengguna dapat berinteraksi dengan aplikasi dengan menggunakan sedikit interaksi pengguna melalui klik kanan pada ikon tray atau menggunakan menu kontekstual.

#### Monitoring Aktivitas Latar Belakang

Tray dapat membantu pengguna memonitor aktivitas latar belakang aplikasi dan memberikan pemberitahuan saat peristiwa penting terjadi.

#### Pemeliharaan Notifikasi

Dengan Tray, notifikasi dapat dikelola secara terpusat dan tidak perlu mengganggu pengalaman pengguna dengan jendela pemberitahuan terpisah.

Konsep Tray dalam Electron.js memberikan kemungkinan untuk meningkatkan interaksi pengguna dengan aplikasi desktop.

Dengan menyediakan akses cepat, notifikasi yang tidak mengganggu, dan interaksi minimal, Tray memainkan peran penting dalam membuat aplikasi desktop yang responsif dan efisien.

Dengan memahami konsep ini, pengembang dapat memanfaatkannya untuk memberikan pengalaman pengguna yang lebih baik, memantau status aplikasi, dan memberikan notifikasi dengan cara yang lebih terorganisir.

Dengan demikian, penggunaan Tray dalam pengembangan aplikasi desktop dengan Electron.js dapat memberikan nilai tambah yang signifikan kepada aplikasi yang dibangun menggunakan framework ini.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami Tray dan dapat menggunakannya di aplikasi Electron.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 11. Karena hanya telah teruji di OS tersebut. Saya tidak bisa jamin akan works di OS lain.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah sebuah project Electron dengan nama "contoh_electron_tray".

Anda bisa membuatnya dengan cara yang dijelaskan pada "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Jika Anda telah mengikuti tutorial tersebut, pasti ada file bernama "index.js" di dalam folder project Anda.

Bukalah file "index.js" dan isi dengan kode ini:

```
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
```

Selanjutnya, buat file "index.html" dan isi dengan kode ini:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tray Example</title>

  <style>

  </style>
</head>

<body>
  <h1>Perhatikan pojok kanan bawah dari layar monitor Anda.</h1>
  <h1>Jika icon tray belum terlihat, klik tanda panah ke atasnya.</h1>
  <h1>Jika icon tray sudah terlihat, klik kanan pada icon-nya, di sana akan muncul context menu.</h1>
  <script>

  </script>
</body>

</html>
```

Langkah selanjutnya adalah, siapkan sebuah file icon berformat .ico, letakkan di dalam folder project ini, kemudian rename menjadi "tray-icon.ico".

Terakhir, coba jalankan Electron dengan:

```
npm run dev
```

Nanti akan muncul BrowserWindow berisi panduan dan jika Anda perhatikan di pojok kanan bawah layar akan muncul tanda panah ke atas.

Klik tanda panah tersebut dan nanti akan muncul icon Anda tadi.

Jika Anda klik kanan pada icon tersebut maka context menu akan muncul.

Dari situ Anda bisa mengklik menu item-nya.

## Pembahasan

Sekarang, saya akan membahas yang paling mudah dulu, yaitu "index.html":

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tray Example</title>

  <style>

  </style>
</head>

<body>
  <h1>Perhatikan pojok kanan bawah dari layar monitor Anda.</h1>
  <h1>Jika icon tray belum terlihat, klik tanda panah ke atasnya.</h1>
  <h1>Jika icon tray sudah terlihat, klik kanan pada icon-nya, di sana akan muncul context menu.</h1>
  <script>

  </script>
</body>

</html>
```

Kode di atas hanya memberi panduan pada Anda untuk menyaksikan tray yang sedang beraksi.

Sekarang, yang lebih rumit, "index.js".

Pada bagian ini:

```
// begin: import modules
const { app, Menu, Tray, BrowserWindow } = require("electron");
const { shell } = require("electron");
// end: import modules
```

Kita meng-import modul yang dibutuhkan untuk menampilkan tray dan panduannya.

Perhatikan di sana ada modul "Menu" dan "Tray" serta "BrowserWindow" dan "app".

Juga ada "shell" yang nantinya akan digunakan dalam context menu.

Kedua variabel ini untuk menyimpan objek BrowserWindow dan Tray:

```
// variabel untuk menyimpan objek BrowserWindow
let win;

// variabel untuk menyimpan objek Tray
let tray;
```

Kode di bawah ini adalah definisi dari struktur context menu:

```
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
```

Perhatikan juga bahwa kita menggunakan shell.openExternal di setiap respon dari context menu item-nya.

Jika Anda ingin mempelajari shell lebih lanjut, silakan baca tutorial ini.

Selanjutnya, saat app ready, buat BrowserWindow dengan lebar 800 pixel dan tinggi 600 pixel:

```
// saat app ready
app.on("ready", async () => {
    // buat BrowserWindow dan simpan objeknya di variabel win
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });
```

Selanjutnya, masukan panduan ke dalam BrowserWindow tersebut:

```
    // buka file index.html
    win.loadFile("index.html");
```

Selanjutnya, buat Tray:

```
    // buat tray dengan icon tray-icon.ico yang sudah disediakan
    tray = new Tray("./tray-icon.ico");

    // build context menu
    const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

    // buat tooltip dari tray dengan teks "Tray Example"
    tray.setToolTip("Tray Example");

    // assign context menu tadi ke Tray
    tray.setContextMenu(contextMenu);
```

Kode di atas adalah urutan yang mungkin bisa Anda terapkan setiap kali Anda membuat Tray karena elemen-elemen Tray di kode tersebut sudah cukup lengkap.

## Penutup

Sekarang, seharusnya Anda sudah paham tentang Tray di framework Electron.

Saran saya, kembangkan lagi pengetahuan ini dengan eksperimen Anda sendiri.
