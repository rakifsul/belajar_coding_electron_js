# Belajar Electron JS Cara Membuat Project

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_create

## Pendahuluan

Electron atau Electron js adalah sebuah framework aplikasi desktop yang menggunakan bahasa JavaScript.

Electron dapat digunakan untuk membuat aplikasi Windows, Mac OS dan Linux dengan tampilan yang dirancang dengan teknologi HTML, CSS, dan JavaScript.

Walaupun aplikasi yang dihasilkan oleh framework itu memiliki ukuran yang cukup besar, framework itu sebenarnya sangat memudahkan kita untuk membuat aplikasi bot.

Hal itu disebabkan bahwa Electron sebenarnya adalah web browser, tapi dapat dijadikan aplikasi standalone.

Pada tutorial kali ini, saya akan membahas cara membuat project Electron dari nol.

## Lebih Lanjut tentang Electron atau Electron js

Electron.js adalah sebuah framework open-source yang memungkinkan Anda untuk mengembangkan aplikasi desktop lintas-platform menggunakan teknologi web, seperti HTML, CSS, dan JavaScript.

Berikut adalah penjelasan tentang Electron.js:

Pengembangan Aplikasi Desktop: Electron.js memungkinkan pengembangan aplikasi desktop lintas-platform yang kuat dan canggih menggunakan teknologi web yang umum, seperti HTML, CSS, dan JavaScript. Ini memungkinkan pengembang web untuk memanfaatkan keterampilan mereka untuk membuat aplikasi desktop.

Berbasis Chromium dan Node.js: Electron.js menggabungkan kemampuan dari Chromium untuk rendering halaman web dan Node.js untuk menjalankan kode JavaScript di sisi server. Ini memberikan akses penuh ke API dan kemampuan dari kedua platform tersebut.

Struktur Aplikasi: Aplikasi Electron.js terdiri dari dua proses utama: proses utama (main process) dan proses renderer (renderer process). Proses utama mengontrol jendela aplikasi dan berinteraksi dengan sistem operasi, sedangkan proses renderer menangani rendering konten HTML, CSS, dan JavaScript.

Kustomisasi Antarmuka Pengguna: Anda dapat membuat antarmuka pengguna yang kaya dan dinamis dengan menggunakan HTML dan CSS untuk merancang tata letak dan gaya visual, dan JavaScript untuk menambahkan interaktivitas dan fungsionalitas.

Komunikasi Antar-Proses: Electron.js menyediakan berbagai mekanisme untuk komunikasi antara proses utama dan proses renderer, seperti modul ipcMain dan ipcRenderer, yang memungkinkan pertukaran pesan antara kedua proses.

Kompabilitas Lintas-Platform: Aplikasi yang dikembangkan dengan Electron.js dapat dijalankan di berbagai sistem operasi, termasuk Windows, macOS, dan Linux, dengan sedikit atau tanpa perubahan kode.

Komunitas dan Ekosistem yang Kuat: Electron.js memiliki komunitas pengembang yang besar dan aktif, serta banyaknya sumber daya, plugin, dan alat yang tersedia untuk membantu dalam pengembangan aplikasi.

Aplikasi yang Terkenal: Banyak aplikasi terkenal dan populer telah dibangun menggunakan Electron.js, termasuk Slack, Visual Studio Code, Discord, dan banyak lainnya. Ini menunjukkan keandalan dan fleksibilitas framework ini dalam mengembangkan aplikasi desktop modern.

Secara keseluruhan, Electron.js adalah framework yang kuat dan populer untuk pengembangan aplikasi desktop lintas-platform.

Dengan kemampuan untuk memanfaatkan teknologi web dan akses ke fitur-fitur dari Chromium dan Node.js, Electron.js memungkinkan pengembang untuk membuat aplikasi desktop yang kaya fitur dan canggih dengan mudah.

## Tujuan

Berikut ini adalah tujuan tutorial ini:

-   Mampu membuat project Electron.
-   Mampu memunculkan BrowserWindow kosong.

## Prasyarat

Untuk memulai, sebelumnya Anda harus:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Men-download dan meng-install Node.js dan NPM.
-   Bisa meng-akses Node.js dan NPM dari PowerShell di folder manapun.

## Langkah-Langkah

Setelah semua prasyarat terpenuhi, sekarang saatnya untuk memulai.

### 1. Melakukan NPM Init (Sebagai Inisialisasi)

Pertama, buatlah sebuah folder di manapun dengan nama "contoh_electron_create".

Namanya sebenarnya bebas, tapi di tutorial ini saya sarankan untuk mengikuti saya agar tidak bingung.

Selanjutnya masuklah ke dalam folder tersebut dengan PowerShell:

```
cd contoh_electron_create
```

Sekarang, Anda sudah berada di dalam folder "contoh_electron_create".

Lanjut, jalankan perintah ini:

```
npm init -y
```

Setelah menjalankan perintah tadi, akan muncul file "package.json" di folder "contoh_electron_create":

```
{
  "name": "contoh_electron_create",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 2. Mengubah File "package.json"

Sekarang, ubah "package.json" menjadi seperti ini:

```
{
  "name": "contoh_electron_create",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 3. Meng-install Package Electron

Sekarang, kembali buka PowerShell jika belum terbuka di folder "contoh_electron_create".

Kemudian, jalankan perintah ini:

```
npm install electron --save-dev
```

Perintah tadi akan men-download package electron dan menyimpannya di dalam folder "node_modules".

Parameter --save-dev menunjukkan bahwa dependency tersebut hanya digunakan selama development.

Artinya, jika Anda telah men-deploy aplikasi ini, electron tidak akan disertakan dalam folder "node_modules".

Setelah itu dilakukan, sekarang "package.json" akan menjadi seperti ini:

```
{
  "name": "contoh_electron_create",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^27.1.0"
  }
}
```

Lihat property "devDependencies".

Di sana ada entry bernama electron.

Jika tadi Anda tidak menggunakan parameter --save-dev pada npm install-nya, maka dia akan ada di property "dependencies".

### 4. Membuat File "index.js" dan Mengisinya dengan Kode

Sekarang, buatlah file baru bernama "index.js" di dalam folder "contoh_electron_create".

Setelah dibuat, isi dengan kode ini:

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

Perhatikan baik-baik komentar kode yang saya tulis, karena menurut saya itu cara terbaik untuk menjelaskan kode.

### 5. Menjalankan Aplikasi Electron

Sekarang kita siap untuk mencoba aplikasi ini.

Pastikan Anda telah membuka PowerShell dan berada di dalam folder "contoh_electron_create".

Sekarang, jalankan:

```
npm run dev
```

Nanti akan muncul sebuah Window kosong.

Window tersebut dinamakan BrowserWindow.

Itu adalah bagian paling mendasar dalam GUI Electron.

Di dalam window tersebut, kita akan bisa mengisinya dengan HTML, CSS, dan JavaScript untuk membentuk tampilan yang bagus dan modern.

## Penutup

Sekarang, Anda sudah tahu cara membuat project Electron.

Aplikasi yang saya buat tadi adalah salah satu contoh aplikasi Electron yang paling sederhana.

Intinya, Anda harus membuat BrowserWindow.

Nanti, BrowserWindow tersebut bisa membuka file HTML baik secara lokal maupun dari remote address yang artinya tampilannya akan muncul.
