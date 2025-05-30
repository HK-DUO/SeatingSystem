// public/electron.js
import connection from "../backend/db.js";
const { app, BrowserWindow, ipcMain } = await import("electron");
const path = await import("path");
const isDev = await import("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 828,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
      preload: path.join(__dirname, "src/main/preload.mjs"),
    },
  });

  // ***중요***
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  //   if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
}

function handleTest(event, text) {
  console.log("test: ", text);
}

app.whenReady().then(() => {
  // Example: Query the database after creating the window
  connection.query("SELECT * FROM Seat", (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      // console.log("Seats:", results);
      console.log("db connect success!!");
    }
  });

  ipcMain.on("testChannel", handleTest);
});

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
