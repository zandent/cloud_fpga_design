var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://cloud-fpga.firebaseio.com',
    serviceAccount: 'cloud-fpga-firebase-adminsdk-fyuvi-9be1247855.json', //this is file that I downloaded from Firebase Console
});

var database = firebase.database();

var referenceone = database.ref('/');

var led = 0;

var ledtxt = document.createElement('a');
ledtxt.href = "data:text/plain;charset=UTF-8,";
ledtxt.download = 'led.txt';

referenceone.on('value', function(snapshot){
  ledtxt.href="data:text/plain;charset=UTF-8,"  + encodeURIComponent(snapshot.val().led);
  ledtxt.click();
});
