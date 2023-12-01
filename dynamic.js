import { createButton } from "./widget.js";
// import { changeBg,stopChangingBg } from "./feature2.js";

createButton('feature 1',()=>{
    alert('feature 1')
});
// createButton('feature 2',()=>{
//     import ('./feature2.js')
//     .then((obj)=>{
//         createButton("start Disco",obj.changeBg);
//         createButton("stop Disco",obj.stopChangingBg);
//     });
    
// });

createButton('feature 2',async ()=>{ 
    const obj =await import('./feature2.js');
        createButton("start Disco",obj.changeBg);
        createButton("stop Disco",obj.stopChangingBg);
    });
    



let isGreen =true;
let handle = null;
function changeBg(){
    if(!handle){
   handle = setInterval(() => {
     document.body.style.background = isGreen ? 'green':'blue'; 
     isGreen =!isGreen;  
    },500)
 }
}

function stopChangingBg(){
    if(handle){    
    clearInterval(handle);
    handle = null;
    document.body.style.background='none';
    }
}

