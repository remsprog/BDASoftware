//const data = require('https://raw.githubusercontent.com/remsprog/test1/master/toto.json')

var https = require("https");
var fs = require("fs")
//var url = 'http://graph.facebook.com/517267866/?fields=picture';
var url = "https://raw.githubusercontent.com/remsprog/test1/master/toto.json"
let reponse;
var serverVersion;
var localVersion;
var nbrFilesSync = 0;
var retourHttp = https.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
      serverVersion = JSON.parse(body);
      nbrFilesSync+=1;
      compareFiles();
    });
});
retourHttp.on('error', function(e){
      console.log("Got an error: ", e);
});

//console.log(reponse);

fs.readFile('../data.json', (err, data) => {
  if (err) throw err;
  localVersion = JSON.parse(data);
  nbrFilesSync+=1;
  //console.log(localVersion);
  compareFiles();
});
function getLocalFile(){

};

function compareFiles(){
  //console.log("on compare");
  if(nbrFilesSync>=2){
    //console.log("coucou")
    //console.log(localVersion.version);
    //console.log(serverVersion.version);
    if(serverVersion.version>localVersion.version){
      console.log("mise à niveau nécessaire!")
    }
    else{
      if(serverVersion.version<localVersion.version){
        console.log("il y a un problème!");
      }
      else{
        console.log("Vous êtes à jour!");
      }
    }
  }
}
