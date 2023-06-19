// Modules to control application life and create native browser window
const { exec } = require('child_process')
const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: 'img.ico',
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.setMenu(null); // Supprimer la barre de menu
  mainWindow.setIcon(path.join('img.png')); //logo de l'app

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  console.log('page ouverte...')

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('optimize-discord', (event) => {
    console.log('optimize-discord lancé...');
    const discord = 'C:\\bin\\tweaks\\DiscordOpti.ps1';
    exec(`powershell -ExecutionPolicy Bypass -File "${discord}"`)
  });

  ipcMain.on('NettoyagePC', (event) => {
    console.log('NettoyagePC lancé...');
    const nettoyage = 'C:\\bin\\tweaks\\nettoyage.cmd';
    exec(`cmd.exe /c ${nettoyage}`)
  });

  ipcMain.on('InstallerSpotify', (event) => {
    console.log('spotify lancé...');
    const spotify = 'C:\\bin\\tweaks\\spotify.cmd';
    exec(`cmd.exe /c ${spotify}`)
  });

  ipcMain.on('OneDrive', (event) => {
    console.log('OneDrive lancé...');
    const onedrive = 'C:\\bin\\tweaks\\OneDrive.cmd';
    exec(`cmd.exe /c ${onedrive}`)
  });

  ipcMain.on('Repair', (event) => {
    console.log('reparation lancé...');
    const repair = 'C:\\bin\\tweaks\\repair.cmd';
    exec(`cmd.exe /c ${repair}`)
  });

  ipcMain.on('NVIDIA', (event) => {
    console.log('nvidia lancé...');
    const NVIDIA = 'C:\\bin\\tweaks\\InstallDriver.ps1';
    exec(`powershell.exe -ExecutionPolicy Bypass -File ${NVIDIA}`)
  });

  ipcMain.on('Edge', (event) => {
    console.log('edge lancé...');
    const Edge = 'C:\\bin\\tweaks\\RemoveEdge.cmd';
    exec(`powershell.exe -ExecutionPolicy Bypass -File ${Edge}`)
  });

  ipcMain.on('Reappliqueroptimisation', (event) => {
    console.log('opti lancé...');
    const Reappliqueroptimisation = 'C:\\bin\\tweaks\\opti.cmd';
    exec(`cmd.exe /c ${Reappliqueroptimisation}`)
  });
  // Ajoutez d'autres écouteurs IPC ici pour les autres actions
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
