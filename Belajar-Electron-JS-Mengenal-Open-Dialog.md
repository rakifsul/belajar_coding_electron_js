# Belajar Electron JS Mengenal Open Dialog

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_open_dialog

## Pendahuluan

Dalam penggunaan aplikasi desktop, tidak jarang kita memerlukan file yang sudah dibuat sebelumnya kemudian kita ingin membukanya kembali.

Jika kita memasukkan path-nya secara manual, maka akan terasa sulit jika kita tidak terbiasa menggunakan command line.

Untuk mendapatkan lokasi file-nya dengan lebih mudah diperlukan sebuah dialog.

Dialog tersebut disebut open dialog.

Dengan open dialog, kita bisa menemukan lokasi file dengan bantuan GUI.

Tujuannya adalah mendapatkan path dari file tersebut.

## Lebih Lanjut tentang Open Dialog

Open dialog dalam Electron.js adalah sebuah komponen yang memungkinkan aplikasi Anda untuk berinteraksi dengan pengguna untuk memilih file atau direktori dari sistem mereka.

Ini memberikan antarmuka grafis yang memungkinkan pengguna untuk menavigasi melalui sistem file dan memilih file atau direktori yang ingin mereka buka.

Berikut adalah beberapa poin penting tentang open dialog di Electron.js:

Pilihan Beragam untuk Memilih File atau Direktori: Open dialog memungkinkan pengguna untuk memilih file tunggal, beberapa file, atau direktori dari sistem file mereka. Ini memberikan fleksibilitas kepada pengguna dalam memilih jenis konten yang ingin mereka buka dari aplikasi Anda.

Antarmuka Pengguna yang Ramah: Open dialog menyediakan antarmuka grafis yang mudah dipahami oleh pengguna, yang memungkinkan mereka untuk menavigasi melalui struktur direktori dan memilih file dengan mudah. Ini membantu meningkatkan pengalaman pengguna dan membuat aplikasi Anda lebih ramah pengguna.

Filter File: Open dialog dapat dikonfigurasi dengan filter file yang membatasi jenis file yang dapat dipilih oleh pengguna. Ini memungkinkan Anda untuk menyaring jenis file yang ditampilkan dalam dialog berdasarkan ekstensi file atau jenis file yang diinginkan.

Kemudahan Integrasi: Open dialog dapat diintegrasikan dengan mudah ke dalam aplikasi Electron.js Anda menggunakan API yang disediakan oleh Electron. Ini memungkinkan Anda untuk menanggapi pemilihan file pengguna dan menggunakannya dalam aplikasi Anda tanpa perlu menulis logika khusus untuk menanganinya.

Kemampuan Validasi dan Penanganan Kesalahan: Open dialog memberikan kemampuan untuk memvalidasi input pengguna dan menangani kesalahan yang mungkin terjadi selama proses pemilihan file. Ini membantu memastikan bahwa pengguna dapat memilih file dengan aman dan efisien.

Kompabilitas Lintas-Platform: Open dialog dalam Electron.js mendukung berbagai sistem operasi, termasuk Windows, macOS, dan Linux. Ini memastikan bahwa pengalaman pengguna konsisten di berbagai platform dan lingkungan.

Integrasi dengan Sistem Operasi: Open dialog memanfaatkan tampilan bawaan dari sistem operasi tempat aplikasi Electron.js berjalan, sehingga terlihat dan berperilaku seperti dialog pembuka file standar yang dikenal oleh pengguna sistem operasi mereka.

Secara keseluruhan, open dialog dalam Electron.js adalah fitur penting yang memungkinkan aplikasi Anda untuk memberikan pengalaman pengguna yang intuitif dan efisien dalam memilih file atau direktori dari sistem file mereka.

Dengan kemampuan kustomisasi, kemudahan integrasi, dan kompatibilitas lintas-platform, open dialog membantu meningkatkan fungsionalitas dan kualitas aplikasi Anda.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami method dialog.showOpenDialog dan beberapa parameternya.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah sebuah project Electron dengan nama "contoh_electron_open_dialog".

Anda bisa membuatnya dengan cara yang dijelaskan pada "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Jika Anda telah mengikuti tutorial tersebut, pasti ada file bernama "index.js" di dalam folder project Anda.

Bukalah file "index.js" dan isi dengan kode ini:

```
// file: index.js

// begin: import modules
const { app, dialog, BrowserWindow } = require("electron");
// end: import modules

// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", async () => {
    // buat browser window
    win = new BrowserWindow();

    // dialog untuk membuka file
    const result1 = await dialog.showOpenDialog(win, {
        title: "Open Project File",
        properties: ["openFile"],
        filters: [
            {
                name: "Dokumen",
                extensions: ["pdf"],
            },
        ],
    });
    console.log(result1); //perhatikan hasilnya

    //dialog untuk membuka directory
    const result2 = await dialog.showOpenDialog(win, {
        title: "Open Project Folder",
        properties: ["openDirectory"],
    });
    console.log(result2); //perhatikan hasilnya
});
```

Selanjutnya, jalankan Electron dengan:

```
npm run dev
```

Hasilnya, kedua dialog yang ada di kode tadi akan muncul secara berurutan.

Dialog pertama untuk memilih file PDF.

Dialog kedua untuk memilih folder.

Setelah kedua dialog tadi ditutup, maka sisanya adalah BrowserWindow.

## Pembahasan

Dalam tutorial ini, hanya ada satu file JavaScript, yakni "index.js". Selain dari yang ada di node_modules tentunya.

Pada bagian ini:

```
    // dialog untuk membuka file
    const result1 = await dialog.showOpenDialog(win, {
        title: "Open Project File",
        properties: ["openFile"],
        filters: [
            {
                name: "Dokumen",
                extensions: ["pdf"],
            },
        ],
    });
    console.log(result1); //perhatikan hasilnya
```

Kita membuka open dialog untuk memilih file, karena ada parameter:

```
properties: ["openFile"].
```

File yang dapat dibuka dari open dialog tersebut berjenis PDF saja, karena ada parameter extensions: ["pdf"].

Extensions itu sendiri adalah akhiran dari nama file setelah titik:

-   notes.txt extension-nya adalah txt
-   book.pdf extension-nya adalah pdf

Return value dari method tersebut adalah array berisi file path.

Pada bagian ini:

```
    //dialog untuk membuka directory
    const result2 = await dialog.showOpenDialog(win, {
        title: "Open Project Folder",
        properties: ["openDirectory"],
    });
    console.log(result2); //perhatikan hasilnya
```

Kita menggunakan open dialog untuk memilih folder.

Itu karena ada parameter properties: ["openDirectory"].

Directory dan folder itu bisa dianggap istilah yang sama.

Return value dari method tersebut adalah array berisi file path.

## Penutup

Sekarang, Anda telah memahami method dialog.showOpenDialog dan beberapa parameternya.

Silakan dieksplorasi lebih jauh lagi.
