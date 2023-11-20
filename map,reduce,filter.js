const users=[
    {firstName:"shafana",lastName:"hanna",age:24},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padukone",age:24}
];

// MAP

// const output =users.map( x => x.firstName + " " + x.lastName)
// console.log(output);


// REDUCE

const output = users.reduce(function(total,item){
    if(total[item.age]){
        total[item.age] = ++total[item.age];
    }
    else{
        total[item.age] = 1;
    }
    return total;
},{});
console.log(output);


// FILTER

// const output1 = users.filter(x => x.age < 30);

// console.log(output1);

const output1 = users.filter((x) => x.age < 30 ).map((x) => x.firstName);

console.log(output1);

// by using reduce method
const output2  = users.reduce(function(total,item) {
    if(item.age<30){
        total.push(item.firstName)
    }
    return total;
},[]);
console.log(output2);
