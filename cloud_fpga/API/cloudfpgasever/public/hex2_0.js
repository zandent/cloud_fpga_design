var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://cloud-fpga.firebaseio.com',
    serviceAccount: 'cloud-fpga-firebase-adminsdk-fyuvi-9be1247855.json', //this is file that I downloaded from Firebase Console
});

var database = firebase.database();

var referenceled = database.ref('/hex0folder');

var led= 0;

	var fs = require('fs');
		fs.watch('./hex2_0.txt', function (event, filename) {
			var fss = require('fs'),filename = "./hex2_0.txt";
				fss.readFile(filename, 'utf8', function(err, data) {
				if (err) throw err;
		    	referenceled.set({led:data});
			});
		});
		