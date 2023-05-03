const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const Store = require('electron-store');
//const update = require('update-electron-app')()
const store = new Store();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// Créer une nouvelle fenetre
const createSecondWindow = () => {
  // Create the browser window.
  const secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    // parent: mainWindow,
    webPreferences: {
      preload: path.join(__dirname, 'preloadhistorique.js'),
    },
  });
  
  // and load the page2.html of the app.
  secondWindow.loadFile(path.join(__dirname,'historique.html'));
  secondWindow.once("ready-to-show", () => {
  secondWindow.show();
  secondWindow.webContents.openDevTools();
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


ipcMain.on("second-window",async (e) => {
  createSecondWindow()

});
ipcMain.on("query-passwords", (e) => {
 let data = store.store
e.returnValue = store.store
//TODO Récupérer les données
e.sender.send('reply-passwords', data);
console.log(data)

})

ipcMain.on("save-pwd",async (e, password) => {
  const item = (store.size +1).toString()
  store.set(item, password)
 
});

ipcMain.on('notif-notification', (e) => {
createNofication()
} )

function createNofication() {
  new Notification ({
  title: "Nouveau mot de passe generer",
  body:"Regarder dans l'historique",
}).show();
}