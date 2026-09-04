const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    //default size set to 500x800
    width: 500,
    height: 800,
    autoHideMenuBar: true, // Hides the top menu bar for a cleaner look
    icon: path.join(__dirname, 'app_icon.ico'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load the main calculator file
  win.loadFile('calculator.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})