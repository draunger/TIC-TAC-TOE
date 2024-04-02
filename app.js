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
let flag =1;
// for(let i =1; i<=9; i++)
// {
b1.addEventListener('click',() =>{
    if(flag===1)
    {
     b1.textContent="X";
     flag=-1;
    }
    else{
     b1.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
h2.textContent="X wins";
else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
h2.textContent="O wins";
else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
h2.textContent="O wins";
else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
h2.textContent="O wins";
  });
  b2.addEventListener('click',() =>{
    if(flag===1)
    {
     b2.textContent="X";
     flag=-1;
    }
    else{
     b2.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
  else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
  h2.textContent="X wins";
  else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
  else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
  else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
  h2.textContent="O wins";
  });
  b3.addEventListener('click',() =>{
    if(flag===1)
    {
     b3.textContent="X";
     flag=-1;
    }
    else{
     b3.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
  else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
  h2.textContent="X wins";
  else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
  else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
  else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
  h2.textContent="O wins";
  });
  b4.addEventListener('click',() =>{
    if(flag===1)
    {
     b4.textContent="X";
     flag=-1;
    }
    else{
     b4.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
h2.textContent="X wins"; 
else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
h2.textContent="O wins";

  });
  b5.addEventListener('click',() =>{
    if(flag===1)
    {
     b5.textContent="X";
     flag=-1;
    }
    else{
     b5.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
h2.textContent="X wins"; 
else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
 h2.textContent="O wins";
else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
 h2.textContent="O wins";
else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
h2.textContent="O wins";
  });
  b6.addEventListener('click',() =>{
    if(flag===1)
    {
     b6.textContent="X";
     flag=-1;
    }
    else{
     b6.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
  h2.textContent="X wins"; 
  else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
   h2.textContent="O wins";
  else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
   h2.textContent="O wins";
  else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
 h2.textContent="O wins";
     
  });
  b7.addEventListener('click',() =>{
    if(flag===1)
    {
     b7.textContent="X";
     flag=-1;
    }
    else{
     b7.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
  h2.textContent="X wins"; 
  else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
    h2.textContent="O wins";
  else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
    h2.textContent="O wins";
  else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
  h2.textContent="O wins";
     
  });
  b8.addEventListener('click',() =>{
    if(flag===1)
    {
     b8.textContent="X";
     flag=-1;
    }
    else{
     b8.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
    h2.textContent="X wins";
  else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
  h2.textContent="X wins"; 
  else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
    h2.textContent="O wins";
  else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
    h2.textContent="O wins";
  else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
  h2.textContent="O wins";
     
  });
  b9.addEventListener('click',() =>{
    if(flag===1)
    {
     b9.textContent="X";
     flag=-1;
    }
    else{
     b9.textContent="O";
     flag=1;
    }
    if((b1.textContent=="X"&&b2.textContent=="X"&&b3.textContent=="X")||(b4.textContent=="X"&&b5.textContent=="X"&&b6.textContent=="X")||(b7.textContent=="X"&&b8.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b4.textContent=="X"&&b7.textContent=="X")||(b2.textContent=="X"&&b5.textContent=="X"&&b8.textContent=="X")||(b3.textContent=="X"&&b6.textContent=="X"&&b9.textContent=="X"))
  h2.textContent="X wins";
else if((b1.textContent=="X"&&b5.textContent=="X"&&b9.textContent=="X")||(b3.textContent=="X"&&b5.textContent=="X"&&b7.textContent=="O"))
h2.textContent="X wins"; 
else if((b1.textContent=="O"&&b2.textContent=="O"&&b3.textContent=="O")||(b4.textContent=="O"&&b5.textContent=="O"&&b6.textContent=="O")||(b7.textContent=="O"&&b8.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
else if((b1.textContent=="O"&&b4.textContent=="O"&&b7.textContent=="O")||(b2.textContent=="O"&&b5.textContent=="O"&&b8.textContent=="O")||(b3.textContent=="O"&&b6.textContent=="O"&&b9.textContent=="O"))
  h2.textContent="O wins";
else if((b1.textContent=="O"&&b5.textContent=="O"&&b9.textContent=="O")||(b3.textContent=="O"&&b5.textContent=="O"&&b7.textContent=="O"))
h2.textContent="O wins";

  });
 
  
// }