 const name = "My Array Library";

  const options ={
    version: '1.1',
    auther:'code malayalam'
}

 function addAll(arr= []){
    log('addAll');
    return arr.reduce((total,item)=>total+item,0)
}

 export default function findMax(arr = []){
    log("findMax");
    return Math.max(...arr);
}

function log(val){
    console.log("INSIDE",val);
}

export{
    name as libraryName,
    options,
    addAll,
    findMax
}