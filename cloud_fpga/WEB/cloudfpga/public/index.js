var database = firebase.database();

var referenceone = database.ref('/');
var referenceled = database.ref('/ledfolder');

var led = 0;
var sw = 0;
var key = 0;
var hex0 = 0;
var hex1 = 0;

var key3 = true;
var key2 = true;
var key1 = true;
var key0 = true;

var led0 = false;
var led1 = false;
var led2 = false;
var led3 = false;
var led4 = false;
var led5 = false;
var led6 = false;
var led7 = false;
var led8 = false;
var led9 = false;

var sw0 = false;
var sw1 = false;
var sw2 = false;
var sw3 = false;
var sw4 = false;
var sw5 = false;
var sw6 = false;
var sw7 = false;
var sw8 = false;
var sw9 = false;

var hex00 = false;
var hex01 = false;
var hex02 = false;
var hex03 = false;
var hex04 = false;
var hex05 = false;
var hex06 = false;

var hex10 = false;
var hex11 = false;
var hex12 = false;
var hex13 = false;
var hex14 = false;
var hex15 = false;
var hex16 = false;

var hex20 = false;
var hex21 = false;
var hex22 = false;
var hex23 = false;
var hex24 = false;
var hex25 = false;
var hex26 = false;

var hex30 = false;
var hex31 = false;
var hex32 = false;
var hex33 = false;
var hex34 = false;
var hex35 = false;
var hex36 = false;

var hex40 = false;
var hex41 = false;
var hex42 = false;
var hex43 = false;
var hex44 = false;
var hex45 = false;
var hex46 = false;

var hex50 = false;
var hex51 = false;
var hex52 = false;
var hex53 = false;
var hex54 = false;
var hex55 = false;
var hex56 = false;
/////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "KEY[3]";
cell = row.insertCell(1);
cell.innerHTML = "KEY[2]";
cell = row.insertCell(2);
cell.innerHTML = "KEY[1]";
cell = row.insertCell(3);
cell.innerHTML = "KEY[0]";
document.getElementById('keyi').appendChild(outtable);
/////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);

