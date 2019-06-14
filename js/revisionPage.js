var fs = require('fs');
var $ = require('jquery');

const {remote} = require('electron')
var path = remote.app.getAppPath();

console.log('Current path: ' + remote.app.getAppPath())

var texts;
var fileLBDV;
var tmpPath=path+'/ressources/Texts/data.json'
fs.readFile(tmpPath, 'utf8', function(err, contents) {
  if(err){
    throw err;
  }
  else{
    texts = JSON.parse(contents);
    fileLBDV = path+"/ressources/Texts/"+texts.texts.LBDV.path
    readScriptFile(fileLBDV);
    //console.log(texts.texts.LBDV.audioPath)
  }
});

var replique;
var ligneSplited;
var repliqueCourante = 0;
var list = document.getElementById("playground");    // Get the <ul> element to insert a new node
var end = document.getElementById("end");    // Get the <ul> element to insert a new node

function readScriptFile(path){
  fs.readFile(path, 'utf8', function(err, content) {
    if(err){
      throw err;
    }
    else{
      replique = content.split('\n');
      replique.pop();
      var newItem;
      var perso;
      //alert("on commence ;)");
    }
  });
}

function loadReplique(num){
  //console.log(num);
  //console.log(replique.length);
  if(num>replique.length-1){
    return -1
  }
  var ligneSplited = replique[num].split(' : ');
  //ligneSplited = ligneSplited.split(' : ');
  //console.log(ligneSplited[0]);
  //console.log(ligneSplited[1]);
  //var newItem = document.createElement("div");       // Create a <li> node
  //newItem="<div>Toto</div>"
  newItem = document.createElement("div");
  //"<div class='replique monPerso'><div class='nom'> "+ ligneSplited[0] + "</div><div class='texte'>" + ligneSplited[1] + "</div></div>"
  perso="monPerso"
  switch (ligneSplited[0]){
    case "narrateur":
    newItem.innerHTML = "<div class='replique'><div class='narrateur'>" + ligneSplited[1] + "</div></div>";
    break;

    case "Eva":
    newItem.innerHTML = "<div class='replique'><div class='mesNoms'> "+ ligneSplited[0] + "</div><div class='mesRepliques'>" + ligneSplited[1] + "</div></div>";
    break;

    case "tous":
    newItem.innerHTML = "<div class='replique'><div class='allName'> "+ ligneSplited[0] + "</div><div class='allReplique'>" + ligneSplited[1] + "</div></div>";
    break;

    default:
    newItem.innerHTML = "<div class='replique'><div class='autresNoms'> "+ ligneSplited[0] + "</div><div class='autresRepliques'>" + ligneSplited[1] + "</div></div>";
  }
  insertAfter(newItem, end);  // Insert <li> before the first child of <ul>
  //alert("us!");
  //$('#playground').insert('<li>text</li>');
  //console.log("/");
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var fin;
function newReplique(){
  //console.log("nouvelle replique");
  fin = loadReplique(repliqueCourante);
  if(fin==-1){
    document.getElementById("next").innerHTML = "FINI!";
  }
  repliqueCourante+=1;
}
