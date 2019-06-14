const remote = require('electron').remote;
const url = require('url');
const path = require('path');
var window = remote.getCurrentWindow();

/*
document.getElementById("min-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.minimize();
});

document.getElementById("max-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     if (!window.isMaximized()) {
         window.maximize();
     } else {
         window.unmaximize();
     }
});
*/


document.getElementById("learnTexts").addEventListener("click", function (e) {
  //window.open((__dirname, 'html/manageTexts.html'));
  //window.open('https://github.com', '_self', 'nodeIntegration=no');
  window.location.replace("../html/revisionPage.html");
});


document.getElementById("manageTexts").addEventListener("click", function (e) {
  window.location.replace("../html/manageTexts.html");
});


document.getElementById("settings").addEventListener("click", function (e) {
  window.close();
});


document.getElementById("quit").addEventListener("click", function (e) {
  window.close();
});
