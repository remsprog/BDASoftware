const {app, BrowserWindow, dialog} = require('electron');
const path = require('path');
const url = require('url');

var prefs;

function createSplashScreen(){
  splashScreen = new BrowserWindow({width:1280, height:720, icon:__dirname+'/Images/Icons/icon.png', frame:false, show: false, webPreferences:{nodeIntegration: true}})
  splashScreen.setIgnoreMouseEvents(false);
  splashScreen.loadURL(url.format({
    pathname: path.join(__dirname, 'code/html/splashScreen.html'),
    protocol: 'file:',
    slashes: true
  }));


  splashScreen.once('ready-to-show', () => {
    splashScreen.show();
  });
  splashScreen.on('closed', () => {
    splashScreen=null;
  });
}








app.on('ready', function(){
  createSplashScreen();
}
)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
