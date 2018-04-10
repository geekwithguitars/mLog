


const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.csv')
});

var contents = fs.readFileSync('input.csv').toString();

var temparray = contents.split("\r\n");


console.log(temparray[2] +"LOLOLOLOL");
console.log(contents.split("\r\n")[3]);
/*
var brain = require('brain.js');
    var net = new brain.recurrent.LSTM();
    console.log("start train!")
    net.train([{input: [0, 0], output: [0]},
               {input: [0, 1], output: [1]},
               {input: [1, 0], output: [1]},
               {input: [1, 1], output: [0]}]);
               console.log("end train!")
               console.log("stary output!")
    var output = net.run([0, 0]);  // [0]
    console.log(output);
    output = net.run([0, 1]);  // [1]
    console.log(output);
    output = net.run([1, 0]);  // [1]
    console.log(output);
    output = net.run([1, 1]);  // [0]
    console.log(output);
    console.log("end output!")
*/