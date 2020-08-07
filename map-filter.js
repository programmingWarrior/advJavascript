const ages = [3,4,5,7,6,8];
const doubleAge = [];


// for(let i=0; i<ages.length; i++){
//     const element = ages[i];
//     const result = element * element;
//     doubleAge.push(result);
// };
// console.log(doubleAge);

const result = ages.map(function(element,index,array){
    return element*element;
})
console.log(result);

const resul = ages.map((element) => {
    return element*element;
    
});
console.log(resul);

const resu = ages.map(element => element*element);
console.log(resu);

const filter = ages.filter(x => x > 5);
console.log(filter);

const find = ages.find(x => x > 7);
console.log(find);

// map = element,index,array if needed then it back the all value;
// filter = it is filtering the value of array which needed by you.
// find = it is give the value directly as element which are immediate and give the one item;