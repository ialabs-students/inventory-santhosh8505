var milkshake = /** @class */ (function () {
    function milkshake(modelNumber, modelName, count) {
        this.brand = 'milkshake';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.count = count;
    }
    milkshake.prototype.getEngineInfo = function () {
        return "Milkshake count" + this.count;
    };
    return milkshake;
}());
var icecream = /** @class */ (function () {
    function icecream(modelNumber, modelName, count) {
        this.brand = 'icecream';
        this.modelNumber = modelNumber;
        this.modelName = modelName;
        this.count = count;
    }
    icecream.prototype.getEngineInfo = function () {
        return "Icecream count" + this.count;
    };
    return icecream;
}());
// var juice1 = {modelNumber:'1',modelName:'7up',count:'10'};
var milkshake1 = new milkshake('1', 'choco', '20');
var milkshake2 = new milkshake('2', 'strawberry', '21');
var icecream1 = new icecream('1', 'butterscotch', '23');
var icecream2 = new icecream('2', 'vanilla', '13');
var icecream3 = new icecream('3', 'mango', '10');
delete icecream3['modelNumber'];
console.log("-----------------------");
function getKey(milkshake1, milkshake2) {
    var arr = [], obj = Object.keys(milkshake1);
    for (var count in obj) {
        if (milkshake1[obj[count]] > 5) {
            arr.push(obj[count]);
        }
    }
    return arr;
}
var milkshake5 = [{ brand: "milkshake", modelNumber: "2", modelName: "oreo", count: "23" },
    { brand: "milkshake", modelNumber: "3", modelName: "kitkat", count: "21" }];
var result = milkshake5.filter(function (obj) {
    return obj.count > '5';
});
console.log(result);
//  var juice6 = {};
// Object.assign(juice5, {brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"});
// Object.assign(juice6,{brand:"juice", modelNumber:"3",modelName:"soda",count:"21"})
// juice6   = juice5.filter(function(elem) {
//   return !(elem.count >5 )});
// console.log(juice1.getEngineInfo());
console.log("Department dataset");
console.log(milkshake1, milkshake2, icecream1, icecream2);
console.log("--------------------------------");
console.log("delete");
console.log(icecream3);
console.log("-----------------------");
console.log("addional");
console.log(milkshake5);
console.log("-----------------------");
console.log("threshold");
console.log(getKey(milkshake1, milkshake2));
console.log(result);
// console.log(juice2);
// console.log(biscult1);
// console.log(biscult2);
// console.log(juice3withjuice4);
// var biscult1 = new biscult('2', 'milk','12');
// console.log(biscult.getEngineInfo());
// console.log(biscult1);
// var obj: {name: string, age:number};
// obj = {name: "X", age: 1}
