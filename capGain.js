let myPort = require('./myPortValue.json');
let startInvest = myPort[myPort.length-1].Value;
var order = 0;

for(let i=myPort.length-1;i>=1;i--){
    order += myPort[i].Order;
}
let totalInvest = startInvest + order;
let gain = myPort[0].Value - totalInvest;
console.log(gain.toFixed(2));