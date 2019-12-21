var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://cloud-fpga.firebaseio.com',
    serviceAccount: 'cloud-fpga-firebase-adminsdk-fyuvi-9be1247855.json', //this is file that I downloaded from Firebase Console
});

var database = firebase.database();

var referencecode = database.ref('/codefolder');

var code;

var finalgenerate;

referencecode.on('value', function(snapshot){
  var maybetop;
  if(snapshot.val().state==1){
    finalgenerate = false;
    referencecode.update({state:0});
    var start = snapshot.val().start;
    var code  = snapshot.val().code;
    var stringValue = snapshot.val().code;
    var positions = new Array();
    var pos = stringValue.indexOf("module");
    while (pos > -1) {
      positions.push(pos);
      pos = stringValue.indexOf("module", pos + 1);
    }
    var positions2 = new Array();
    var pos2 = stringValue.indexOf("endmodule");
    while (pos2 > -1) {
      positions2.push(pos2+3);
      pos2 = stringValue.indexOf("endmodule", pos2 + 1);
    }
    for (var i = positions.length - 1; i >= 0; i--) {
      a = positions[i];
      for (var j = positions2.length - 1; j >= 0; j--) {
          b = positions2[j];
          if (a == b) {
            positions.splice(i, 1);
            positions2.splice(j, 1);
              break;
          }
      }
    }
    for(var i = 0;i<positions.length;i++){
      var module = positions[i];
      var moduleend = module+6;
      var nextt = skiptns(moduleend,code);
      var endd  = findend(nextt,code);
      if(i==positions.length-1){
        if (endd==-1) {
          // finalgenerate = false;
        }
        maybetop = code.substring(nextt,endd+1);
        if(maybetop.indexOf("SW")!=-1||maybetop.indexOf("LEDR")!=-1
        ||maybetop.indexOf("KEY")!=-1||maybetop.indexOf("HEX0")!=-1
        ||maybetop.indexOf("HEX1")!=-1||maybetop.indexOf("HEX2")!=-1
        ||maybetop.indexOf("HEX3")!=-1||maybetop.indexOf("HEX4")!=-1
        ||maybetop.indexOf("HEX5")!=-1||maybetop.indexOf("CLOCK_50")!=-1){
          finalgenerate = true;
          break;
        }
      }
      else {
        if (endd==-1||endd>=positions[i+1]) {
          continue;
        }
        maybetop = code.substring(nextt,endd+1);
        if(maybetop.indexOf("SW")!=-1||maybetop.indexOf("LEDR")!=-1
        ||maybetop.indexOf("KEY")!=-1||maybetop.indexOf("HEX0")!=-1
        ||maybetop.indexOf("HEX1")!=-1||maybetop.indexOf("HEX2")!=-1
        ||maybetop.indexOf("HEX3")!=-1||maybetop.indexOf("HEX4")!=-1
        ||maybetop.indexOf("HEX5")!=-1||maybetop.indexOf("CLOCK_50")!=-1){
          finalgenerate = true;
          break;
        }
      }
    }
    if(finalgenerate){
      if(maybetop.indexOf("input")!=-1||maybetop.indexOf("output")!=-1){
        var positionsc = new Array();
        var posc = stringValue.indexOf(",");
        while (posc > -1) {
          positionsc.push(posc);
          posc = stringValue.indexOf("module", posc + 1);
        }
        var finalcode = -2;
        var fs = require('fs');
        var fileName = '/home/admin/start_cloud_official_project/fpga_portion.v';    
        fs.writeFileSync(fileName, finalcode.toString());
      } else {
        var finalcode = start;
        finalcode+="\n";
        finalcode+=maybetop.substring(0,maybetop.indexOf("("));
        finalcode+=" topU0";
        finalcode+=maybetop.substring(maybetop.indexOf("("));
        finalcode+="\nendmodule\n";
        finalcode+=code;
        var fs = require('fs');
        var fileName = '/home/admin/start_cloud_official_project/fpga_portion.v';    
        fs.writeFileSync(fileName, finalcode.toString());
        const exec = require('child_process').exec;
        var yourscript = exec('sh compile_convert_transfer.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
      }
    } else {
      var finalcode = -1;
      var fs = require('fs');
      var fileName = '/home/admin/start_cloud_official_project/fpga_portion.v';    
      fs.writeFileSync(fileName, finalcode.toString());
    }
  }
});

function skiptns(index,code){
  var i = index;
  var nextchar = code[i];
  while(nextchar=="\t"||nextchar=="\n"||nextchar==" "){
    i++;
    nextchar = code[i];
  }
  return i;
}

function findend (index,code){
  if(code.indexOf(");",index)==-1){
    return(code.indexOf(");",index));
  }
  else{
    return(code.indexOf(");",index)+1);
  }
}