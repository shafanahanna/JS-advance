const scrample='abcd';
const array=[0,3,1,2];

let result = '';

for (i=0;i<scrample.length;i++){
    for(j=0;j<array.length;j++){
        if(i==array[j]){
            result += scrample[j];
            
        }
    }
}
console.log(result);

