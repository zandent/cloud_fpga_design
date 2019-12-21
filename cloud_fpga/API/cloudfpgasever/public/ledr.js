var firebase = require('firebase');

firebase.initializeApp({
    databaseURL: 'https://cloud-fpga.firebaseio.com',
    serviceAccount: 'cloud-fpga-firebase-adminsdk-fyuvi-9be1247855.json', //this is file that I downloaded from Firebase Console
});

var database = firebase.database();

var referenceled = database.ref('/ledfolder');

var led= 0;

	var fs = require('fs');
		fs.watch('./ledr.txt', function (event, filename) {
			var fss = require('fs'),filename = "./ledr.txt";
				fss.readFile(filename, 'utf8', function(err, data) {
				if (err) throw err;
		    	referenceled.set({led:data});
			});
		});
		