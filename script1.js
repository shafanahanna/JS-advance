console.log("script1");


 export function addArray(arr){
    return arr.reduce((total,item)=>total+item,0);
}

const value = addArray([3,5,5]);
console.log(value);