# Belajar Electron JS Mengenal Save Dialog

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_save_dialog

## Pendahuluan

Fitur "save" atau "save as" bukan hal yang baru di aplikasi desktop.

Biasanya saat menu untuk fitur tersebut diklik, maka akan tampil dialog yang bisa memilih lokasi penyimpanan file.

Itulah Save Dialog.

Electron memberi kita fitur Save Dialog melalui method dialog.showSaveDialog.

Itu termasuk fitur main process dari Electron.

Bagaimana detailnya? Mari kita pelajari.

## Lebih Lanjut tentang Save Dialog

Save dialog dalam Electron.js adalah komponen yang memungkinkan aplikasi Anda untuk berinteraksi dengan pengguna untuk menyimpan file ke dalam sistem mereka.

Ini memberikan antarmuka grafis yang memungkinkan pengguna untuk menentukan lokasi file yang disimpan dan nama file yang diinginkan.

Berikut adalah beberapa poin penting tentang save dialog di Electron.js:

Fungsionalitas Dasar: Save dialog memungkinkan pengguna untuk menentukan lokasi penyimpanan dan nama file yang diinginkan saat mereka menyimpan file dari aplikasi Anda. Ini memberikan kontrol kepada pengguna untuk mengatur file sesuai dengan kebutuhan mereka.

Tampilan Antarmuka yang Ramah Pengguna: Save dialog menyediakan antarmuka grafis yang mudah dipahami oleh pengguna, yang memungkinkan mereka untuk berinteraksi dengan aplikasi Anda dengan nyaman. Ini membantu meningkatkan pengalaman pengguna dan membuat aplikasi Anda lebih ramah pengguna.

Pilihan Kustomisasi: Save dialog dapat disesuaikan dengan kebutuhan aplikasi Anda, termasuk menentukan jenis file yang disimpan, filter file, dan konfigurasi tambahan lainnya. Ini memungkinkan Anda untuk memberikan pengalaman penyimpanan yang lebih khusus sesuai dengan jenis file yang dihasilkan oleh aplikasi Anda.

Kemudahan Penggunaan: Save dialog dapat diintegrasikan dengan mudah ke dalam aplikasi Electron.js Anda menggunakan API yang disediakan oleh Electron. Ini memungkinkan Anda untuk mengatur dan menanggapi interaksi save dialog dengan kode JavaScript tanpa perlu menulis logika khusus untuk menanganinya.

Kemampuan Validasi dan Penanganan Kesalahan: Save dialog memberikan kemampuan untuk memvalidasi input pengguna dan menangani kesalahan yang mungkin terjadi selama proses penyimpanan file. Ini membantu memastikan bahwa pengguna dapat menyimpan file dengan aman dan efisien.

Kompabilitas Lintas-Platform: Save dialog dalam Electron.js mendukung berbagai sistem operasi, termasuk Windows, macOS, dan Linux. Ini memastikan bahwa pengalaman pengguna konsisten di berbagai platform dan lingkungan.

Integrasi dengan Sistem Operasi: Save dialog memanfaatkan tampilan bawaan dari sistem operasi tempat aplikasi Electron.js berjalan, sehingga terlihat dan berperilaku seperti dialog penyimpanan standar yang dikenal oleh pengguna sistem operasi mereka.

Secara keseluruhan, save dialog dalam Electron.js adalah fitur penting yang memungkinkan aplikasi Anda untuk memberikan pengalaman penyimpanan yang intuitif dan efisien kepada pengguna.

Dengan kemampuan kustomisasi, kemudahan penggunaan, dan integrasi yang baik dengan sistem operasi, save dialog membantu meningkatkan kualitas dan fungsionalitas aplikasi Anda.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca memahami dan mampu menggunakan method dialog.showSaveDialog.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah sebuah project Electron dengan nama "contoh_electron_save_dialog".

Anda bisa membuatnya dengan cara yang dijelaskan pada tutorial sebelumnya.

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
    // buat BrowserWindow
    win = new BrowserWindow();

    // buka save dialog
    // judulnya: Judul Dialog
    // path default nya: D:
    // filter untuk jenis file JavaScript
    const result = await dialog.showSaveDialog(win, {
        title: "Judul Dialog",
        defaultPath: "D:\\",
        filters: [
            {
                name: "JavaScript",
                extensions: ["js"],
            },
        ],
    });

    console.log(result); // perhatikan hasilnya
});
```

Sekarang, jalankan Electron dengan perintah:

```
npm run dev
```

Nanti Save Dialog akan muncul bersamaan dengan terbukanya BrowserWindow.

Setelah lokasi save dipilih, maka akan muncul output berisi path di console dari PowerShell.

Berbeda dengan Open Dialog yang berupa array.

Di Save Dialog hanya single value.

Itu masuk akal karena kita hanya bisa mensave satu file dalam satu waktu jika menggunakan Save Dialog.

## Pembahasan

Aplikasi yang kita buat ini berawal dari mengimpor modul:

```
// begin: import modules
const { app, dialog, BrowserWindow } = require("electron");
// end: import modules
```

Kemudian dilanjutkan dengan membuat BrowserWindow dan menyimpan referensinya ke variabel bernama win:

```
// buat variabel win untuk menyimpan objek BrowserWindow
let win;

// ketika app ready
app.on("ready", async () => {
    // buat BrowserWindow
    win = new BrowserWindow();
```

Setelah itu, kita menampilkan Save Dialog dengan kode ini:

```
    // buka save dialog
    // judulnya: Judul Dialog
    // path default nya: D:
    // filter untuk jenis file JavaScript
    const result = await dialog.showSaveDialog(win, {
        title: "Judul Dialog",
        defaultPath: "D:\\",
        filters: [
            {
                name: "JavaScript",
                extensions: ["js"],
            },
        ],
    });

    console.log(result); // perhatikan hasilnya
```

Judul dari Save Dialog yang kita buat adalah "Judul Dialog".

Default path-nya adalah "D:\\".

Selain itu, kita juga memfilter file dengan ekstensi ".js".

dialog.showSaveDialog akan mengembalikan objek saat selesai digunakan.

Objek itu terdiri dari 2 property:

-   cancelled: apakah user membatalkan pemilihan lokasi file?
-   filePath: path di mana user men-save file.

## Penutup

Sekarang Anda telah memahami method dialog.showSaveDialog.

Silakan kembangkan pengetahuan ini lebih lanjut.
