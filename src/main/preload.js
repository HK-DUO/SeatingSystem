import { contextBridge, ipcRenderer } from "electron";

const preloadInterface = "myPreload";

contextBridge.exposeInMainWorld(preloadInterface, {
  listenChannelMessage: (callback) =>
    ipcRenderer.on("test", (_, data) => callback(data)),
  sendMessage: (data) => ipcRenderer.send("channel", data),
});

contextBridge.exposeInMainWorld("textInterface", {
  sendMessage: (data) => ipcRenderer.send("testChannel", data),
});
