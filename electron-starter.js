//main.js
//Основная конфигуация для старта приложения
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const path = require ('path'); 
const url = require ('url'); 

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 625,
    fullscreen:true,
    // frame:true,
    // resizable:false
    }); //основная конфигуация

  mainWindow.loadURL('http://localhost:3000'); //загрузка html файла  'file://' + __dirname + '/index.html'

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
} //закрытие главного окна

app.on('ready', createWindow); //создание окна при готовности приложения

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});  //закрытие окна и сворачивание в док если это OS X

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow();

  }
}); //восстановление окна