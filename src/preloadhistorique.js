const {contextBridge, ipcRenderer} = require('electron');


contextBridge.exposeInMainWorld('API' , {
queryPasswords: () => ipcRenderer.send('query-passwords'),
onReplyPasswords: function(callback) {
    ipcRenderer.on('reply-passwords', function(event, data) {
        callback(data);
    });
}
})