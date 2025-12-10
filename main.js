//console.log("Hello, Electron!");
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 500,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js")
      // Don't use the renderer script as a preload. The renderer is
      // already loaded from `index.html` via a script tag. Keep
      // default webPreferences for now (no preload).
    }
    });

    win.loadFile('index.html');
    // Open DevTools to help debugging during development
    //win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
