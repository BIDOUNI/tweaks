/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
document.addEventListener('DOMContentLoaded', () => {
  const btnOptimizeDiscord = document.getElementById('btnOptimizeDiscord');
  const NettoyagePC = document.getElementById('NettoyagePC');
  const InstallerSpotify = document.getElementById('InstallerSpotify');
  const OneDrive = document.getElementById('OneDrive');
  const Repair = document.getElementById('Repair');
  const NVIDIA = document.getElementById('NVIDIA');
  const Edge = document.getElementById('Edge');
  // Ajoutez les autres boutons ici

  btnOptimizeDiscord.addEventListener('click', () => {
    window.electronAPI.optimizeDiscord();
  });
  NettoyagePC.addEventListener('click', () => {
    window.electronAPI.NettoyagePC();
  });

  InstallerSpotify.addEventListener('click', () => {
    window.electronAPI.InstallerSpotify();
  });

  OneDrive.addEventListener('click', () => {
    window.electronAPI.OneDrive();
  });

  Repair.addEventListener('click', () => {
    window.electronAPI.Repair();
  });

  NVIDIA.addEventListener('click', () => {
    window.electronAPI.NVIDIA();
  });
  
  Edge.addEventListener('click', () => {
    window.electronAPI.Edge();
  });

  Reappliqueroptimisation.addEventListener('click', () => {
    window.electronAPI.Reappliqueroptimisation();
  });
});