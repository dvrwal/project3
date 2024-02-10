let btn = document.getElementById('send-btn');
let output = document.getElementById('output');
let mssg = ['Your message has been sent ,I will be sure to answer ASAP!']
btn.addEventListener('click',

function(){
   var result=mssg[ Math.floor(Math.random()*mssg.length)]
 output.innerHTML=result;
   


}

)