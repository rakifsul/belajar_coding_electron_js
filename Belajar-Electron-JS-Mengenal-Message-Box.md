# Belajar Electron JS Mengenal Message Box

## Source Code Project Ini

https://github.com/rakifsul/belajar_coding_electron_js/tree/main/contoh_electron_message_box

## Pendahuluan

Dalam sebuah aplikasi desktop, terkadang ada pesan yang perlu disampaikan kepada pengguna karena berbagai alasan.

Misalnya ada error pada aplikasi, task tertentu telah selesai dilakukan, ada peringatan, dan lain-lain.

Untuk menampilkan pesan semacam itu, Message Box bisa digunakan.

Electron telah menyediakan API untuk memberi pesan melalui Message Box.

Di sini, saya akan membahas beberapa jenis Message Box yang disediakan Electron.

## Lebih Lanjut tentang Message Box

Message box dalam Electron.js adalah sebuah komponen yang memungkinkan aplikasi Anda untuk menampilkan pesan kepada pengguna dalam bentuk dialog atau jendela popup.

Ini dapat digunakan untuk memberikan informasi, meminta konfirmasi, atau mengumpulkan input dari pengguna.

Berikut adalah beberapa poin penting tentang message box di Electron.js:

Tipe-tipe Pesan: Message box dapat digunakan untuk menampilkan berbagai jenis pesan kepada pengguna, termasuk pesan informasi, peringatan, kesalahan, konfirmasi, atau input. Ini memungkinkan Anda untuk berkomunikasi dengan pengguna secara efektif dalam berbagai situasi.

Antarmuka Pengguna yang Ramah: Message box menyediakan antarmuka grafis yang mudah dipahami oleh pengguna, yang memungkinkan mereka untuk membaca pesan, memberikan tanggapan, atau memberikan input dengan mudah. Ini membantu meningkatkan pengalaman pengguna dan membuat aplikasi Anda lebih ramah pengguna.

Kustomisasi Pesan: Message box dapat disesuaikan dengan konten dan gaya visual yang sesuai dengan kebutuhan aplikasi Anda. Anda dapat menentukan judul, teks pesan, ikon, tombol, dan perilaku lainnya untuk memenuhi kebutuhan spesifik Anda.

Pilihan Aksi: Message box dapat memuat berbagai jenis tombol aksi, termasuk tombol OK, Cancel, Yes, No, dan lain-lain, tergantung pada jenis pesan yang ditampilkan dan respons yang diinginkan dari pengguna. Ini memungkinkan Anda untuk mengarahkan pengguna ke tindakan yang sesuai dengan pesan yang ditampilkan.

Tanggapan dan Penanganan Kesalahan: Message box memungkinkan Anda untuk menanggapi respons pengguna terhadap pesan yang ditampilkan, seperti mengambil tindakan berdasarkan tombol yang diklik oleh pengguna atau menangani kesalahan yang mungkin terjadi selama proses.

Kompabilitas Lintas-Platform: Message box dalam Electron.js mendukung berbagai sistem operasi, termasuk Windows, macOS, dan Linux. Ini memastikan bahwa pengalaman pengguna konsisten di berbagai platform dan lingkungan.

Integrasi dengan Sistem Operasi: Message box memanfaatkan tampilan bawaan dari sistem operasi tempat aplikasi Electron.js berjalan, sehingga terlihat dan berperilaku seperti dialog pesan standar yang dikenal oleh pengguna sistem operasi mereka.

Secara keseluruhan, message box dalam Electron.js adalah fitur penting yang memungkinkan aplikasi Anda untuk berkomunikasi dengan pengguna dengan efektif, memberikan informasi yang relevan, dan mengumpulkan tanggapan atau input dari pengguna sesuai kebutuhan.

Dengan kemampuan kustomisasi, kemudahan integrasi, dan kompatibilitas lintas-platform, message box membantu meningkatkan fungsionalitas dan interaktivitas aplikasi Anda.

## Tujuan

Tujuan dari tutorial ini adalah:

-   Pembaca mengenal beragam jenis Message Box di Electron.
-   Pembaca dapat menggunakan Message Box di Electron.

## Prasyarat

Prasyarat dari tutorial ini adalah:

