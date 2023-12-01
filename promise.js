function check(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(num)
        },2000)
    })
}

check(5)

.then((x)=>{
    return check(x+x)
})
.then((x)=>{
    console.log(x);
})
.finally(()=>{
    console.log('thankyou');
})
    
