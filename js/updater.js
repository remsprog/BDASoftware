console.log("Starting!");
var wget = require('node-wget');
var fs = require('fs');


function download(){
  wget({url: 'https://github.com/remsprog/BDASoftware/archive/master.zip'}, function(err, response, body) {
    if (err) {
      throw err;
    }
    else {
      var extract = require('extract-zip');
      var targetPath = process.cwd()+"../updaterRessources/master";
      console.log("Téléchargé!");
      extract("master.zip", {dir: targetPath}, function (err) {
        // extraction is complete. make sure to handle the err
        if(err) {
          throw (err);
        }
        else {
          console.log("Extrait!");
          deplace();
        }
      });
    }
  });

  function deplace(){
    oldPath = process.cwd()+"../updaterRessources/master/BDASoftware-master";
    newPath = process.cwd()+"../Soft";
    fs.rename(oldPath, newPath, function(err) {
      if(err) {
        throw err;
      }
      else {
        console.log("Déplacé!");
        var tmpPath = process.cwd()+"../updaterRessources/master";
        fs.rmdirSync(tmpPath);
        console.log("Tout s'est bien passé!")
      }
    });
  };
}

download();
