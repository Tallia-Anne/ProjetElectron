// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge, ipcRenderer} = require('electron');


contextBridge.exposeInMainWorld('API' , {
secondWindow: () => ipcRenderer.send('second-window'),
setPassword:(password) => ipcRenderer.send('save-pwd', password),
notifNotification:(notification) => ipcRenderer.send("notif-notification", notification),
// deleteMtp:() => ipcRenderer.send('supprimer-pwd')


})