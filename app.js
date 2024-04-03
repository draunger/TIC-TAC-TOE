let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let h2 = document.getElementById('h2');
let outerbox = document.getElementById('outerbox');
let start = document.getElementById('start');
let div  = document.getElementById('box');
let flag =1;
start.addEventListener("click",()=>{
  let b1 = document.createElement("button");
  let b2 = document.createElement("button");
  let h3 = document.createElement("h3");
  h3.textContent="which is your favourite ?"
  b1.textContent="X";
  b2.textContent="O";
  h3.setAttribute('class','h3');
  b1.setAttribute('class','start1');
  b2.setAttribute('class','start2');
  div.appendChild(h3);
  div.appendChild(b1);
  div.appendChild(b2);
  b1.addEventListener("click",()=>{
    let x = "X";
    let y = "O";
show(x,y);
  outerbox.removeChild(div);
  })
  b2.addEventListener("click",()=>{
    let x = "X";
    let y = "O";
show(y,x);
    outerbox.removeChild(div);
    })
})
function show(x,y){
b1.addEventListener('click',() =>{
    if(flag===1)
    {
     b1.textContent=x;
     flag=-1;
    }
    else{
     b1.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
  });
  b2.addEventListener('click',() =>{
    if(flag===1)
    {
     b2.textContent=x;
     flag=-1;
    }
    else{
     b2.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
  });
  b3.addEventListener('click',() =>{
    if(flag===1)
    {
     b3.textContent=x;
     flag=-1;
    }
    else{
     b3.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
  });
  b4.addEventListener('click',() =>{
    if(flag===1)
    {
     b4.textContent=x;
     flag=-1;
    }
    else{
     b4.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";

  });
  b5.addEventListener('click',() =>{
    if(flag===1)
    {
     b5.textContent=x;
     flag=-1;
    }
    else{
     b5.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
    h2.textContent="X wins";
  else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
    h2.textContent="X wins";
  else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
  h2.textContent="X wins";
  else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
  h2.textContent="O wins";
  else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
  h2.textContent="O wins";
  else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
  h2.textContent="O wins";
  });
  b6.addEventListener('click',() =>{
    if(flag===1)
    {
     b6.textContent=x;
     flag=-1;
    }
    else{
     b6.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
     
  });
  b7.addEventListener('click',() =>{
    if(flag===1)
    {
     b7.textContent=x;
     flag=-1;
    }
    else{
     b7.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
     
  });
  b8.addEventListener('click',() =>{
    if(flag===1)
    {
     b8.textContent=x;
     flag=-1;
    }
    else{
     b8.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";
  });
  b9.addEventListener('click',() =>{
    if(flag===1)
    {
     b9.textContent=x;
     flag=-1;
    }
    else{
     b9.textContent=y;
     flag=1;
    }
    if((b1.textContent==x&&b2.textContent==x&&b3.textContent==x)||(b4.textContent==x&&b5.textContent==x&&b6.textContent==x)||(b7.textContent==x&&b8.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b4.textContent==x&&b7.textContent==x)||(b2.textContent==x&&b5.textContent==x&&b8.textContent==x)||(b3.textContent==x&&b6.textContent==x&&b9.textContent==x))
  h2.textContent="X wins";
else if((b1.textContent==x&&b5.textContent==x&&b9.textContent==x)||(b3.textContent==x&&b5.textContent==x&&b7.textContent==x))
h2.textContent="X wins";
else if((b1.textContent==y&&b2.textContent==y&&b3.textContent==y)||(b4.textContent==y&&b5.textContent==y&&b6.textContent==y)||(b7.textContent==y&&b8.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b4.textContent==y&&b7.textContent==y)||(b2.textContent==y&&b5.textContent==y&&b8.textContent==y)||(b3.textContent==y&&b6.textContent==y&&b9.textContent==y))
h2.textContent="O wins";
else if((b1.textContent==y&&b5.textContent==y&&b9.textContent==y)||(b3.textContent==y&&b5.textContent==y&&b7.textContent==y))
h2.textContent="O wins";

  });
}
  
// }