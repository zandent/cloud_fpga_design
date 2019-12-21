var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://cloud-fpga.firebaseio.com',
    serviceAccount: 'cloud-fpga-firebase-adminsdk-fyuvi-9be1247855.json', //this is file that I downloaded from Firebase Console
});

var database = firebase.database();

var referencesw = database.ref('/keyfolder');

var sw= 0;


referencesw.on('value', function(snapshot){
  sw = snapshot.val().sw;
  var fs = require('fs');
  var fileName = './key.txt';    
  fs.writeFileSync(fileName, sw.toString());
});
