const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')

let win;

app.setPath("userData", __dirname + "/saved_recordings")

var loaded=false;

function createSplashScreen(){
  console.log(__dirname)
  splashScreen = new BrowserWindow({width:1280, height:720, icon:__dirname+'/Images/Icons/icon.png', frame:false, show: false})
  //win.setMenuBarVisibility(false)
  //win.setProgressBar(0.5)
  //win.maximize()
  splashScreen.setIgnoreMouseEvents(false)
  splashScreen.loadURL(url.format({
    pathname: path.join(__dirname, 'html/splash.html'),
    //pathname: path.join(__dirname, 'editor.html'),
    protocol: 'file:',
    slashes: true
  }));

  //win.webContents.openDevTools();
  //win.setMenu(null);
  splashScreen.once('ready-to-show', () => {
    splashScreen.show()
  })
  splashScreen.on('closed', () => {
    splashScreen=null;
  });
}

function createWindow(){
  console.log("Coucou")
  win = new BrowserWindow({width:1280, height:720, icon:__dirname+'/Images/Icons/icon.png', frame:true, fullscreen:true, show: false})
  //win.setMenuBarVisibility(false)
  //win.setProgressBar(0.5)
  //win.maximize()
  win.setIgnoreMouseEvents(false)
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'html/home.html'),
    //pathname: path.join(__dirname, 'editor.html'),
    protocol: 'file:',
    slashes: true
  }));

  //win.webContents.openDevTools();
  //win.setMenu(null);
  win.once('ready-to-show', () => {
    win.show()
  })
  win.on('closed', () => {
    win=null;
  });
}

app.on('ready', createSplashScreen)

setTimeout(function(){
  createWindow()
  splashScreen.close()
},-100000);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