var cell = row.insertCell(0);
cell.onclick = function() {
    calculateledsendkey(3);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY3ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY3OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(1);
cell.onclick = function() {
    calculateledsendkey(2);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY2ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY2OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(2);
cell.onclick = function() {
    calculateledsendkey(1);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY1ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY1OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(3);
cell.onclick = function() {
    calculateledsendkey(0);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY0ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'KEY0OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

document.getElementById('key').appendChild(outtable);
/////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "HEX5[ ]";
cell = row.insertCell(1);
cell.innerHTML = "HEX4[ ]";
cell = row.insertCell(2);
cell.innerHTML = "HEX3[ ]";
cell = row.insertCell(3);
cell.innerHTML = "HEX2[ ]";
cell = row.insertCell(4);
cell.innerHTML = "HEX1[ ]";
cell = row.insertCell(5);
cell.innerHTML = "HEX0[ ]";
document.getElementById('hexi').appendChild(outtable);
/////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "LEDR[9]";
cell = row.insertCell(1);
cell.innerHTML = "LEDR[8]";
cell = row.insertCell(2);
cell.innerHTML = "LEDR[7]";
cell = row.insertCell(3);
cell.innerHTML = "LEDR[6]";
cell = row.insertCell(4);
cell.innerHTML = "LEDR[5]";
cell = row.insertCell(5);
cell.innerHTML = "LEDR[4]";
cell = row.insertCell(6);
cell.innerHTML = "LEDR[3]";
cell = row.insertCell(7);
cell.innerHTML = "LEDR[2]";
cell = row.insertCell(8);
cell.innerHTML = "LEDR[1]";
cell = row.insertCell(9);
cell.innerHTML = "LEDR[0]";
document.getElementById('ledi').appendChild(outtable);
/////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "SW[9]";
cell = row.insertCell(1);
cell.innerHTML = "SW[8]";
cell = row.insertCell(2);
cell.innerHTML = "SW[7]";
cell = row.insertCell(3);
cell.innerHTML = "SW[6]";
cell = row.insertCell(4);
cell.innerHTML = "SW[5]";
cell = row.insertCell(5);
cell.innerHTML = "SW[4]";
cell = row.insertCell(6);
cell.innerHTML = "SW[3]";
cell = row.insertCell(7);
cell.innerHTML = "SW[2]";
cell = row.insertCell(8);
cell.innerHTML = "SW[1]";
cell = row.insertCell(9);
cell.innerHTML = "SW[0]";
document.getElementById('swi').appendChild(outtable);
//////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);

var cell = row.insertCell(0);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex500";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex501";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex550";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex510";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex551";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex511";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex560";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex561";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex540";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex520";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex541";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex521";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex530";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex531";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
/////
var cell = row.insertCell(1);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex400";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex401";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex450";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex410";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex451";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex411";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex460";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex461";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex440";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex420";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex441";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex421";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex430";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex431";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
/////
var cell = row.insertCell(2);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex300";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex301";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex350";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex310";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex351";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex311";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex360";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex361";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex340";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex320";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex341";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex321";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex330";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex331";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
//////
var cell = row.insertCell(3);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex200";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex201";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex250";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex210";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex251";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex211";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex260";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex261";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex240";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex220";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex241";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex221";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex230";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex231";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
//////
var cell = row.insertCell(4);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex100";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex101";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex150";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex110";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex151";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex111";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex160";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex161";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex140";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex120";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex141";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex121";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex130";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex131";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
//////
var cell = row.insertCell(5);
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex000";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(2);
innercell.id = "hex001";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "0";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
innercell.id = "hex050";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex010";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(2);
var innercell = innerrow.insertCell(0);
innercell.id = "hex051";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "5";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex011";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "1";

var innerrow = innertable.insertRow(3);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex060";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(2);
innercell.id = "hex061";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "6";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";

var innerrow = innertable.insertRow(4);
var innercell = innerrow.insertCell(0);
innercell.id = "hex040";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex020";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(5);
var innercell = innerrow.insertCell(0);
innercell.id = "hex041";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "4";
var innercell = innerrow.insertCell(1);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(2);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(3);
innercell.id = "hex021";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "2";

var innerrow = innertable.insertRow(6);
var innercell = innerrow.insertCell(0);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
var innercell = innerrow.insertCell(1);
innercell.id = "hex030";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(2);
innercell.id = "hex031";
innercell.style = 'background: #d9d9d9;color: #fff';
innercell.innerHTML = "3";
var innercell = innerrow.insertCell(3);
innercell.style = 'background: #fff;color: #fff';
innercell.innerHTML = "X";
cell.appendChild(innertable);
document.getElementById('hex').appendChild(outtable);
//////////////////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
outtable.style  = 'color: #000';
var row = outtable.insertRow(0);

var cell = row.insertCell(0);
cell.onclick = function() {
    calculateledsendsw(9);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW9ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW9OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(1);
cell.onclick = function() {
    calculateledsendsw(8);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW8ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW8OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(2);
cell.onclick = function() {
    calculateledsendsw(7);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW7ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW7OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(3);
cell.onclick = function() {
    calculateledsendsw(6);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW6ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW6OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(4);
cell.onclick = function() {
    calculateledsendsw(5);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW5ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW5OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(5);
cell.onclick = function() {
    calculateledsendsw(4);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW4ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW4OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(6);
cell.onclick = function() {
    calculateledsendsw(3);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW3ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW3OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(7);
cell.onclick = function() {
    calculateledsendsw(2);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW2ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW2OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(8);
cell.onclick = function() {
    calculateledsendsw(1);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW1ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW1OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

var cell = row.insertCell(9);
cell.onclick = function() {
    calculateledsendsw(0);
}
var innertable = document.createElement('table');
innertable.border = '0';
innertable.width = '100%';
innertable.style = 'background: #fff';
var innerrow = innertable.insertRow(0);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW0ON';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #fff;color: #fff';
innerinnertable.innerHTML = "ON";
innercell.appendChild(innerinnertable);
var innerrow = innertable.insertRow(1);
var innercell = innerrow.insertCell(0);
var innerinnertable = document.createElement('table');
innerinnertable.id = 'SW0OFF';
innerinnertable.border = '0';
innerinnertable.width = '100%';
innerinnertable.style = 'background: #000; color: #fff';
innerinnertable.innerHTML = "OFF";
innercell.appendChild(innerinnertable);
cell.appendChild(innertable);

document.getElementById('sw').appendChild(outtable);
////////////////////////////////////////////////
var outtable = document.createElement('table');
outtable.border = '1';
outtable.width = '100%';
outtable.style = 'background: #fff';
var row = outtable.insertRow(0);

var cell = row.insertCell(0);
var innertable = document.createElement('table');
innertable.id = 'led9';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(1);
var innertable = document.createElement('table');
innertable.id = 'led8';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(2);
var innertable = document.createElement('table');
innertable.id = 'led7';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(3);
var innertable = document.createElement('table');
innertable.id = 'led6';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(4);
var innertable = document.createElement('table');
innertable.id = 'led5';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(5);
var innertable = document.createElement('table');
innertable.id = 'led4';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(6);
var innertable = document.createElement('table');
innertable.id = 'led3';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(7);
var innertable = document.createElement('table');
innertable.id = 'led2';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(8);
var innertable = document.createElement('table');
innertable.id = 'led1';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);

var cell = row.insertCell(9);
var innertable = document.createElement('table');
innertable.id = 'led0';
innertable.width = '100%';
innertable.style = 'background: #d9d9d9;color: #fff';
innertable.innerHTML = "OFF";
cell.appendChild(innertable);
document.getElementById('led').appendChild(outtable);
referenceled.on('value', function(snapshot){
    led = snapshot.val().led;
    var ledtemp = Math.floor(led);
    led0 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led1 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led2 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led3 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led4 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led5 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led6 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led7 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led8 = ledtemp%2;
    ledtemp = Math.floor(ledtemp/2);
    led9 = ledtemp%2;
    if(led0){
        document.getElementById('led0').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led0').innerHTML = "ON";
    } else {
        document.getElementById('led0').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led0').innerHTML = "OFF";
    }
    if(led1){
        document.getElementById('led1').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led1').innerHTML = "ON";
    } else {
        document.getElementById('led1').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led1').innerHTML = "OFF";
    }
    if(led2){
        document.getElementById('led2').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led2').innerHTML = "ON";
    } else {
        document.getElementById('led2').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led2').innerHTML = "OFF";
    }
    if(led3){
        document.getElementById('led3').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led3').innerHTML = "ON";
    } else {
        document.getElementById('led3').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led3').innerHTML = "OFF";
    }
    if(led4){
        document.getElementById('led4').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led4').innerHTML = "ON";
    } else {
        document.getElementById('led4').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led4').innerHTML = "OFF";
    }
    if(led5){
        document.getElementById('led5').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led5').innerHTML = "ON";
    } else {
        document.getElementById('led5').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led5').innerHTML = "OFF";
    }
    if(led6){
        document.getElementById('led6').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led6').innerHTML = "ON";
    } else {
        document.getElementById('led6').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led6').innerHTML = "OFF";
    }
    if(led7){
        document.getElementById('led7').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led7').innerHTML = "ON";
    } else {
        document.getElementById('led7').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led7').innerHTML = "OFF";
    }
    if(led8){
        document.getElementById('led8').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led8').innerHTML = "ON";
    } else {
        document.getElementById('led8').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led8').innerHTML = "OFF";
    }
    if(led9){
        document.getElementById('led9').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('led9').innerHTML = "ON";
    } else {
        document.getElementById('led9').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('led9').innerHTML = "OFF";
    }
});
//////////////////////////////////////////////////////////////////
referenceone.child('hex0folder').on('value', function(snapshot){
    hex0 = snapshot.val().hex;
    var hex0temp = Math.floor(hex0);
    hex00 = hex0temp%2;
    hex00 = !hex00;
    hex0temp = Math.floor(hex0temp/2);
    hex01 = hex0temp%2;
    hex01 = !hex01;
    hex0temp = Math.floor(hex0temp/2);
    hex02 = hex0temp%2;
    hex02 = !hex02;
    hex0temp = Math.floor(hex0temp/2);
    hex03 = hex0temp%2;
    hex03 = !hex03;
    hex0temp = Math.floor(hex0temp/2);
    hex04 = hex0temp%2;
    hex04 = !hex04;
    hex0temp = Math.floor(hex0temp/2);
    hex05 = hex0temp%2;
    hex05 = !hex05;
    hex0temp = Math.floor(hex0temp/2);
    hex06 = hex0temp%2;
    hex06 = !hex06;
    hex0temp = Math.floor(hex0temp/2);
    hex10 = hex0temp%2;
    hex10 = !hex10;
    hex0temp = Math.floor(hex0temp/2);
    hex11 = hex0temp%2;
    hex11 = !hex11;
    hex0temp = Math.floor(hex0temp/2);
    hex12 = hex0temp%2;
    hex12 = !hex12;
    hex0temp = Math.floor(hex0temp/2);
    hex13 = hex0temp%2;
    hex13 = !hex13;
    hex0temp = Math.floor(hex0temp/2);
    hex14 = hex0temp%2;
    hex14 = !hex14;
    hex0temp = Math.floor(hex0temp/2);
    hex15 = hex0temp%2;
    hex15 = !hex15;
    hex0temp = Math.floor(hex0temp/2);
    hex16 = hex0temp%2;
    hex16 = !hex16;
    hex0temp = Math.floor(hex0temp/2);
    hex20 = hex0temp%2;
    hex20 = !hex20;
    hex0temp = Math.floor(hex0temp/2);
    hex21 = hex0temp%2;
    hex21 = !hex21;
    hex0temp = Math.floor(hex0temp/2);
    hex22 = hex0temp%2;
    hex22 = !hex22;
    hex0temp = Math.floor(hex0temp/2);
    hex23 = hex0temp%2;
    hex23 = !hex23;
    hex0temp = Math.floor(hex0temp/2);
    hex24 = hex0temp%2;
    hex24 = !hex24;
    hex0temp = Math.floor(hex0temp/2);
    hex25 = hex0temp%2;
    hex25 = !hex25;
    hex0temp = Math.floor(hex0temp/2);
    hex26 = hex0temp%2;
    hex26 = !hex26;
    if(hex00){
        document.getElementById('hex000').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex001').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex000').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex001').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex01){
        document.getElementById('hex010').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex011').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex010').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex011').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex02){
        document.getElementById('hex020').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex021').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex020').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex021').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex03){
        document.getElementById('hex030').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex031').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex030').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex031').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex04){
        document.getElementById('hex040').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex041').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex040').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex041').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex05){
        document.getElementById('hex050').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex051').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex050').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex051').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex06){
        document.getElementById('hex060').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex061').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex060').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex061').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex10){
        document.getElementById('hex100').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex101').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex100').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex101').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex11){
        document.getElementById('hex110').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex111').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex110').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex111').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex12){
        document.getElementById('hex120').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex121').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex120').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex121').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex13){
        document.getElementById('hex130').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex131').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex130').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex131').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex14){
        document.getElementById('hex140').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex141').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex140').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex141').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex15){
        document.getElementById('hex150').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex151').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex150').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex151').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex16){
        document.getElementById('hex160').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex161').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex160').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex161').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex20){
        document.getElementById('hex200').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex201').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex200').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex201').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex21){
        document.getElementById('hex210').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex211').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex210').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex211').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex22){
        document.getElementById('hex220').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex221').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex220').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex221').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex23){
        document.getElementById('hex230').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex231').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex230').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex231').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex24){
        document.getElementById('hex240').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex241').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex240').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex241').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex25){
        document.getElementById('hex250').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex251').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex250').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex251').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex26){
        document.getElementById('hex260').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex261').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex260').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex261').style = 'background: #d9d9d9;color: #fff';
    }
});
//////////////////////////////////////////////////////////////////
referenceone.child('hex1folder').on('value', function(snapshot){
    hex1 = snapshot.val().hex;
    var hex1temp = Math.floor(hex1);
    hex30 = hex1temp%2;
    hex30 = !hex30;
    hex1temp = Math.floor(hex1temp/2);
    hex31 = hex1temp%2;
    hex31 = !hex31;
    hex1temp = Math.floor(hex1temp/2);
    hex32 = hex1temp%2;
    hex32 = !hex32;
    hex1temp = Math.floor(hex1temp/2);
    hex33 = hex1temp%2;
    hex33 = !hex33;
    hex1temp = Math.floor(hex1temp/2);
    hex34 = hex1temp%2;
    hex34 = !hex34;
    hex1temp = Math.floor(hex1temp/2);
    hex35 = hex1temp%2;
    hex35 = !hex35;
    hex1temp = Math.floor(hex1temp/2);
    hex36 = hex1temp%2;
    hex36 = !hex36;
    hex1temp = Math.floor(hex1temp/2);
    hex40 = hex1temp%2;
    hex40 = !hex40;
    hex1temp = Math.floor(hex1temp/2);
    hex41 = hex1temp%2;
    hex41 = !hex41;
    hex1temp = Math.floor(hex1temp/2);
    hex42 = hex1temp%2;
    hex42 = !hex42;
    hex1temp = Math.floor(hex1temp/2);
    hex43 = hex1temp%2;
    hex43 = !hex43;
    hex1temp = Math.floor(hex1temp/2);
    hex44 = hex1temp%2;
    hex44 = !hex44;
    hex1temp = Math.floor(hex1temp/2);
    hex45 = hex1temp%2;
    hex45 = !hex45;
    hex1temp = Math.floor(hex1temp/2);
    hex46 = hex1temp%2;
    hex46 = !hex46;
    hex1temp = Math.floor(hex1temp/2);
    hex50 = hex1temp%2;
    hex50 = !hex50;
    hex1temp = Math.floor(hex1temp/2);
    hex51 = hex1temp%2;
    hex51 = !hex51;
    hex1temp = Math.floor(hex1temp/2);
    hex52 = hex1temp%2;
    hex52 = !hex52;
    hex1temp = Math.floor(hex1temp/2);
    hex53 = hex1temp%2;
    hex53 = !hex53;
    hex1temp = Math.floor(hex1temp/2);
    hex54 = hex1temp%2;
    hex54 = !hex54;
    hex1temp = Math.floor(hex1temp/2);
    hex55 = hex1temp%2;
    hex55 = !hex55;
    hex1temp = Math.floor(hex1temp/2);
    hex56 = hex1temp%2;
    hex56 = !hex56;
    if(hex30){
        document.getElementById('hex300').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex301').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex300').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex301').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex31){
        document.getElementById('hex310').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex311').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex310').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex311').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex32){
        document.getElementById('hex320').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex321').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex320').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex321').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex33){
        document.getElementById('hex330').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex331').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex330').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex331').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex34){
        document.getElementById('hex340').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex341').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex340').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex341').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex35){
        document.getElementById('hex350').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex351').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex350').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex351').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex36){
        document.getElementById('hex360').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex361').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex360').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex361').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex40){
        document.getElementById('hex400').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex401').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex400').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex401').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex41){
        document.getElementById('hex410').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex411').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex410').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex411').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex42){
        document.getElementById('hex420').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex421').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex420').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex421').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex43){
        document.getElementById('hex430').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex431').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex430').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex431').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex44){
        document.getElementById('hex440').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex441').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex440').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex441').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex45){
        document.getElementById('hex450').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex451').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex450').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex451').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex46){
        document.getElementById('hex460').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex461').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex460').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex461').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex50){
        document.getElementById('hex500').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex501').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex500').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex501').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex51){
        document.getElementById('hex510').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex511').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex510').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex511').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex52){
        document.getElementById('hex520').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex521').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex520').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex521').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex53){
        document.getElementById('hex530').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex531').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex530').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex531').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex54){
        document.getElementById('hex540').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex541').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex540').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex541').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex55){
        document.getElementById('hex550').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex551').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex550').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex551').style = 'background: #d9d9d9;color: #fff';
    }
    if(hex56){
        document.getElementById('hex560').style = 'background: #ff1a1a;color: #fff';
        document.getElementById('hex561').style = 'background: #ff1a1a;color: #fff';
    } else {
        document.getElementById('hex560').style = 'background: #d9d9d9;color: #fff';
        document.getElementById('hex561').style = 'background: #d9d9d9;color: #fff';
    }
});
//////////////////////////////////////////////////////////////////
referenceone.child('cplogfolder').on('value', function(snapshot){
    document.getElementById('vcplog').innerHTML = snapshot.val().cplog;
    var objDiv = document.getElementById("vcplog");
    objDiv.scrollTop = objDiv.scrollHeight;
});
//////////////////////////////////////////////////////////////////
function calculateledsendsw(swbuttonnum){
    if(swbuttonnum==0){
        sw0 = !sw0;
    } else if(swbuttonnum==1){
        sw1 = !sw1;
    } else if(swbuttonnum==2){
        sw2 = !sw2;
    } else if(swbuttonnum==3){
        sw3 = !sw3;
    } else if(swbuttonnum==4){
        sw4 = !sw4;
    } else if(swbuttonnum==5){
        sw5 = !sw5;
    } else if(swbuttonnum==6){
        sw6 = !sw6;
    } else if(swbuttonnum==7){
        sw7 = !sw7;
    } else if(swbuttonnum==8){
        sw8 = !sw8;
    } else if(swbuttonnum==9){
        sw9 = !sw9;
    } else {

    }
    sw = sw0*1+sw1*2+sw2*4+sw3*8+sw4*16+sw5*32+sw6*64+sw7*128+sw8*256+sw9*512;
    sw = padding1(sw, 4);
    referenceone.child('swfolder').update({sw:sw});
    if(sw0){
        document.getElementById('SW0ON').style = "background: #000; color: #fff";
        document.getElementById('SW0OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW0ON').style = "background: #fff; color: #fff";
        document.getElementById('SW0OFF').style = "background: #000; color: #fff";
    }
    if(sw1){
        document.getElementById('SW1ON').style = "background: #000; color: #fff";
        document.getElementById('SW1OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW1ON').style = "background: #fff; color: #fff";
        document.getElementById('SW1OFF').style = "background: #000; color: #fff";
    }
    if(sw2){
        document.getElementById('SW2ON').style = "background: #000; color: #fff";
        document.getElementById('SW2OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW2ON').style = "background: #fff; color: #fff";
        document.getElementById('SW2OFF').style = "background: #000; color: #fff";
    }
    if(sw3){
        document.getElementById('SW3ON').style = "background: #000; color: #fff";
        document.getElementById('SW3OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW3ON').style = "background: #fff; color: #fff";
        document.getElementById('SW3OFF').style = "background: #000; color: #fff";
    }
    if(sw4){
        document.getElementById('SW4ON').style = "background: #000; color: #fff";
        document.getElementById('SW4OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW4ON').style = "background: #fff; color: #fff";
        document.getElementById('SW4OFF').style = "background: #000; color: #fff";
    }
    if(sw5){
        document.getElementById('SW5ON').style = "background: #000; color: #fff";
        document.getElementById('SW5OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW5ON').style = "background: #fff; color: #fff";
        document.getElementById('SW5OFF').style = "background: #000; color: #fff";
    }
    if(sw6){
        document.getElementById('SW6ON').style = "background: #000; color: #fff";
        document.getElementById('SW6OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW6ON').style = "background: #fff; color: #fff";
        document.getElementById('SW6OFF').style = "background: #000; color: #fff";
    }
    if(sw7){
        document.getElementById('SW7ON').style = "background: #000; color: #fff";
        document.getElementById('SW7OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW7ON').style = "background: #fff; color: #fff";
        document.getElementById('SW7OFF').style = "background: #000; color: #fff";
    }
    if(sw8){
        document.getElementById('SW8ON').style = "background: #000; color: #fff";
        document.getElementById('SW8OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW8ON').style = "background: #fff; color: #fff";
        document.getElementById('SW8OFF').style = "background: #000; color: #fff";
    }
    if(sw9){
        document.getElementById('SW9ON').style = "background: #000; color: #fff";
        document.getElementById('SW9OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('SW9ON').style = "background: #fff; color: #fff";
        document.getElementById('SW9OFF').style = "background: #000; color: #fff";
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateledsendkey(keybuttonnum){
    if(keybuttonnum==0){
        key0 = !key0;
    } else if(keybuttonnum==1){
        key1 = !key1;
    } else if(keybuttonnum==2){
        key2 = !key2;
    } else if(keybuttonnum==3){
        key3 = !key3;
    } else {

    }
    key = key0*1+key1*2+key2*4+key3*8;
    key = padding1(key, 2);
    referenceone.child('keyfolder').update({key:key});
    if(key0){
        document.getElementById('KEY0ON').style = "background: #000; color: #fff";
        document.getElementById('KEY0OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('KEY0ON').style = "background: #fff; color: #fff";
        document.getElementById('KEY0OFF').style = "background: #000; color: #fff";
    }
    if(key1){
        document.getElementById('KEY1ON').style = "background: #000; color: #fff";
        document.getElementById('KEY1OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('KEY1ON').style = "background: #fff; color: #fff";
        document.getElementById('KEY1OFF').style = "background: #000; color: #fff";
    }
    if(key2){
        document.getElementById('KEY2ON').style = "background: #000; color: #fff";
        document.getElementById('KEY2OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('KEY2ON').style = "background: #fff; color: #fff";
        document.getElementById('KEY2OFF').style = "background: #000; color: #fff";
    }
    if(key3){
        document.getElementById('KEY3ON').style = "background: #000; color: #fff";
        document.getElementById('KEY3OFF').style = "background: #fff; color: #fff";
    } else {
        document.getElementById('KEY3ON').style = "background: #fff; color: #fff";
        document.getElementById('KEY3OFF').style = "background: #000; color: #fff";
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////
function padding1(num, length) {
    for(var len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;            
    }
    return num;
}

function compileV() {
    var code = document.getElementById('vcode_content').value;
    referenceone.child('codefolder').update({code:code,state:1});
}

    