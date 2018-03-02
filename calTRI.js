let myPort = require('./myPortValue.json');
let backDate = 30 //Period: 30 90 180 360
const totalDate = myPort.length;
//console.log(totalDate);
let TotalReturn=[];
var TotalReturnIndex = 100;

//function calculate Total Return
var TR = (ValueBefore,ValueNow,Order) => ((ValueNow-Order)/ValueBefore)-1;
// ---------

//function calculate Total Return Index
var TRI = (TotalReturn) => {
    TotalReturnIndex = TotalReturnIndex*(1+TotalReturn);
    //console.log(i,TRIBefore-100);
    return TotalReturnIndex;
}
// --------------

if(backDate<=myPort.length){
    for(let i=backDate-1;i>=1;i--){
        TotalReturn[i] = TR(myPort[i].Value,myPort[i-1].Value,myPort[i-1].Order);
        TotalReturnIndex = TRI(TotalReturn[i]);
        //console.log(i,TotalReturn[i]);
        //console.log(i,TRI(TotalReturn[i]));
    }
    TotalReturnIndex = TotalReturnIndex-100;
    TotalReturnIndex = TotalReturnIndex.toFixed(2);
    console.log('Your Return= '+TotalReturnIndex+'%');
}else{
    console.log('Your Investment Period = '+myPort.length+' Days');
    for(let i=myPort.length-1;i>=1;i--){
        TotalReturn[i] = TR(myPort[i].Value,myPort[i-1].Value,myPort[i-1].Order);
        TotalReturnIndex = TRI(TotalReturn[i]);
        //console.log(i,TotalReturn[i]);
        //console.log(i,TRI(TotalReturn[i]));
    }
    TotalReturnIndex = TotalReturnIndex-100;
    TotalReturnIndex = TotalReturnIndex.toFixed(2);
    console.log('Your Return= '+TotalReturnIndex+'%');
}
