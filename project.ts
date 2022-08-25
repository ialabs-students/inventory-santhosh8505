interface options {
    modelNumber: string;
    modelName: string;
    count: string;
    getEngineInfo(): string;
}


class milkshake implements options {
    modelNumber: string;
    modelName: string;
    count: string;
    constructor(modelNumber: string, modelName: string, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    brand: string = 'milkshake';
    getEngineInfo(): string{
      return "Milkshake count" + this.count;
    }
    
}
class icecream implements options{
    modelNumber: string;
    modelName: string;
    count: string;
    constructor(modelNumber: string, modelName: string, count: string) {
        this.modelNumber = modelNumber; 
        this.modelName = modelName;
        this.count = count;
    }
    
    brand: string = 'icecream';
    getEngineInfo(): string{
      return "Icecream count" + this.count;
    }
}
// var juice1 = {modelNumber:'1',modelName:'7up',count:'10'};

var milkshake1 = new milkshake('1', 'choco','20');

var milkshake2 = new milkshake('2', 'strawberry','21');

var  icecream1 = new icecream('1','butterscotch','23');
var icecream2 = new icecream('2','vanilla','13');
var icecream3 = new icecream('3','mango','10');


 delete icecream3['modelNumber'];
 
 console.log("-----------------------");
 
 

            
function getKey(milkshake1,milkshake2){
  const arr = [],
  obj = Object.keys(milkshake1);
  for (var count in obj){
    if(milkshake1[obj[count]] > 5){
      arr.push(obj[count]);
    }
  }
  return arr;
}

 var milkshake5 = [{brand:"milkshake", modelNumber:"2",modelName:"oreo",count:"23"},
 {brand:"milkshake", modelNumber:"3",modelName:"kitkat",count:"21"}];

 const result = milkshake5.filter((obj) => {
  return obj.count > '5';

});

console.log(result);



 
 
 


console.log("Department dataset");

console.log(milkshake1,milkshake2,icecream1,icecream2);
console.log("--------------------------------");
console.log("delete");

console.log(icecream3);

console.log("-----------------------");
console.log("addional");

console.log(milkshake5);
console.log("-----------------------");
console.log("threshold");

console.log(getKey(milkshake1 ,milkshake2))

console.log(result);






