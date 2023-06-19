/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const { contextBridge, ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  contextBridge.exposeInMainWorld('electronAPI', {
    optimizeDiscord: () => ipcRenderer.send('optimize-discord'),
    NettoyagePC: () => ipcRenderer.send('NettoyagePC'),
    InstallerSpotify: () => ipcRenderer.send('InstallerSpotify'),
    OneDrive: () => ipcRenderer.send('OneDrive'),
    Repair: () => ipcRenderer.send('Repair'),
    NVIDIA: () => ipcRenderer.send('NVIDIA'),
    Edge: () => ipcRenderer.send('Edge'),
    Reappliqueroptimisation: () => ipcRenderer.send('Reappliqueroptimisation'),
  }) 
})
