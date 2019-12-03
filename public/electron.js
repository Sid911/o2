// ./main.js
const {app, BrowserWindow} = require('electron')

let win = null;

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600, frame: false })
  win.show()

  win.loadURL('http://localhost:3000');

  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});