-   Menggunakan sistem operasi Windows 10 ke atas.
-   Telah meng-install Node.js dan NPM dan mampu menjalankannya dari folder manapun.
-   Telah membaca dan memahami cara pembuatan project Electron.

## Langkah-Langkah

Pertama, buatlah project Electron dengan nama "contoh_electron_message_box".

Anda bisa membuatnya dengan cara yang telah dijelaskan di "[Belajar Electron JS Cara Membuat Project](https://github.com/rakifsul/belajar_coding_electron_js/blob/main/Belajar-Electron-JS-Cara-Membuat-Project.md)".

Selanjutnya, buka file "index.js" dan isi dengan kode ini:

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

    // message box biasa
    await dialog.showMessageBox({
        message: "message box biasa",
    });

    // message box modal. jadi message box ini menutupi parent window nya.
    await dialog.showMessageBox(win, {
        message: "message box modal",
    });

    // message box error
    await dialog.showMessageBox({
        message: "message box error",
        type: "error",
    });

    // message box info
    await dialog.showMessageBox({
        message: "message box info",
        type: "info",
    });

    // return value dari message box
    const buttonID1 = await dialog.showMessageBox({
        message: "return value dari message box - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
    });
    console.log(buttonID1);

    // message box dengan checkbox
    const buttonID2 = await dialog.showMessageBox({
        message: "message box dengan checkbox - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
        checkboxLabel: "Coba Checkbox",
        checkboxChecked: false,
    });
    console.log(buttonID2);
});
```

Kemudian, jalankan aplikasi ini dengan:

```
npm run dev
```

Nanti BrowserWindow akan muncul bersama beberapa jenis Message Box yang ditulis di "index.js" tadi.

## Pembahasan

Pada tutorial ini, kita hanya perlu satu file JavaScript untuk main process saja.

Itu karena Message Box adalah bagian dari main process.

Message Box itu sendiri merupakan komponen yang dipanggil melalui method showMessageBox yang merupakan method dari modul dialog.

Kode ini:

```
    // message box biasa
    await dialog.showMessageBox({
        message: "message box biasa",
    });
```

Memanggil Message Box biasa.

Sifatnya juga non-modal, yang artinya kemunculannya tidak menghalangi parent window-nya.

Adapun kode ini:

```
    // message box modal. jadi message box ini menutupi parent window nya.
    await dialog.showMessageBox(win, {
        message: "message box modal",
    });
```

Memanggil Message Box biasa juga.

Hanya saja, sifatnya modal. Artinya kemunculannya menghalangi parent window-nya.

Anda bisa lihat sendiri bahwa di kode tersebut saya mem-passing variabel win sebagai parent dari Message Box itu.

Kode ini:

```
    // message box error
    await dialog.showMessageBox({
        message: "message box error",
        type: "error",
    });

    // message box info
    await dialog.showMessageBox({
        message: "message box info",
        type: "info",
    });
```

Memanggil Message Box dari jenis error dan info.

Perbedaannya ada pada icon yang ditampilkan.

Selain itu, Message Box juga bisa memberikan return value, tergantung dari tombol apa yang diklik dari Message Box tesebut:

```
    // return value dari message box
    const buttonID1 = await dialog.showMessageBox({
        message: "return value dari message box - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
    });
    console.log(buttonID1);
```

Anda bisa lihat console dari PowerShell untuk mendapatkan index tombol mana yang diklik.

Index tersebut adalah index dari array teks tombol ini:

```
["Ya", "Tidak", "Batalkan"]
```

Message Box juga bisa disertai checkbox:

```
    // message box dengan checkbox
    const buttonID2 = await dialog.showMessageBox({
        message: "message box dengan checkbox - lihat console",
        buttons: ["Ya", "Tidak", "Batalkan"],
        checkboxLabel: "Coba Checkbox",
        checkboxChecked: false,
    });
    console.log(buttonID2);
```

Di kode tadi, label dari checkbox adalah "Coba Checkbox".

Return valuenya juga bisa didapatkan. Silakan cek console dari PowerShell Anda.

## Penutup

Sekarang Anda telah mengenal beberapa jenis Message Box yang tadi telah saya bahas.

Dalam prakteknya, saya lebih menyarankan untuk menggunakan Message Box daripada alert().

Itu karena fitur Message Box lebih lengkap.
