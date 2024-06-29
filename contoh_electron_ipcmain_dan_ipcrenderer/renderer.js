// file: renderer.js
// dimuat dari index.html

// begin: import modules
const { ipcRenderer } = require("electron");
// end: import modules

// ketika dokumen html ready
$(document).ready(function () {
    // ketika button dengan id: btn-send-to-main-process diklik
    $("#btn-send-to-main-process").click(function () {
        // kirim event ke main process
        ipcRenderer.send("button-click", { name: "swlrnshw-200", age: "30an" });
    });

    // balasan dari main process (dengan event.reply di main process)
    ipcRenderer.on("button-click-reply", (event, args) => {
        alert(args);
    });

    // balasan dari main process (dengan webContents.send)
    ipcRenderer.on("from-win-webcontents-send", (event, args) => {
        alert(args);
    });
});
